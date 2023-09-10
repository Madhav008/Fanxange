const { calculatePlayerPrice } = require("../../Server/PlayerPrice/PlayerPriceFormula");
const RecentMatches = require("../models/Matches");
const Performance = require("../models/Performance");
const BattingStats = require("../models/PlayerBattingStats");
const BowlingStats = require("../models/PlayerBowlingStats");
const FieldingStats = require("../models/PlayerFieldingStats");

// Example protected route controller
const PerformanceRoute = async (req, res) => {
    // Handle the protected API route logic
    const { playerId } = req.params;
    const matches = await getRecentMatchesForPlayer(playerId);
    //Get the MatchID 
    const playerPerfomanceMatches = [];
    for (const match of matches) {
        const dateObject = extractDateFromTimestamp(match.endDate);
        const currentDateObject = extractDateFromTimestamp(new Date());
        console.log(dateObject)
        console.log(currentDateObject)
        if (dateObject != currentDateObject) {
            const matchId = match.matchId;
            var batStats = await getBatStatsForPlayer(playerId, matchId);
            var bowlStats = await getBowlStatsForPlayer(playerId, matchId);
            var fieldStats = await getFieldStatsForPlayer(playerId, matchId);


            if (batStats == null) {
                batStats = { points: 0 };

            }

            if (fieldStats == null) {
                fieldStats = { points: 0 };

            }

            if (bowlStats == null) {
                bowlStats = { points: 0 };
            }

            const points = batStats.points + bowlStats.points + fieldStats.points

            /*   const player_performance = new Performance({
                  playerId: playerId,
                  price: 25,
                  total_points: points,
                  avg_bat_points: batStats.points,
                  avg_bowl_points: bowlStats.points,
                  avg_field_points: fieldStats.points,
                  date: match.endDate,
              })
  
              try {
                  await player_performance.save();
              } catch (error) {
                  console.error(error);
              } */
            const player_price = calculatePlayerPrice(points, points);
            
            const player_performance = {
                price: player_price,
                total_points: points,
                avg_bat_points: batStats.points,
                avg_bowl_points: bowlStats.points,
                avg_field_points: fieldStats.points,
            }
            
            const matchStats = {
                match: match,
                batStats: batStats,
                bowlStats: bowlStats,
                fieldStats: fieldStats,
                performance: player_performance
            };

            playerPerfomanceMatches.push(matchStats);
        }
    }
    


    res.status(200).json((playerPerfomanceMatches));

};

module.exports = {
    PerformanceRoute
};


function extractDateFromTimestamp(timestampString) {
    const dateObject = new Date(timestampString);
    const dateYear = dateObject.getUTCFullYear();
    const dateMonth = dateObject.getUTCMonth() + 1; // Months are 0-based, so add 1
    const dateDay = dateObject.getUTCDate();


    return dateYear + "-" + dateMonth + "-" + dateDay

}


const getFieldStatsForPlayer = async (playerId, matchId) => {
    try {
        const FieldStats = await FieldingStats.findOne({ playerId: playerId, matchId: matchId });
        return FieldStats;
    } catch (error) {
        console.log(error);
    }
}

const getBowlStatsForPlayer = async (playerId, matchId) => {
    try {
        const bowlStats = await BowlingStats.findOne({ playerId: playerId, matchId: matchId });
        return bowlStats;
    } catch (error) {
        console.log(error);
    }
}


const getBatStatsForPlayer = async (playerId, matchId) => {
    try {
        const batStats = await BattingStats.findOne({ playerId: playerId, matchId: matchId });
        return batStats;
    } catch (error) {
        console.log(error);
    }
}
const getRecentMatchesForPlayer = async (playerId) => {
    try {
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
        return recentMatches;
    } catch (error) {
        console.error("Error fetching recent matches:", error);
    }
};