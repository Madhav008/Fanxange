const axios = require("axios");
const startExecuteInsertSeries = require("../seeds/SeedSeries");
const startExecuteInsertMatches = require("../seeds/SeedMatch");
const { calculateBowlingPoints, calculateBattingPoints, calculateFieldingPoints } = require("../Server/Points_Server/PointType/CalculateT20Points");
const startExecuteInsertTeams = require("../seeds/SeedTeams");
const startExecuteInsertPlayerStats = require("../seeds/SeedPlayers");
const startExecuteInsertBattingStats = require("../seeds/SeedBatting");
const startExecuteInsertBowlingStats = require("../seeds/SeedBowling");
const startExecuteInsertFieldingStats = require("../seeds/SeedFilding");
const createDocument = require("../backend/appwrite/graph");

async function getAllSeriesData() {
    const databaseId = "648c6cd2577988d9fb09";
    const collectionId = "648c6cda0a95e984f6ad";

    const url = "https://hs-consumer-api.espncricinfo.com/v1/ui/edition/details?&keySeriesItems=true&edition=in&lang=en"

    const seriesData = await getEspnData(url);

    const series = seriesData.keySeriesItems;

    series.forEach(async ele => {




        // let type = ele.typeId;
         

        // await getAllMatchesData(ele.objectId)

        /*    const url = `https://hs-consumer-api.espncricinfo.com/v1/pages/series/schedule?lang=en&seriesId=${ele.objectId}`;
   
           const matchesData = await getEspnData(url);
   
           const type = matchesData.series?.matchClass?.name;
           const data = {
               title: ele.title,
               tournament_type: type
           };
   
           // console.log(data)
   
   
           createDocument(databaseId, collectionId, data) */






    });
}

// getAllSeriesData()

async function getAllMatchesData(seriesId) {
    const url = `https://hs-consumer-api.espncricinfo.com/v1/pages/series/schedule?lang=en&seriesId=${seriesId}`;

    const matchesData = await getEspnData(url);

    const matches = matchesData.content.matches;

    matches.forEach(async ele => {
        // console.log(ele.startDate, ele.slug, ele.objectId, ele.series.objectId);
        if (ele.objectId !== undefined && ele.series.objectId !== undefined) {
            await getMatchData(ele.series.objectId, ele.objectId);
        }
        // await startExecuteInsertMatches(ele.objectId, ele.startDate, seriesId, ele.slug)
     /*    const data = {
            start_date: ele.startDate,
            seriesId: seriesId,
            name: ele.slug,
            matchId: ele.objectId,
        }

        
        console.log(ele.objectId, ele.title);
        const databaseId = "648c6cd2577988d9fb09";
        const collectionId = "648c6ce86632be598253";        
        createDocument(databaseId, collectionId, data)
        wait(6000);
         */
    });

}
getAllMatchesData(1347399)

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getMatchData(seriesId, matchId) {
    if (seriesId === undefined || matchId === undefined) {
        return;
    }
    const url = `https://hs-consumer-api.espncricinfo.com/v1/ui/match/details?latest=true&lang=en&seriesId=${seriesId}&matchId=${matchId}`;

    // const url = "https://hs-consumer-api.espncricinfo.com/v1/ui/match/details?latest=true&lang=en&seriesId=1347399&matchId=1347569"
    console.log(url)
    const matchData = await getEspnData(url);

    let fieldingStats = new Map();
    let battingStats = new Map();
    let bowlingStats = new Map();

    var teams = [];
    var teamPlayers = [];

    matchData?.matchPlayers?.teamPlayers.forEach(e => {
        teams.push(e.team);
        // teamPlayers.push(players);
        e.players.forEach(d => {
            var playerdata = {
                "playerId": d.player.objectId,
                "name": d.player.longName,
                "shortName": d.player.name,
                'teamId': e.team.objectId
            }
            teamPlayers.push(playerdata);

            fieldingStats.set(playerdata.name, {
                playerId: playerdata.playerId,
                matchId: matchId,
                catches: 0,
                runouts: 0,
                stumping: 0
            });
        })
    })

    matchData.scorecard?.innings.forEach((inning) => {

        inning?.inningBatsmen.forEach((batsman) => {
            var hundred = 0;
            var fifty = 0;
            var tempRuns = batsman.runs;
            if (batsman.battedType === "yes" && batsman.runs != null) {
                if (batsman.runs >= 100) {
                    hundred = Math.floor(batsman.runs / 100);
                    batsman.runs -= hundred * 100;
                }

                if (batsman.runs >= 50) {
                    fifty = Math.floor(batsman.runs / 50);
                    batsman.runs -= fifty * 50;
                }


                battingStats.set(batsman.player.objectId, {
                    playerId: batsman.player.objectId,
                    matchId: matchId,
                    bat_runs: tempRuns,
                    balls_faced: batsman.balls,
                    six_hit: batsman.sixes,
                    four_hit: batsman.fours,
                    is_bat: true,
                    is_out: batsman.isOut,
                    hundred: hundred,
                    fifty: fifty,
                })
            }
        })


        inning?.inningBowlers.forEach((bowler) => {
            bowlingStats.set(bowler.player.objectId, {
                balls_bowled: bowler.balls,
                dot_balls: bowler.dots,
                four_given: bowler.fours,
                maidian_over: bowler.maidens,
                runs_given: bowler.conceded,
                six_given: bowler.sixes,
                wicket: bowler.wickets,
                is_ball: true,
                match_id: matchId,
                player_id: bowler.player.objectId
            })

        })

        inning?.inningBatsmen.forEach(e => {
            if (e.dismissalType != null && e.dismissalType != 2 && e.dismissalType != 12) {
                // console.log(e.dismissalText)
                if (e.dismissalType === 1) {
                    if (e.dismissalText.long.split(" ")[1] === "&") {
                        // console.log("Caught out by " + e.dismissalText.long.split(" ")[3])
                        var fielderName = e.dismissalText.long.split(" ")[3];

                        //: Search the fielder name in the players array
                        const player = searchFielderName(fielderName, teamPlayers);

                        if (player) {
                            let playerStats = fieldingStats.get(player?.name);
                            playerStats.catches += 1;
                        }


                    } else {
                        // console.log("Caught out by " + e.dismissalText.long.split(" ")[1])
                        var fielderName = e.dismissalText.long.split(" ")[1];

                        //: Search the fielder name in the players array
                        const player = searchFielderName(fielderName, teamPlayers);
                        if (player) {
                            let playerStats = fieldingStats.get(player?.name);
                            playerStats.catches += 1;
                        }

                    }
                } else if (e.dismissalType === 4) {
                    var fielderName = e.dismissalText.long.split(" ")[2];

                    fielderName = fielderName.replace(/\(|\)/g, "");
                    // console.log("Run out by " + fielderName)

                    //: Search the fielder name in the players array
                    const player = searchFielderName(fielderName, teamPlayers);

                    if (player) {
                        let playerStats = fieldingStats.get(player.name);
                        playerStats.runouts += 1;
                    }


                }
            }
        })
    })





    for (let [key, value] of bowlingStats) {
        // console.log();
        let {
            balls_bowled,
            dot_balls,
            four_given,
            maidian_over,
            runs_given,
            six_given,
            wicket,
            is_ball,
            match_id,
            player_id

        } = value


        const bowlingPoints = calculateBowlingPoints({
            wickets: wicket,
            dot_balls: dot_balls,
            ball_bowled: balls_bowled,
            madian_over: maidian_over,
            four_faces: four_given,
            six_faces: six_given,
            runs_given: runs_given,
            isBall: is_ball
        })


        // console.log(bowlingPoints)
        await startExecuteInsertBowlingStats(balls_bowled, dot_balls, four_given, is_ball, maidian_over, match_id, player_id, bowlingPoints, runs_given, six_given, wicket)

    }

    for (let [key, value] of battingStats) {
        let {
            playerId,
            matchId,
            bat_runs,
            balls_faced,
            six_hit,
            four_hit,
            is_bat,
            is_out,
            hundred,
            fifty

        } = value

        const battingPoints = calculateBattingPoints({
            bat_runs,
            fours_hit: four_hit,
            sixes_hit: six_hit,
            fifty,
            hundred,
            isBat: is_bat,
            isOut: is_out,
            ball_faced: balls_faced
        })


        // console.log(battingPoints)
        await startExecuteInsertBattingStats(is_bat, is_out, balls_faced, bat_runs, fifty, four_hit, hundred, matchId, playerId, battingPoints, six_hit)
    }

    for (let [key, value] of fieldingStats) {
        let {
            playerId,
            matchId,
            catches, runouts, stumping

        } = value
        // console.log(value)
        const fieldingPoints = calculateFieldingPoints({
            catches, runouts, stumping
        })


        // console.log(fieldingPoints)
        await startExecuteInsertFieldingStats(catches, matchId, playerId, fieldingPoints, runouts, stumping)

    }
    //Seed the Teams
    // console.log(teams)
    teams.forEach(async team => {
        await startExecuteInsertTeams(team.objectId, team.longName)
    })

    //Seed the Players
    // console.log(teamPlayers)
    teamPlayers.forEach(async player => {
        await startExecuteInsertPlayerStats(player.playerId, player.teamId, player.name, player.shortName)
    })
}
// getMatchData()




function searchFielderName(fielderName, teamPlayers) {
    let foundPlayer = null;

    teamPlayers.forEach(element => {
        if (element.name && element.name.includes(fielderName)) {
            foundPlayer = element;
        }

    });

    return foundPlayer;
}




async function getEspnData(url) {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error(error.message);
    }

}