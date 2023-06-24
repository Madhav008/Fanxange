const startFetchGetMatches = require("./GetMatchId");
const startFetchGetPlayerbyName = require("./GetPlayerId");

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
  mutation InsertBattingStats($is_bat: Boolean, $is_out: Boolean, $balls_faced: Int, $bat_runs: Int, $fifty: Int, $four_hit: Int, $hundred: Int, $matchId: Int, $playerId: Int, $points: float8, $six_hit: Int) {
    insert_Fanxange_BattingStats(objects: {is_bat: $is_bat, is_out: $is_out, balls_faced: $balls_faced, bat_runs: $bat_runs, fifty: $fifty, four_hit: $four_hit, hundred: $hundred, matchId: $matchId, playerId: $playerId, points: $points, six_hit: $six_hit}) {
      affected_rows
      returning {
        is_bat
        is_out
        balls_faced
        bat_runs
        fifty
        four_hit
        hundred
        id
        matchId
        playerId
        points
        six_hit
      }
    }
  }
`;

function executeInsertBattingStats(is_bat, is_out, balls_faced, bat_runs, fifty, four_hit, hundred, matchId, playerId, points, six_hit) {
  return fetchGraphQL(
    operationsDoc,
    "InsertBattingStats",
    { "is_bat": is_bat, "is_out": is_out, "balls_faced": balls_faced, "bat_runs": bat_runs, "fifty": fifty, "four_hit": four_hit, "hundred": hundred, "matchId": matchId, "playerId": playerId, "points": points, "six_hit": six_hit }
  );
}

async function startExecuteInsertBattingStats(is_bat, is_out, balls_faced, bat_runs, fifty, four_hit, hundred, matchId, playerId, points, six_hit) {
  const { errors, data } = await executeInsertBattingStats(is_bat, is_out, balls_faced, bat_runs, fifty, four_hit, hundred, matchId, playerId, points, six_hit);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

module.exports = startExecuteInsertBattingStats;

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
        var data = require(`../IPL2023/Stats/${file}_stats.json`)

        const date = data["Match Date"];
        // Get the teams from the JSON object
        const teams = data['Teams'];

             // // Combine the team names as "teamA vs teamB"
        // const teamA = teams[0];
        // const teamB = teams[1];

        // // Get the players of teamA
        const players = data["Stats"]["Batting Stats"];
        const playerNames = Object.keys(players);

        // // Get the players of teamB
        // const playersTeamB = data.info.players[teamB];

        playerNames.forEach(async (name) => {
            var player_id = await startFetchGetPlayerbyName(name);
            var match_id = await startFetchGetMatches(date)
            const playerStats = players[name];

            // const balls_faced = playerStats["Balls Faced"];
            // const bat_runs = playerStats["Bat Runs"];
            // const fifty = playerStats["Fifty"];
            // const four_hit = playerStats["Fours Hit"];
            // const hundred = playerStats["Hundred"];
            // const six_hit = playerStats["Sixes Hit"];
            const is_out = playerStats["Is Out"];
            await startExecuteInsertBattingStats(is_out);
            // Wait for 500 ms before processing the next player
            await new Promise((resolve) => setTimeout(resolve, 500));
        })

        // playersTeamB.forEach(async (name) => {
        //     var player_id = await startFetchGetPlayerbyName(name);
        //     var match_id = await startFetchGetMatches(date)

        //     await startExecuteInsertBattingStats(true, 0, 0, 0, 0, 0, 0, match_id, player_id);
        // })

    });
}
seedData() */