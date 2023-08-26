const axios = require("axios");


const getTrendingMatches = async () => {
    const url = "https://hs-consumer-api.espncricinfo.com/v1/ui/edition/details?trendingMatches=true&keySeriesItems=true&edition=in&lang=en";
    const data = await getEspnData(url);

    // console.log(data);
    return data
}

const getLiveScore = async (matchId,seriesId) => {
    const url = 'https://hs-consumer-api.espncricinfo.com/v1/ui/matches/current?lang=en&latest=true';

    const data = await getEspnData(url);
    
    for (const match of data.matches) {

        if(match.objectId === matchId && match.series.objectId===seriesId) {

            return match;

        }        
    }


    

    console.log(data);

}



module.exports = {getTrendingMatches,getLiveScore}

async function getEspnData(url) {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error(error.message);
    }

}