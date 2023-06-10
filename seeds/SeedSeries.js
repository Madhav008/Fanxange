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
    mutation InsertSeries($series_id: Int, $name: String) {
      insert_Players_Series(objects: {series_id: $series_id, name: $name}) {
        affected_rows
        returning {
          series_id
          name
        }
      }
    }
  `;
  
  function executeInsertSeries(series_id, name) {
    return fetchGraphQL(
      operationsDoc,
      "InsertSeries",
      {"series_id": series_id, "name": name}
    );
  }
  
  async function startExecuteInsertSeries(series_id, name) {
    const { errors, data } = await executeInsertSeries(series_id, name);
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);
  }
  module.exports = startExecuteInsertSeries;
