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
mutation InsertFildingStats($_eq: uuid, $_eq1: uuid, $batting_points: float8) {
    update_Players_Filding_stats(where: {Match: {id: {_eq: $_eq}}, Player: {id: {_eq: $_eq1}}}, _set: {fielding_point: $batting_points}) {
      affected_rows
    }
  }
  
  `;

function executeInsertFildingStats(_eq, _eq1, batting_points) {
    return fetchGraphQL(
        operationsDoc,
        "InsertFildingStats",
        { "_eq": _eq, "_eq1": _eq1, "batting_points": batting_points }
    );
}

async function startExecuteInsertFildingStats(_eq, _eq1, batting_points) {
    const { errors, data } = await executeInsertFildingStats(_eq, _eq1, batting_points);

    if (errors) {
        // handle those errors like a pro
        console.error(errors);
    }

    // do something great with this precious data
    console.log(data);
}


module.exports = startExecuteInsertFildingStats;
