async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    "https://hasura.depthfirstsearch.tk/v1/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      }),timeout: 5000 
    }
  );

  return await result.json();
}

const operationsDoc = `
  query GetPlayerbyName($_eq1: String) {
    Players_Players(where: {name: {_eq: $_eq1}}) {
      id
      name
      price
      avg_points
      current_match_points
      is_injured
      images
    }
  }
`;

function fetchGetPlayerbyName(_eq1) {
  return fetchGraphQL(
    operationsDoc,
    "GetPlayerbyName",
    {"_eq1": _eq1}
  );
}

async function startFetchGetPlayerbyName(_eq1) {
  const { errors, data } = await fetchGetPlayerbyName(_eq1);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
//   console.log(data);
  return data['Players_Players'][0]?.['id']
}

  
  module.exports = startFetchGetPlayerbyName