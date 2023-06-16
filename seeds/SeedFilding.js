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
  mutation InsertFieldingStats($catches: Int, $matchId: Int, $playerId: Int, $points: float8, $runouts: Int, $stumping: Int) {
    insert_EXPN_FieldingStats(objects: {catches: $catches, matchId: $matchId, playerId: $playerId, points: $points, runouts: $runouts, stumping: $stumping}) {
      affected_rows
      returning {
        catches
        id
        matchId
        playerId
        points
        runouts
        stumping
      }
    }
  }
`;

function executeInsertFieldingStats(catches, matchId, playerId, points, runouts, stumping) {
  return fetchGraphQL(
    operationsDoc,
    "InsertFieldingStats",
    {"catches": catches, "matchId": matchId, "playerId": playerId, "points": points, "runouts": runouts, "stumping": stumping}
  );
}

async function startExecuteInsertFieldingStats(catches, matchId, playerId, points, runouts, stumping) {
  const { errors, data } = await executeInsertFieldingStats(catches, matchId, playerId, points, runouts, stumping);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

module.exports = startExecuteInsertFieldingStats;