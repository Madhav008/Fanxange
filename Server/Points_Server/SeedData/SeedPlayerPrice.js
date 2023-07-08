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
    mutation InsertPlayers($price: String, $avg_points: String, $_eq: uuid) {
      update_Players_Players(where: {id: {_eq: $_eq}}, _set: {price: $price, avg_points: $avg_points}) {
        affected_rows
        returning {
          id
          name
          price
          avg_points
          current_match_points
          is_injured
          images
        }
      }
    }
  `;
  
  function executeInsertPlayers(price, avg_points, _eq) {
    return fetchGraphQL(
      operationsDoc,
      "InsertPlayers",
      {"price": price, "avg_points": avg_points, "_eq": _eq}
    );
  }
  
  async function startExecuteInsertPlayers(price, avg_points, _eq) {
    const { errors, data } = await executeInsertPlayers(price, avg_points, _eq);
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);

    return data;
  }
  
  

  module.exports = startExecuteInsertPlayers; 