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
  mutation InsertFildingStats($match_id: uuid, $player_id: uuid, $catches: Int, $runouts: Int, $stumping: Int) {
    insert_Players_Filding_stats(objects: {match_id: $match_id, player_id: $player_id, catches: $catches, runouts: $runouts, stumping: $stumping}) {
      affected_rows
      returning {
        id
        match_id
        player_id
        catches
        runouts
        stumping
      }
    }
  }
`;

function executeInsertFildingStats(match_id, player_id, catches, runouts, stumping) {
  return fetchGraphQL(
    operationsDoc,
    "InsertFildingStats",
    {"match_id": match_id, "player_id": player_id, "catches": catches, "runouts": runouts, "stumping": stumping}
  );
}

async function startExecuteInsertFildingStats(match_id, player_id, catches, runouts, stumping) {
  const { errors, data } = await executeInsertFildingStats(match_id, player_id, catches, runouts, stumping);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}



module.exports = startExecuteInsertFildingStats;