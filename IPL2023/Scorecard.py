import concurrent.futures
import json
import csv
import os


def calculate_player_stats(overs):
    bat_runs = {}
    fours_hit = {}
    sixes_hit = {}
    ball_faced = {}
    runs_given = {}
    fours_given = {}
    sixes_given = {}
    ball_bowled = {}
    catches_taken = {}
    runouts = {}
    stumping = {}
    is_ball = {}
    dot_balls = {}
    maiden_over = {}
    wickets_taken = {}
    fifty = {}
    hundred = {}
    is_bat = {}
    is_out = {}
    fielding_stats = {}

    for over in overs:
        deliveries = over["deliveries"]
        for delivery in deliveries:
            batter = delivery["batter"]
            bowler = delivery["bowler"]

            # Calculate batting stats
            if batter not in bat_runs:
                bat_runs[batter] = 0
                fours_hit[batter] = 0
                sixes_hit[batter] = 0
                ball_faced[batter] = 0
                fifty[batter] = 0
                hundred[batter] = 0
                is_bat[batter] = True
                is_out[batter] = False

            runs = delivery["runs"]["batter"]
            extras = delivery["runs"]["extras"]
            total_runs = delivery["runs"]["total"]
            if runs == 4:
                fours_hit[batter] += 1
            elif runs == 6:
                sixes_hit[batter] += 1
            bat_runs[batter] += runs
            ball_faced[batter] += 1

            # Calculate bowling stats
            if bowler not in runs_given:
                runs_given[bowler] = 0
                fours_given[bowler] = 0
                sixes_given[bowler] = 0
                ball_bowled[bowler] = 0
                catches_taken[bowler] = 0
                runouts[bowler] = 0
                stumping[bowler] = 0
                is_ball[bowler] = True
                dot_balls[bowler] = 0
                maiden_over[bowler] = 0
                wickets_taken[bowler] = 0

            runs_given[bowler] += total_runs
            if runs == 4:
                fours_given[bowler] += 1
            elif runs == 6:
                sixes_given[bowler] += 1
            ball_bowled[bowler] += 1

            # Check for wickets
            if "wickets" in delivery:
                wickets = delivery["wickets"]
                for wicket in wickets:
                    player_out = wicket["player_out"]
                    wicket_kind = wicket["kind"]
                    is_out[player_out] = True

                    if bowler in wickets_taken:
                        wickets_taken[bowler] += 1
                    else:
                        wickets_taken[bowler] = 1

                    if wicket_kind not in runouts:
                        runouts[wicket_kind] = 1
                    else:
                        runouts[wicket_kind] += 1

                    if "fielders" in wicket:
                        fielders = wicket["fielders"]
                        for fielder in fielders:
                            fielder_name = fielder["name"]
                            if fielder_name in catches_taken:
                                catches_taken[fielder_name] += 1
                            else:
                                catches_taken[fielder_name] = 1

    fielding_stats["Catches Taken"] = catches_taken
    fielding_stats["Runouts"] = runouts

    return (
        bat_runs,
        fours_hit,
        sixes_hit,
        ball_faced,
        runs_given,
        fours_given,
        sixes_given,
        ball_bowled,
        catches_taken,
        runouts,
        stumping,
        is_ball,
        dot_balls,
        maiden_over,
        wickets_taken,
        fifty,
        hundred,
        is_bat,
        is_out,
        fielding_stats
    )

def calculate_stats(scorecard):
    all_overs = []
    for innings in scorecard["innings"]:
        for over in innings["overs"]:
            all_overs.append(over)

    bat_runs, fours_hit, sixes_hit, ball_faced, runs_given, fours_given, sixes_given, ball_bowled, catches_taken, runouts, stumping, is_ball, dot_balls, maiden_over, wickets_taken, fifty, hundred, is_bat, is_out, fielding_stats = calculate_player_stats(all_overs)

    # Create a dictionary to hold the stats
    stats = {}

    # Add the batting stats
    batting_stats = {}
    for player in bat_runs.keys():
        player_stats = {
            'Bat Runs': bat_runs[player],
            'Fours Hit': fours_hit[player],
            'Sixes Hit': sixes_hit[player],
            'Balls Faced': ball_faced[player],
            'Fifty': fifty[player],
            'Hundred': hundred[player],
            'Is Batting': is_bat[player],
            'Is Out': is_out[player]
        }
        batting_stats[player] = player_stats

    stats['Batting Stats'] = batting_stats

    # Add the bowling stats
    bowling_stats = {}
    for player in runs_given.keys():
        player_stats = {
            'Runs Given': runs_given[player],
            'Fours Given': fours_given[player],
            'Sixes Given': sixes_given[player],
            'Balls Bowled': ball_bowled[player],
            'Catches Taken': catches_taken[player],
            'Runouts': runouts[player],
            'Stumping': stumping[player],
            'Is Ball': is_ball[player],
            'Dot Balls': dot_balls[player],
            'Maiden Over': maiden_over[player],
            'Wickets Taken': wickets_taken[player]
        }
        bowling_stats[player] = player_stats

    stats['Bowling Stats'] = bowling_stats

    # Add the fielding stats
    fielding_stats_dict = {}
    for player in fielding_stats['Catches Taken']:
        player_stats = {
            'Catches Taken': fielding_stats['Catches Taken'][player],
            'Runouts': fielding_stats['Runouts'].get(player, 0)
        }
        fielding_stats_dict[player] = player_stats

    stats['Fielding Stats'] = fielding_stats_dict

    # Write the stats to a JSON file
    return stats
    # with open('stats.json', 'w') as file:
    #     json.dump(stats, file, indent=4)

    # print("Stats saved to stats.csv file.")
    # print("Batting Stats:")
    # print("--------------")
    # for player in bat_runs:
    #     print("Player:", player)
    #     print("Bat Runs:", bat_runs[player])
    #     print("Fours Hit:", fours_hit[player])
    #     print("Sixes Hit:", sixes_hit[player])
    #     print("Balls Faced:", ball_faced[player])
    #     print("Fifty:", fifty[player])
    #     print("Hundred:", hundred[player])
    #     print("Is Batting:", is_bat[player])
    #     print("Is Out:", is_out[player])
    #     print()

    # print("Bowling Stats:")
    # print("--------------")
    # for player in runs_given:
    #     print("Player:", player)
    #     print("Runs Given:", runs_given[player])
    #     print("Fours Given:", fours_given[player])
    #     print("Sixes Given:", sixes_given[player])
    #     print("Balls Bowled:", ball_bowled[player])
    #     print("Catches Taken:", catches_taken[player])
    #     print("Runouts:", runouts[player])
    #     print("Stumping:", stumping[player])
    #     print("Is Ball:", is_ball[player])
    #     print("Dot Balls:", dot_balls[player])
    #     print("Maiden Over:", maiden_over[player])
    #     print("Wickets Taken:", wickets_taken[player])
    #     print()

    # print("Fielding Stats:")
    # print("--------------")
    # for player in fielding_stats['Catches Taken']:
    #     print("Player:", player)
    #     print("Catches Taken:", fielding_stats['Catches Taken'][player])
    #     print("Runouts:", fielding_stats['Runouts'].get(player, 0))
    #     print()


# Additional code to iterate over all JSON files and create individual stats files
file_names = [
    1370351, 1370350, 1359543, 1359544, 1359541, 1359542, 1359540, 1359539,
    1359538, 1359537, 1359536, 1359534, 1359535, 1359532, 1359533, 1359531,
    1359530, 1359529, 1359528, 1359527, 1359525, 1359526, 1359523, 1359524,
    1359522, 1359521, 1359519, 1359520, 1359518, 1359517, 1359515, 1359516,
    1359513, 1359514, 1359512, 1359511, 1359510, 1359509, 1359508, 1359506,
    1359507, 1359504, 1359505, 1359503, 1359501, 1359502, 1359500, 1359499,
    1359498, 1359496, 1359497, 1359494, 1359495, 1359493, 1359492, 1359491,
    1359490, 1359489, 1359487, 1359488, 1359485, 1359486, 1359484, 1359483,
    1359482, 1359481, 1359480, 1359478, 1359479, 1359476, 1359477, 1359475
]

for file_name in file_names:
    json_file = f"IPL2023/{file_name}.json"
    if os.path.isfile(json_file):
        with open(json_file, 'r') as file:
            data = json.load(file)

        match_date = data['info']['dates'][0]
        teams = data['info']['teams']

        player_stats = {
            'Player': file_name,
            'Match Date': match_date,
            'Teams': teams,
            'Stats': calculate_stats(data)

        }

        stats_file = f"{file_name}_stats.json"
        with open(stats_file, 'w') as file:
            json.dump(player_stats, file, indent=4)

        print(f"Created {stats_file}")
    else:
        print(f"JSON file {json_file} not found.")