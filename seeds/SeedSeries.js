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
  mutation InsertSeries($id: Int, $title: String, $type: String) {
    insert_Fanxange_Series(objects: {id: $id, title: $title, type: $type}) {
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
