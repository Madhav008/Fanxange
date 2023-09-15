const { Worker } = require('worker_threads');
const axios = require("axios");
const RecentMatches = require('../api/models/Matches');

async function getRecent10Macthes(playerId) {
    const recentMatches = await getEspnData(`https://hs-consumer-api.espncricinfo.com/v1/pages/player/matches?playerId=${playerId}`);

    const matches = recentMatches.content.matches.types[0].recent;

    const data = [];

    const promises = [];

    for (const match of matches) {
        const seriesId = match.match.series.objectId;
        const matchId = match.match.objectId;

        const promise = new Promise((resolve, reject) => {
            const worker = new Worker('./Espn_Cricket_data/getMatchDataWorker.js', {
                workerData: { seriesId, matchId },
            });

            worker.on('message', (matchData) => {
                data.push(matchData);
                resolve();
            });

            worker.on('error', (error) => {
                console.error(`Error occurred in worker for seriesId: ${seriesId} and matchId: ${matchId}`, error);
                reject(error);
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    console.error(`Worker stopped with exit code ${code} for seriesId: ${seriesId} and matchId: ${matchId}`);
                    reject(`Worker stopped with exit code ${code}`);
                }
            });
        });


        // Create a new RecentMatches document
        const existingMatch = await RecentMatches.findOne({ matchId: data.matchId });

        if (existingMatch) {
            // Update the fields that are not in the database
            console.log("Match is already there")
            // await existingMatch.save();
        } else {
            // Create a new document


            console.log('Match Data saved successfully!');
            console.table({ seriesId, matchId });

        }
        promises.push(promise);
    }

    await Promise.all(promises);

    /*     
    Returns 
    1. Teams 
    2. Players 
    3. Batting Stats
    4. Bowling Stats
    5. Fielding Stats
    6. batPoints
    7. bowlPoints
    8. fieldoints
    */

    return data;
}


module.exports = { getRecent10Macthes }

async function getEspnData(url) {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error(error.message);
    }

}