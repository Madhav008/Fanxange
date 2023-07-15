const RecentMatches = require('../models/Matches');

async function getRecentMacthes(req,res) {
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
        
        res.status(200).json({result});

    } catch (error) {
        console.log('Error occurred:', error);
    } 
}

module.exports = {getRecentMacthes}