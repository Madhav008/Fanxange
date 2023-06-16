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
  mutation InsertSeries($id: Int, $title: String, $type: String) {
    insert_EXPN_Series(objects: {id: $id, title: $title, type: $type}) {
      affected_rows
      returning {
        id
        title
        type
      }
    }
  }
`;

function executeInsertSeries(id, title, type) {
  return fetchGraphQL(
    operationsDoc,
    "InsertSeries",
    { "id": id, "title": title, "type": type }
  );
}

async function startExecuteInsertSeries(id, title, type) {
  const { errors, data } = await executeInsertSeries(id, title, type);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

module.exports = startExecuteInsertSeries;
