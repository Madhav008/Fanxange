/*
This is an example snippet - you should consider tailoring it
to your service.
*/

async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    "https://hasura.depthfirstsearch.tk/v1/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await result.json();
}

const operationsDoc = `
  query GetAvgPoints($player_id: uuid) {
    Players_Bowling_stats_aggregate(where: {Player: {id: {_eq: $player_id}}}) {
      aggregate {
        avg {
          bowling_points
        }
      }
    }
    Players_Batting_stats_aggregate(where: {Player: {id: {_eq: $player_id}}}) {
      aggregate {
        avg {
          batting_points
        }
      }
    }
    Players_Filding_stats_aggregate(where: {Player: {id: {_eq: $player_id}}}) {
      aggregate {
        avg {
          fielding_point
        }
      }
    }
  }
`;

function fetchGetAvgPoints(player_id) {
  return fetchGraphQL(
    operationsDoc,
    "GetAvgPoints",
    {"player_id": player_id}
  );
}

async function startFetchGetAvgPoints(player_id) {
  const { errors, data } = await fetchGetAvgPoints(player_id);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  // console.log(data);
  return data;
}


module.exports = startFetchGetAvgPoints;

