const RecentMatches = require('../models/Matches');
const Series = require('../models/Series');

async function getAllSeries(req, res) {
    const series = await Series.find({});

    try {
        res.status(200).json({ series });
    } catch (error) {
        console.log('Error occurred:', error.message);
    }
}

async function getRecentSeries(req, res) {
    const matches = await getRecentMatches();
    let recentSeries = [];
    let seriesSet = new Set(); // Create a Set to track duplicate series

    for (const match of matches) {
        try {
            const series = await Series.findOne({ seriesId: match.seriesId }); // Use findOne instead of find to get a single series
            if (series) {
                if (seriesSet.has(series.seriesId)) {
                    // If series is already in the set, increase the count
                    const existingSeries = recentSeries.find((s) => s.seriesId === series.seriesId);
                    if (existingSeries) {
                        existingSeries.count += 1;
                    }
                } else {
                    // If series is not in the set, add it to recentSeries array and set
                    seriesSet.add(series.seriesId);
                    recentSeries.push({ ...series.toObject(), count: 1 });
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    res.status(200).json(recentSeries);
}





async function getRecentMatches() {
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

        return result;
    } catch (error) {
        console.log('Error occurred:', error);
    }
}


module.exports = { getRecentSeries, getAllSeries }