<!-- Shree GaneshNamh -->

# Setup the server

    .\hasura.exe console --admin-secret myadminsecretkey

# SEED THE DATA

## Run this command to seed the data

    node Espn_Cricket_data\Match.data.js

## Run this command to start the API

    node index.js
****

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

    [] Saturday
        [*] Authenticatication with frontend
        [*] Homepage screen
        [*] Display the player with price on screen
        [*] Display the tournament
        [*] Display the matches
        [] Display the players stats and chart of performance
        [] Made a frontend for the stats
        [] Made api endpoints for the stats,player and tournament 
        
    [] Sunday
        [] Made the Trading exchange api
        [] Do the trade 
        [] Add the payment gateway 
        [] Make the wallet backend

    [*] DESIGN POINTS TABLE FOR OTHER FORMAT
        [] T10
        [*] T20
        [] ODay
        [] Test
    [] Design the Algorithm that takes input as Player and output player share price
    [] Decide the Player Share Factor

# Problems

    [*] How to decide the current price on the basis of past performance
    [*] We are able to calculate the current performace of the player using the points system 

# Facebook Token

    IGQVJVNjB2VEZAKSjR2LU9tZAi16czhPTlZAMZAkNBaU1YWUYxRlRvWUVCd0dWS3B4TEZAtdmpkamNLUEMxWkxwVmd0VHB2eVRWZAGM5UmtqNndyaXktbV9oeFg4WDlTeUlnc2NCcE9uZAFNITl9sYlhrTHpEVwZDZD


ffmpeg -i .\init.mp4 -i .\overlay.mp4 -filter_complex "[1:v]scale=320:240 [ov]; [0:v][ov]overlay=10:10" -c:a copy output_video_with_overlay.mp4

#   Commad To add Text watermark

     ffmpeg -i .\10000000_224662343884766_5172096714754494654_n.mp4 -vf "drawtext=text='@saneha_basal_2':x=(w-tw)/2:y=h/2:fontsize=42:fontcolor=white:fontfile=font.ttf:box=1:boxcolor=black@0.5:boxborderw=5" -c:a copy .\output_video_with_overlay.mp4


      yt-dlp URL https://www.youtube.com/shorts/DlrouUfAcLc --format 136