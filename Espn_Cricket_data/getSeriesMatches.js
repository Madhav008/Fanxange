const { Worker } = require('worker_threads');
const axios = require("axios");

async function getSeriesMatches(seriesId) {
    const allMatches = await getEspnData(`https://hs-consumer-api.espncricinfo.com/v1/pages/series/schedule?lang=en&seriesId=${seriesId}`);

    const matches = allMatches.content.matches;

    const data = [];

    const promises = [];

    for (const match of matches) {
        const seriesId = match.series.objectId;
        const matchId = match.objectId;

        console.log(seriesId, matchId)

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
module.exports = { getSeriesMatches }


async function getEspnData(url) {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error(error.message);
    }

}