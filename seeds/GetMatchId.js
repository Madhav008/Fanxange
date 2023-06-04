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
  query GetMatches($_eq: String) {
    Players_Matches(where: {date: {_eq: $_eq}}) {
      date
      name
      id
      tournament_id
    }
  }
`;

function fetchGetMatches(_eq) {
  return fetchGraphQL(
    operationsDoc,
    "GetMatches",
    {"_eq": _eq}
  );
}

async function startFetchGetMatches(_eq) {
  const { errors, data } = await fetchGetMatches(_eq);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  return data['Players_Matches'][0]['id']
}

module.exports = startFetchGetMatches