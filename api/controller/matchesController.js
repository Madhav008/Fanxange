const redisClient = require('../../redis');
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


    const matches = await getCachedOrFreshTrendingMatches();

    var liveMatches = [];

    for (const match of matches) {
        // Given data
        if (match.state == 'LIVE') {
            // liveMatches.push(match);
            const seriesId = match.series.objectId;
            const matchId = match.objectId;
            const liveMatch = await getLiveScore(matchId, seriesId)

            const matchInfo = {};
            matchInfo.matchId = match.objectId;
            matchInfo.seriesId = match.series.objectId;
            if (liveMatch.status === "Live" && !liveMatch.isCancelled) {
                matchInfo.title = liveMatch.title;
                matchInfo.teams = liveMatch.teams;
                matchInfo.statusText = liveMatch.statusText;
                matchInfo.groundName = liveMatch.ground.smallName;
                matchInfo.status = "Live";


            } else {
                matchInfo.status = liveMatch.status;
                matchInfo.title = liveMatch.title;
                matchInfo.teams = liveMatch.teams;
                matchInfo.statusText = liveMatch.statusText;
                matchInfo.groundName = liveMatch.ground.smallName;
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
            matchInfo.matchId = match.objectId;
            matchInfo.seriesId = match.series.objectId;
            matchInfo.state = 'PRE';
            const matchStartTime = new Date(match.startTime);
            const statusText = getMatchStatusText(matchStartTime, match.statusText);
            const formattedDate = formatDateAndTime(match.startTime)

            matchInfo.statusText = statusText
            matchInfo.matchTime = formattedDate
            matchInfo.teams = match.teams;
            matchInfo.groundName = match.ground.smallName


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
            matchInfo.matchId = match.objectId;
            matchInfo.seriesId = match.series.objectId;
            matchInfo.state = 'POST';
            const matchStartTime = new Date(match.startTime);
            const statusText = getMatchStatusText(matchStartTime, match.statusText);
            const formattedDate = formatDateAndTime(match.startTime)

            matchInfo.statusText = statusText
            matchInfo.matchTime = formattedDate
            matchInfo.teams = match.teams;
            matchInfo.groundName = match.ground.smallName


            liveMatches.push(matchInfo)
        }

    }

    try {
        res.status(200).json({ liveMatches });
    } catch (error) {
        console.log('Error occurred:', error.message);
    }
}


async function getMatchInfo(req, res) {
    const { matchId, seriesId } = req.body;
    try {
        const matches = await RecentMatches.find({
            seriesId: seriesId,
            matchId: matchId
        })
        res.status(200).json({ matches })
    } catch (error) {
        console.log(error.message);
        res.status(503).json({ error: error.message });
    }


}

const getRecentMatchesForPlayer = async (req, res) => {
    try {
        // Extract the playerId from request parameters
        var { playerId } = req.params;
        playerId = parseInt(playerId, 10);
        const aggregateMatches = [
            {
                '$unwind': '$teamPlayers'
            }, {
                '$match': {
                    'teamPlayers.playerId': playerId
                }
            }
        ]
        const recentMatches = await RecentMatches.aggregate(aggregateMatches);
        res.status(200).json({ recentMatches });
    } catch (error) {
        console.error("Error fetching recent matches:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getRecentMatchesForPlayer, getMatchInfo, getRecentMacthes, getAllMatches, getLiveMacthes, getUpcommingMacthes, getFinishedMacthes }




// Function to get cached or fresh trending matches data
async function getCachedOrFreshTrendingMatches() {
    // const cachedMatches = await redisClient.get('trendingMatches');

    // if (cachedMatches) {
    //     console.log("CACHE HIT")
    //     return JSON.parse(cachedMatches);
    // } else {
    console.log("CACHE MISS")
    const recentMatches = await getTrendingMatches();
    const matches = recentMatches?.trendingMatches.matches;
    // await redisClient.setEx('trendingMatches', 360, JSON.stringify(matches));
    return matches;
    // }
}



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

