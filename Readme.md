<!-- Shree GaneshNamh -->

# Setup the server

    ./hasura.exe console

# SEED THE DATA

    Run this command to seed the data

     node Server/Points_Server/Market.info.js
            {
                Player: 'v_kohli',
                Name: 'V Kohli',
                'Player Type': 'Batsman',
                Tournaments: [ 'RCB' ],
                'Jersy Number': 18,
                'Sixer ID': '126',
                'Cricviz ID': 13144,
                'Sport ID': 1,
                Symbol: 'v_kohli',
                Teams: '["India","Royal Challengers Bangalore"]'
            }
            {
                bat_runs: 37,
                balls_faced: 25,
                fours_hit: 1,
                sixes_hit: 3,
                bowl_wickets: 0,
                balls_bowled: 0,
                bowl_runs: 0,
                dot_balls: 0,
                maidens: 0,
                catch: 0,
                stumping: 0,
                run_out: null,
                run_points: 53,
                milestone_bonus: 0,
                batting_participation_points: 0,
                batting_multiplier: 1,
                match: 'Rajasthan Royals v Royal Chal Bangalore at Jaipur, IPL, 14 May 2023',
                Date: '2023-05-14T10:00:00+00:00'
            }
            {
                bat_runs: 37,
                balls_faced: 25,
                fours_hit: 1,
                sixes_hit: 3,
                bowl_wickets: 0,
                balls_bowled: 0,
                bowl_runs: 0,
                dot_balls: 0,
                maidens: 0,
                catch: 0,
                stumping: 0,
                run_out: null,
                run_points: 53,
                milestone_bonus: 0,
                batting_participation_points: 0,
                batting_multiplier: 1,
                match: 'Sunrisers Hyderabad v Royal Chal Bangalore at Hyderabad (Ind), IPL, 18 May 2023',
                Date: '2023-05-18T14:00:00+00:00'
            }
            {
                bat_runs: 37,
                balls_faced: 25,
                fours_hit: 1,
                sixes_hit: 3,
                bowl_wickets: 0,
                balls_bowled: 0,
                bowl_runs: 0,
                dot_balls: 0,
                maidens: 0,
                catch: 0,
                stumping: 0,
                run_out: null,
                run_points: 53,
                milestone_bonus: 0,
                batting_participation_points: 0,
                batting_multiplier: 1,
                match: 'Mumbai Indians v Royal Chal Bangalore at Mumbai (WS), IPL, 9 May 2023',
                Date: '2023-05-09T14:00:00+00:00'
            }
            {
                bat_runs: 37,
                balls_faced: 25,
                fours_hit: 1,
                sixes_hit: 3,
                bowl_wickets: 0,
                balls_bowled: 0,
                bowl_runs: 0,
                dot_balls: 0,
                maidens: 0,
                catch: 0,
                stumping: 0,
                run_out: null,
                run_points: 53,
                milestone_bonus: 0,
                batting_participation_points: 0,
                batting_multiplier: 1,
                match: 'Delhi Capitals v Royal Chal Bangalore at Delhi, IPL, 6 May 2023',
                Date: '2023-05-06T14:00:00+00:00'
            }
            {
                bat_runs: 37,
                balls_faced: 25,
                fours_hit: 1,
                sixes_hit: 3,
                bowl_wickets: 0,
                balls_bowled: 0,
                bowl_runs: 0,
                dot_balls: 0,
                maidens: 0,
                catch: 0,
                stumping: 0,
                run_out: null,
                run_points: 53,
                milestone_bonus: 0,
                batting_participation_points: 0,
                batting_multiplier: 1,
                match: 'Lucknow Super Giants v Royal Chal Bangalore at Lucknow, IPL, 1 May 2023',
                Date: '2023-05-01T14:00:00+00:00'
        }

# Design the System

    [] One Time rates of the player factors
        [] Demand in market
            [] Player selling price in ipl
            [] Follwers in social media
    [*] Design the Points table
        [*] Performace of the player in last 30 matches
        [*] Only for T20 
        [*] Only for last 30 Matches
                [*] Strike rate
                [*] Economy rate
                [*] Batting average
                [*] Bowling average
        [*] Deciding factors for Current performance
            [*] Batting
                [*] Singles
                [*] Sixes
                [*] Fours
                [*] Strike rate
                [*] Out
                [*] 100
                [*] 50
                [*] Duck
            [*] Filding
                [*] Catches
                [*] Run Out
                [*] Stumping  
            [*] Bowling
                [*] Wickets
                [*] Economy Rate
                [*] Median over    

# TODO

    [] DESIGN POINTS TABLE FOR OTHER FORMAT
        [] T10
        [] ODay
        [] Test
    [] Design the Algorithm that takes input as Player and output player share price
    [] Decide the Player Share Factor

# Problems

    [*] How to decide the current price on the basis of past performance
    [*] We are able to calculate the current performace of the player using the points system 
