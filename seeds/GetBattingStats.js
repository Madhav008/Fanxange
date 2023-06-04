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
    query GetBattingStats($_eq: uuid, $_eq1: uuid) {
      Players_Batting_stats(where: {Player: {id: {_eq: $_eq}}, Match: {id: {_eq: $_eq1}}}) {
        six_hit
        is_bat
        id
        hundred
        four_hit
        fifty
        bat_runs
        balls_faced
      }
    }
  `;
  
  function fetchGetBattingStats(_eq, _eq1) {
    return fetchGraphQL(
      operationsDoc,
      "GetBattingStats",
      {"_eq": _eq, "_eq1": _eq1}
    );
  }
  
  async function startFetchGetBattingStats(_eq, _eq1) {
    const { errors, data } = await fetchGetBattingStats(_eq, _eq1);
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);
    return data
  }
  

  module.exports = startFetchGetBattingStats;