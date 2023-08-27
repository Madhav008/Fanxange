const RecentMatches = require('../models/Matches');
const { getTrendingMatches, getLiveScore } = require('./espnApiController');

async function getRecentMacthes(req, res) {
    try {

        const currentDate = new Date().toISOString().slice(0, 10);

        const aggregationQuery = [
            {
                $addFields: {
                    startDate: {
                        $dateToString: {
                            format: '%Y-%m-%d',
                            date: { $toDate: '$startDate' },
                        },
                    },
                    endDate: {
                        $dateToString: {
                            format: '%Y-%m-%d',
                            date: { $toDate: '$endDate' },
                        },
                    },
                },
            },
            {
                $match: {
                    startDate: { $gte: currentDate },
                    endDate: { $lte: currentDate },
                },
            },
        ];

        const result = await RecentMatches.aggregate(aggregationQuery);

        res.status(200).json({ result });

    } catch (error) {
        console.log('Error occurred:', error);
    }
}


async function getAllMatches(req, res) {
    const matches = await RecentMatches.find({});

    try {
        res.status(200).json({ matches });
    } catch (error) {
        console.log('Error occurred:', error.message);
    }
}

async function getLiveMacthes(req, res) {
    const recentMatches = await getTrendingMatches()

    const matches = recentMatches?.trendingMatches.matches;

    var liveMatches = [];

    for (const match of matches) {
        // Given data
        if (match.state == 'LIVE') {
            // liveMatches.push(match);
            const seriesId = match.series.objectId;
            const matchId = match.objectId;
            const liveMatch = await getLiveScore(matchId, seriesId)

            const matchInfo = {};
            if (liveMatch.status === "Live" && !liveMatch.isCancelled) {
                matchInfo.title = liveMatch.title;
                matchInfo.teams = liveMatch.teams;
                matchInfo.statusText = liveMatch.statusText;
                matchInfo.ground = liveMatch.ground.smallName;
                matchInfo.status = "Live";
                // if (liveMatch.teams[0].isLive) {
                //     matchInfo.teamBatting = "Team 1";
                //     matchInfo.teamScore = liveMatch.teams[0].score;
                //     matchInfo.teamScoreInfo = liveMatch.teams[0].scoreInfo;
                // } else if (liveMatch.teams[1].isLive) {
                //     matchInfo.teamBatting = "Team 2";
                //     matchInfo.teamScore = liveMatch.teams[1].score;
                //     matchInfo.teamScoreInfo = liveMatch.teams[1].scoreInfo;
                // }
            } else {
                matchInfo.status = liveMatch.status;
                matchInfo.title = liveMatch.title;
                matchInfo.teams = liveMatch.teams;
                matchInfo.statusText = liveMatch.statusText;
                matchInfo.ground = liveMatch.ground.smallName;
            }
            liveMatches.push(matchInfo);
        }

    }

    try {
        res.status(200).json({ liveMatches });
    } catch (error) {
        console.log('Error occurred:', error.message);
    }
}


async function getUpcommingMacthes(req, res) {
    const recentMatches = await getTrendingMatches()

    const matches = recentMatches?.trendingMatches.matches;

    var liveMatches = [];

    for (const match of matches) {
        const team1 = match.teams[0].team.name;
        const team2 = match.teams[1].team.name;
        if (match.state == 'PRE' && team1 !== "TBA" && team2 !== "TBA") {
            const matchInfo = {};
            matchInfo.state = 'PRE';
            const matchStartTime = new Date(match.startTime);
            const statusText = getMatchStatusText(matchStartTime, match.statusText);
            const formattedDate = formatDateAndTime(match.startTime)

            matchInfo.statusText = statusText
            matchInfo.matchTime = formattedDate
            matchInfo.teams = match.teams;
            matchInfo.ground = match.ground.smallName


            liveMatches.push(matchInfo)
        }

    }

    try {
        res.status(200).json({ liveMatches });
    } catch (error) {
        console.log('Error occurred:', error.message);
    }
}



async function getFinishedMacthes(req, res) {
    const recentMatches = await getTrendingMatches()

    const matches = recentMatches?.trendingMatches.matches;

    var liveMatches = [];

    for (const match of matches) {

        if (match.state == 'POST') {
            const matchInfo = {};
            matchInfo.state = 'POST';
            const matchStartTime = new Date(match.startTime);
            const statusText = getMatchStatusText(matchStartTime, match.statusText);
            const formattedDate = formatDateAndTime(match.startTime)

            matchInfo.statusText = statusText
            matchInfo.matchTime = formattedDate
            matchInfo.teams = match.teams;
            matchInfo.ground = match.ground.smallName


            liveMatches.push(matchInfo)
        }

    }

    try {
        res.status(200).json({ liveMatches });
    } catch (error) {
        console.log('Error occurred:', error.message);
    }
}




module.exports = { getRecentMacthes, getAllMatches, getLiveMacthes, getUpcommingMacthes, getFinishedMacthes }



function getMatchStatusText(matchStartTime, statusTextTemplate) {
    const now = new Date();

    const timeRemaining = matchStartTime - now;
    const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    // const statusTextTemplate = "Match starts in {{MATCH_START_HOURS}} {{MATCH_START_MINS}} ";
    const completedStatusText = statusTextTemplate
        .replace("{{MATCH_START_HOURS}}", hoursRemaining + " hrs")
        .replace("{{MATCH_START_MINS}}", minutesRemaining + " mins");

    return completedStatusText;
}



function formatDateAndTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();

    // Check if the date is today
    if (
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
    ) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `Today at ${hours}:${minutes}`;
    }

    // Check if the date is tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    if (
        date.getDate() === tomorrow.getDate() &&
        date.getMonth() === tomorrow.getMonth() &&
        date.getFullYear() === tomorrow.getFullYear()
    ) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `Tomorrow at ${hours}:${minutes}`;
    }

    // If neither today nor tomorrow, return the full date
    return date.toISOString();
}

