async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    "https://hasura.depthfirstsearch.tk/v1/graphql",
    {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMjgzODUyODY1NDMzMTkwMTIwOSIsImVtYWlsIjoibWFkaGF2amluZGFsMjFAZ21haWwuY29tIiwiaGFzdXJhUm9sZSI6InVzZXIiLCJoYXN1cmFVc2VySWQiOiIxMjM0IiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS11c2VyLWlkIjoiMTIzNCIsIngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtb3JnLWlkIjoiMTIzIiwieC1oYXN1cmEtY3VzdG9tIjoiY3VzdG9tLXZhbHVlIn0sImlhdCI6MTY4NzYwMTE0Mn0.YaKgGIs-twbtx5RYUqjM6YJRTzjgK5R_AHgFiLUNQwU`,
      },
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
  mutation InsertFieldingStats($catches: Int, $matchId: Int, $playerId: Int, $points: Int, $runouts: Int, $stumping: Int) {
    insert_Fanxange_FieldingStats(objects: {catches: $catches, matchId: $matchId, playerId: $playerId, points: $points, runouts: $runouts, stumping: $stumping}) {
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
    { "catches": catches, "matchId": matchId, "playerId": playerId, "points": points, "runouts": runouts, "stumping": stumping }
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