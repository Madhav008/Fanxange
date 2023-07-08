const axios = require('axios');

async function insertData({ cricviz_id, jersy_number, name, player_type, sixer_id, sport_id, symbol }) {

    let data = JSON.stringify({
        "variables":
            { "cricviz_id": cricviz_id, "jersy_number": jersy_number, "name": name, "player_type": player_type, "sixer_id": sixer_id, "sport_id": sport_id, "symbol": symbol }
        ,
        "query": `mutation MyMutation($cricviz_id: Int!, $jersy_number: Int!, $name: String!, $player_type: String!, $sixer_id: Int!, $sport_id: Int!, $symbol: String!) {
            insert_player_info(objects: {cricviz_id: $cricviz_id, jersy_number: $jersy_number, name: $name, player_type: $player_type, sixer_id: $sixer_id, sport_id: $sport_id, symbol: $symbol}) {
              returning {
                id
              }
            }
          }
          `
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://hasura.depthfirstsearch.tk/v1/graphql',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        var res = await axios.request(config)
        console.log(res.data)
        // return res.data;
    } catch (error) {
        console.log(JSON.stringify(error.message));
    }
}



module.exports = insertData

