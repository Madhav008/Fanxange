/*
This is an example snippet - you should consider tailoring it
to your service.
*/
/*
Add these to your `package.json`:
  "node-fetch": "^2.5.0"
*/

// Node doesn't implement fetch so we have to import it

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
  mutation InsertMatches($id: Int, $start_date: String, $seriesId: Int, $name: String) {
    insert_EXPN_Matches(objects: {id: $id, start_date: $start_date, seriesId: $seriesId, name: $name}) {
      affected_rows
      returning {
        id
        start_date
        seriesId
        name
      }
    }
  }
`;

function executeInsertMatches(id, start_date, seriesId, name) {
  return fetchGraphQL(
    operationsDoc,
    "InsertMatches",
    {"id": id, "start_date": start_date, "seriesId": seriesId, "name": name}
  );
}

async function startExecuteInsertMatches(id, start_date, seriesId, name) {
  const { errors, data } = await executeInsertMatches(id, start_date, seriesId, name);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

module.exports = startExecuteInsertMatches;

/* async function seedData() {
    let file_names = [
        1370351, 1370350, 1359543, 1359544, 1359541, 1359542, 1359540, 1359539,
        1359538, 1359537, 1359536, 1359534, 1359535, 1359532, 1359533, 1359531,
        1359530, 1359529, 1359528, 1359527, 1359525, 1359526, 1359523, 1359524,
        1359522, 1359521, 1359519, 1359520, 1359518, 1359517, 1359515, 1359516,
        1359513, 1359514, 1359512, 1359511, 1359510, 1359509, 1359508, 1359506,
        1359507, 1359504, 1359505, 1359503, 1359501, 1359502, 1359500, 1359499,
        1359498, 1359496, 1359497, 1359494, 1359495, 1359493, 1359492, 1359491,
        1359490, 1359489, 1359487, 1359488, 1359485, 1359486, 1359484, 1359483,
        1359482, 1359481, 1359480, 1359478, 1359479, 1359476, 1359477, 1359475
    ];

    file_names.forEach(async (file) => {
        var data = require(`../IPL2023/Scorecard/${file}.json`)

        const date = data.info.dates[0];
        // Get the teams from the JSON object
        const teams = data.info.teams;

        // Combine the team names as "teamA vs teamB"
        const teamA = teams[0];
        const teamB = teams[1];
        const name = `${teamA} vs ${teamB}`;

        await startExecuteInsertMatches(date, name, 'cd55d4b9-f972-4809-9d76-fe41ec0cea3f');
    });
}

seedData(); */