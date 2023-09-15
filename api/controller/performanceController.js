const { calculatePlayerPrice } = require("../../Server/PlayerPrice/PlayerPriceFormula");
const RecentMatches = require("../models/Matches");
const Performance = require("../models/Performance");
const BattingStats = require("../models/PlayerBattingStats");
const BowlingStats = require("../models/PlayerBowlingStats");
const FieldingStats = require("../models/PlayerFieldingStats");
const PlayerStats = require("../models/PlayerStats");

const createCsvWriter = require('csv-writer').createObjectCsvWriter;


const SeedPlayerPerformance = async () => {
    // Fetch all players (You may uncomment this once you have the actual code to retrieve players)
    console.log("Fetching players...");
    const players = await PlayerStats.find({});
    for (const player of players) {
        try {
            await processPlayerMatches(player.playerId);
        } catch (error) {
            console.log(error.message);
        }
    }

    // res.status(200).json(matches);


};


const PerformanceRoute = async (req, res) => {
    // Handle the protected API route logic
    const { playerId } = req.params;
    const playerPerformanceMatches = await Performance.find({ playerId: playerId }).sort({ date: -1 });
    const result = [];

    // Fetch match names for each performance entry
    for (const performance of playerPerformanceMatches) {
        const match = await RecentMatches.findOne({ matchId: performance.matchId });

        if (match) {
            const matchId = match.matchId;

            // Retrieve batting, bowling, and fielding statistics for the match
            var batStats = await getBatStatsForPlayer(playerId, matchId);
            var bowlStats = await getBowlStatsForPlayer(playerId, matchId);
            var fieldStats = await getFieldStatsForPlayer(playerId, matchId);
            // Handle cases where statistics are null (no data available)
            if (batStats == null) {
                batStats = { points: 0 };
            }

            if (fieldStats == null) {
                fieldStats = { points: 0 };
            }

            if (bowlStats == null) {
                bowlStats = { points: 0 };
            }

            const performanceWithMatchName = {
                ...performance.toObject(),
                bowlStats: bowlStats.points, batStats: batStats.points, fieldStats: fieldStats.points,
                name: match.name,
                teams: match.teams // Add the match name to the performance object
            };
            result.push(performanceWithMatchName);
        }
    }

    res.status(200).json(result);
};

const LatestPerformance = async (playerId) => {
    playerId = parseInt(playerId, 10);
    const getLatestMatchOfPlayer = [
        {
            $unwind: "$teamPlayers",
        },
        {
            $match: {
                "teamPlayers.playerId": playerId, // Replace with the actual playerId you want to find
            },
        },
        {
            $addFields: {
                startDate: {
                    $dateToString: {
                        format: "%Y-%m-%d",
                        date: {
                            $toDate: "$startDate",
                        },
                    },
                },
                endDate: {
                    $dateToString: {
                        format: "%Y-%m-%d",
                        date: {
                            $toDate: "$endDate",
                        },
                    },
                },
            },
        },
        {
            $addFields: {
                startDateYear: {
                    $year: {
                        $toDate: "$endDate",
                    },
                },
                startDateMonth: {
                    $month: {
                        $toDate: "$endDate",
                    },
                },
                startDateDay: {
                    $dayOfMonth: {
                        $toDate: "$endDate",
                    },
                },
            },
        },
        {
            $sort: {
                startDateYear: -1,
                // Sort by startDateYear in descending order (2023 first)
                startDateMonth: -1,
                // Then sort by startDateMonth in descending order (December first)
                startDateDay: -1,
                // Sort by startDateDay in descending order (30th of the month first)
                startDate: -1, // Finally, sort by startDate in descending order within the same year, month, and day
            },
        },
        {
            $match: {
                startDate: {
                    $lt: new Date()
                        .toISOString()
                        .slice(0, 10),
                },
            },
        },
        {
            $limit: 1, // Limit the result to the first 5 matches
        },
    ]
    try {
        const matches = await RecentMatches.aggregate(getLatestMatchOfPlayer)
        const match = matches[0];
        const matchId = match.matchId;
        const playerPerformanceMatches = await Performance.findOne({ playerId: playerId, matchId });
        // Retrieve batting, bowling, and fielding statistics for the match
        var batStats = await getBatStatsForPlayer(playerId, matchId);
        var bowlStats = await getBowlStatsForPlayer(playerId, matchId);
        var fieldStats = await getFieldStatsForPlayer(playerId, matchId);
        // Handle cases where statistics are null (no data available)
        if (batStats == null) {
            batStats = { points: 0 };
        }

        if (fieldStats == null) {
            fieldStats = { points: 0 };
        }

        if (bowlStats == null) {
            bowlStats = { points: 0 };
        }

        const performanceWithMatchName = {
            ...playerPerformanceMatches.toObject(),
            bowlStats: bowlStats.points, batStats: batStats.points, fieldStats: fieldStats.points,
            name: match.name,
            teams: match.teams // Add the match name to the performance object
        };
        return performanceWithMatchName
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    PerformanceRoute,
    SeedPlayerPerformance,
    LatestPerformance
};



const processPlayerMatches = async (playerId) => {
    // Initialize variables to track total points, count, and oldPrice
    let oldPrice = 25.0;

    // Retrieve recent matches for the player
    const matches = await getRecent25MatchesOfPlayer(playerId);

    // Create an array to store the last 10 match points
    const last10MatchPoints = [];
    const dataPoints = [];

    for (const match of matches) {
        const matchId = match.matchId;

        // Retrieve batting, bowling, and fielding statistics for the match
        var batStats = await getBatStatsForPlayer(playerId, matchId);
        var bowlStats = await getBowlStatsForPlayer(playerId, matchId);
        var fieldStats = await getFieldStatsForPlayer(playerId, matchId);

        // Handle cases where statistics are null (no data available)
        if (batStats == null) {
            batStats = { points: 0 };
        }

        if (fieldStats == null) {
            fieldStats = { points: 0 };
        }

        if (bowlStats == null) {
            bowlStats = { points: 0 };
        }

        // Calculate the current match points
        const current_match_points = batStats.points + bowlStats.points + fieldStats.points;
        console.log("Current Match Points:", current_match_points);

        // Add the current match points to the last 10 match points array
        last10MatchPoints.push(current_match_points);

        // If the array exceeds 10 elements, remove the first element
        if (last10MatchPoints.length > 25) {
            last10MatchPoints.shift();
        }

        // Calculate the average of the last 10 match points
        const average_points = last10MatchPoints.reduce((acc, val) => acc + val, 0) / last10MatchPoints.length;
        console.log("Average Points:", average_points);

        console.log("Old Price:", oldPrice);

        // Calculate the current player price based on the current match points, average points, and old price
        const current_player_price = calculatePlayerPrice(current_match_points, average_points, oldPrice);
        console.log("Current Player Price:", current_player_price);

        // Update the old price with the current player price for the next iteration
        oldPrice = current_player_price;

        // Push the data points for each match into the array
        dataPoints.push({
            "DATE": match.endDate,
            "Current Match Points": current_match_points,
            "Average Points": average_points,
            "Old Price": oldPrice,
            "Current Player Price": current_player_price
        });

        // Call the function to create or update performance entry
        await createOrUpdatePerformanceEntry(playerId, match, current_player_price, current_match_points, average_points);
    }

    // writeInCSV(dataPoints)
    return matches;
};

const createOrUpdatePerformanceEntry = async (playerId, match, current_player_price, current_match_points, average_points) => {
    // Create a new performance entry
    const performance_stats = new Performance({
        playerId: playerId,
        matchId: match.matchId,
        price: current_player_price,
        total_points: current_match_points,
        avg_points: average_points,
        date: match.endDate
    });

    // Check if a performance entry already exists for the same player and match
    const existingPerformance = await Performance.find({
        playerId: playerId,
        matchId: match.matchId,
    });

    if (existingPerformance.length > 0) {
        console.log("Updating Player Performance already exists");

        // existingPerformance[0].playerId = playerId;
        // existingPerformance[0].matchId = match.matchId;
        // existingPerformance[0].price = current_player_price;
        // existingPerformance[0].startDate = match.startDate;
        // existingPerformance[0].total_points = current_match_points;
        // existingPerformance[0].avg_points = average_points;
        // existingPerformance[0].date = match.endDate;

        // Save the updated performance entry
        try {
            await existingPerformance[0].save();
        } catch (error) {
            console.log("Error updating performance stats");
        }
    } else {
        try {
            // Save the new performance entry to the database
            await performance_stats.save();
        } catch (error) {
            console.log("Error saving performance stats");
        }
    }
};

function writeInCSV(dataPoints) {
    // Create a CSV writer with the desired file name and headers
    const csvWriter = createCsvWriter({
        path: 'player_performance.csv',
        header: [
            { id: 'DATE', title: 'DATE' },
            { id: 'Current Match Points', title: 'Current Match Points' },
            { id: 'Average Points', title: 'Average Points' },
            { id: 'Old Price', title: 'Old Price' },
            { id: 'Current Player Price', title: 'Current Player Price' }
        ]
    });

    // Write the data points to the CSV file
    csvWriter.writeRecords(dataPoints)
        .then(() => {
            console.log('CSV file has been written successfully.');
        })
        .catch((error) => {
            console.error('Error writing CSV file:', error);
        });
}

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
                $unwind: "$teamPlayers"
            },
            {
                $match: {
                    "teamPlayers.playerId": playerId // Replace with the actual playerId you want to find
                }
            },
            {
                $addFields: {
                    startDate: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: {
                                $toDate: "$startDate"
                            }
                        }
                    },
                    endDate: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: {
                                $toDate: "$endDate"
                            }
                        }
                    }
                }
            },
            {
                $addFields: {
                    startDateYear: {
                        $year: {
                            $toDate: "$endDate"
                        }
                    },
                    startDateMonth: {
                        $month: {
                            $toDate: "$endDate"
                        }
                    },
                    startDateDay: {
                        $dayOfMonth: {
                            $toDate: "$endDate"
                        }
                    }
                }
            },
            {
                $sort: {
                    startDateYear: 1, // Sort by startDateYear in descending order (2023 first)
                    startDateMonth: 1, // Then sort by startDateMonth in descending order (December first)
                    startDateDay: 1, // Sort by startDateDay in descending order (30th of the month first)
                    startDate: 1 // Finally, sort by startDate in descending order within the same year, month, and day
                }
            },
            {
                $match: {
                    startDate: {
                        $lte: new Date()
                            .toISOString()
                            .slice(0, 10),
                    },
                },
            }
        ]

        const recentMatches = await RecentMatches.aggregate(aggregateMatches);
        return recentMatches;
    } catch (error) {
        console.error("Error fetching recent matches:", error);
    }
};



const getRecent25MatchesOfPlayer = async function (playerId) {
    try {
        playerId = parseInt(playerId, 10);
        const aggregateMatches = [
            {
                $unwind: "$teamPlayers",
            },
            {
                $match: {
                    "teamPlayers.playerId": playerId, // Replace with the actual playerId you want to find
                },
            },
            {
                $addFields: {
                    startDate: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: {
                                $toDate: "$startDate",
                            },
                        },
                    },
                    endDate: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: {
                                $toDate: "$endDate",
                            },
                        },
                    },
                },
            },
            {
                $addFields: {
                    startDateYear: {
                        $year: {
                            $toDate: "$endDate",
                        },
                    },
                    startDateMonth: {
                        $month: {
                            $toDate: "$endDate",
                        },
                    },
                    startDateDay: {
                        $dayOfMonth: {
                            $toDate: "$endDate",
                        },
                    },
                },
            },
            {
                $sort: {
                    startDateYear: -1, // Sort by startDateYear in descending order (2023 first)
                    startDateMonth: -1, // Then sort by startDateMonth in descending order (December first)
                    startDateDay: -1, // Sort by startDateDay in descending order (30th of the month first)
                    startDate: -1, // Finally, sort by startDate in descending order within the same year, month, and day
                },
            },
            {
                $match: {
                    startDate: {
                        $lte: new Date()
                            .toISOString()
                            .slice(0, 10),
                    },
                },
            },
            {
                $limit: 25, // Limit the result to the first 5 matches
            },
        ]
        var recentMatches = await RecentMatches.aggregate(aggregateMatches);
        recentMatches = recentMatches.reverse();
        return recentMatches;


    } catch (error) {
        console.error("Error fetching recent matches:", error);
    }
}