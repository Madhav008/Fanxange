import concurrent.futures
import json
import csv


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

    # Write stats to CSV file
    with open('stats.csv', 'w', newline='') as file:
        writer = csv.writer(file)

        # Write batting stats
        writer.writerow(['Batting Stats'])
        writer.writerow(['Player', 'Bat Runs', 'Fours Hit', 'Sixes Hit', 'Balls Faced', 'Fifty', 'Hundred', 'Is Batting', 'Is Out'])
        for player in bat_runs:
            writer.writerow([player, bat_runs[player], fours_hit[player], sixes_hit[player], ball_faced[player], fifty[player], hundred[player], is_bat[player], is_out[player]])

        writer.writerow([])  # Empty row

        # Write bowling stats
        writer.writerow(['Bowling Stats'])
        writer.writerow(['Player', 'Runs Given', 'Fours Given', 'Sixes Given', 'Balls Bowled', 'Catches Taken', 'Runouts', 'Stumping', 'Is Ball', 'Dot Balls', 'Maiden Over', 'Wickets Taken'])
        for player in runs_given:
            writer.writerow([player, runs_given[player], fours_given[player], sixes_given[player], ball_bowled[player], catches_taken[player], runouts[player], stumping[player], is_ball[player], dot_balls[player], maiden_over[player], wickets_taken[player]])

        writer.writerow([])  # Empty row

        # Write fielding stats
        writer.writerow(['Fielding Stats'])
        writer.writerow(['Player', 'Catches Taken', 'Runouts'])
        for player in fielding_stats['Catches Taken']:
            writer.writerow([player, fielding_stats['Catches Taken'][player], fielding_stats['Runouts'].get(player, 0)])

    print("Stats saved to stats.csv file.")
    print("Batting Stats:")
    print("--------------")
    for player in bat_runs:
        print("Player:", player)
        print("Bat Runs:", bat_runs[player])
        print("Fours Hit:", fours_hit[player])
        print("Sixes Hit:", sixes_hit[player])
        print("Balls Faced:", ball_faced[player])
        print("Fifty:", fifty[player])
        print("Hundred:", hundred[player])
        print("Is Batting:", is_bat[player])
        print("Is Out:", is_out[player])
        print()

    print("Bowling Stats:")
    print("--------------")
    for player in runs_given:
        print("Player:", player)
        print("Runs Given:", runs_given[player])
        print("Fours Given:", fours_given[player])
        print("Sixes Given:", sixes_given[player])
        print("Balls Bowled:", ball_bowled[player])
        print("Catches Taken:", catches_taken[player])
        print("Runouts:", runouts[player])
        print("Stumping:", stumping[player])
        print("Is Ball:", is_ball[player])
        print("Dot Balls:", dot_balls[player])
        print("Maiden Over:", maiden_over[player])
        print("Wickets Taken:", wickets_taken[player])
        print()

    print("Fielding Stats:")
    print("--------------")
    for player in fielding_stats['Catches Taken']:
        print("Player:", player)
        print("Catches Taken:", fielding_stats['Catches Taken'][player])
        print("Runouts:", fielding_stats['Runouts'].get(player, 0))
        print()


scorecard = None
with open('IPL.json', 'r') as file:
    scorecard = json.load(file)

calculate_stats(scorecard)
