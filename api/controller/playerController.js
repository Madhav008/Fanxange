const RecentMatches = require("../models/Matches");
const PlayerStats = require("../models/PlayerStats");
const axios = require('axios');
const { LatestPerformance } = require("./performanceController");

async function fetchPlayerDataFromAPI(playerId) {
    console.log('Fetching player data from API');
    const apiUrl = `https://hs-consumer-api.espncricinfo.com/v1/pages/player/matches?playerId=${playerId}`;
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: apiUrl,
        headers: {
            'authority': 'hs-consumer-api.espncricinfo.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'no-cache',
            'cookie': 'SWID=47554b3f-1a64-455e-8ac5-17aa6361c90d; _cb=B0sgXZBJAp5ajAosJ; WZRK_G=cdce94ca01fb49b29c583e5aee8d6c29; OptanonAlertBoxClosed=2023-06-29T11:03:10.881Z; TWDC-DTCI_ENSIGHTEN_PRIVACY_TWDC_Vendor_Consent=1; eupubconsent-v2=CPuHNmQPuHNmQAcABBENDKCsAP_AAH_AAAYgJhNf_X__b2_r-_7-f_t0eY1P9_7__-0zjhfdl-8N3f_X_L8X52M7vF36tqoKuR4ku3LBIUdlHPHcTVmw6okVryPsbk2cr7NKJ7PEmnMbO2dYGH9_n1_z-ZKY7___f__z_v-v________7-3f3__5___-__e_V_-9zfn9_____9vP___9v-_9__________3_79_7_H9-f_87_QTBAJMNS4gC7MscCZaMIoUQIwrCQqgUAFFAMLRAYQOrgp2VwE-sIkAKEUATgRAhwBRkwCAAASAJCIAJAjwQCAACAQAAgAVCIQAMbAILACwEAgAFAdCxRigCECQgyIiIhTAgKkSCgnsqEEoP9DTCEOssAKDR_xUICNZAxWBEJCwchwRICXiyQPcUb5ACMAKAUSoVqKT00BCgmbLAAAAA.f_gAD_gAAAAA; OTAdditionalConsentString=1~39.43.46.55.61.70.83.89.93.108.117.122.124.135.136.143.144.147.149.159.162.167.171.192.196.202.211.218.228.230.239.241.259.266.286.291.311.317.322.323.327.338.367.371.385.389.394.397.407.413.415.424.430.436.445.449.453.482.486.491.494.495.501.503.505.522.523.540.550.559.560.568.574.576.584.587.591.737.745.787.802.803.817.820.821.839.864.867.874.899.904.922.931.938.979.981.985.1003.1024.1027.1031.1033.1040.1046.1051.1053.1067.1085.1092.1095.1097.1099.1107.1127.1135.1143.1149.1152.1162.1166.1186.1188.1201.1205.1211.1215.1226.1227.1230.1252.1268.1270.1276.1284.1286.1290.1301.1307.1312.1345.1356.1364.1365.1375.1403.1415.1416.1419.1440.1442.1449.1455.1456.1465.1495.1512.1516.1525.1540.1548.1555.1558.1564.1570.1577.1579.1583.1584.1591.1603.1616.1638.1651.1653.1665.1667.1677.1678.1682.1697.1699.1703.1712.1716.1721.1725.1732.1745.1750.1765.1769.1782.1786.1800.1810.1825.1827.1832.1838.1840.1842.1843.1845.1859.1866.1870.1878.1880.1889.1899.1917.1929.1942.1944.1962.1963.1964.1967.1968.1969.1978.2003.2007.2008.2027.2035.2039.2044.2047.2052.2056.2064.2068.2070.2072.2074.2088.2090.2103.2107.2109.2115.2124.2130.2133.2135.2137.2140.2145.2147.2150.2156.2166.2177.2183.2186.2202.2205.2216.2219.2220.2222.2225.2234.2253.2264.2279.2282.2292.2299.2305.2309.2312.2316.2322.2325.2328.2331.2334.2335.2336.2337.2343.2354.2357.2358.2359.2370.2376.2377.2387.2392.2394.2400.2403.2405.2407.2411.2414.2416.2418.2425.2440.2447.2461.2462.2465.2468.2472.2477.2481.2484.2486.2488.2493.2497.2498.2499.2501.2510.2511.2517.2526.2527.2532.2534.2535.2542.2552.2563.2564.2567.2568.2569.2571.2572.2575.2577.2583.2584.2596.2601.2604.2605.2608.2609.2610.2612.2614.2621.2628.2629.2633.2634.2636.2642.2643.2645.2646.2647.2650.2651.2652.2656.2657.2658.2660.2661.2669.2670.2677.2681.2684.2686.2687.2690.2695.2698.2707.2713.2714.2729.2739.2767.2768.2770.2772.2784.2787.2791.2792.2798.2801.2805.2812.2813.2816.2817.2818.2821.2822.2827.2830.2831.2834.2838.2839.2840.2844.2846.2847.2849.2850.2852.2854.2856.2860.2862.2863.2865.2867.2869.2873.2874.2875.2876.2878.2880.2881.2882.2883.2884.2886.2887.2888.2889.2891.2893.2894.2895.2897.2898.2900.2901.2908.2909.2911.2912.2913.2914.2916.2917.2918.2919.2920.2922.2923.2924.2927.2929.2930.2931.2939.2940.2941.2947.2949.2950.2956.2958.2961.2963.2964.2965.2966.2968.2970.2973.2974.2975.2979.2980.2981.2983.2985.2986.2987.2991.2994.2995.2997.2999.3000.3002.3003.3005.3008.3009.3010.3012.3016.3017.3018.3019.3024.3025.3028.3034.3037.3038.3043.3045.3048.3052.3053.3055.3058.3059.3063.3065.3066.3068.3070.3072.3073.3074.3075.3076.3077.3078.3089.3090.3093.3094.3095.3097.3099.3104.3106.3109.3112.3117.3118.3119.3120.3124.3126.3127.3128.3130.3135.3136.3145.3149.3150.3151.3154.3155.3162.3163.3167.3172.3173.3180.3182.3183.3184.3185.3187.3188.3189.3190.3194.3196.3197.3209.3210.3211.3214.3215.3217.3219.3222.3223.3225.3226.3227.3228.3230.3231.3232.3234.3235.3236.3237.3238.3240.3244.3245.3250.3251.3253.3257.3260.3268.3270.3272.3281.3288.3290.3292.3293.3295.3296.3300.3306.3307.3308.3314.3315.3316.3318.3324.3327.3328.3330.3531.3831.3931; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Jun+29+2023+17%3A16%3A04+GMT%2B0530+(India+Standard+Time)&version=202212.1.0&isIABGlobal=false&hosts=&consentId=16dba951-e96a-4288-b65c-d2e0aba41aef&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1%2CC0005%3A1%2CSTACK1%3A1%2CSTACK42%3A1%2CBG839%3A1&geolocation=GB%3B&AwaitingReconsent=false; s_pers=%20s_c24%3D1688230460283%7C1782838460283%3B%20s_c24_s%3DFirst%2520Visit%7C1688232260283%3B%20s_gpv_pn%3Dcricinfo%253Acricinfo%2520magazine%2520%2528online%2529%2520site%253Afeatures%253Aa%2520modern%2520classic%7C1688232260296%3B; nol_fpid=ncfe1dxbjdrk95mpior4meyv9ejgu1684078250|1684078250780|1688285280177|1688285280652; ph_foZTeM1AW8dh5WkaofxTYiInBhS4XzTzRqLs50kVziw_posthog=%7B%22distinct_id%22%3A%22188f28411326ce-0b692d34981ea6-26031d51-1fa400-188f284113312bf%22%2C%22%24device_id%22%3A%22188f28411326ce-0b692d34981ea6-26031d51-1fa400-188f284113312bf%22%2C%22%24user_state%22%3A%22anonymous%22%2C%22extension_version%22%3A%221.5.5%22%2C%22%24sesid%22%3A%5B1687701215219%2C%22188f2d4c0c714c-05fd6a41f71bd9-26031d51-1fa400-188f2d4c0c8792%22%2C1687701209287%5D%2C%22%24session_recording_enabled_server_side%22%3Afalse%2C%22%24autocapture_disabled_server_side%22%3Afalse%2C%22%24active_feature_flags%22%3A%5B%5D%2C%22%24enabled_feature_flags%22%3A%7B%22enable-session-recording%22%3Afalse%2C%22sourcing%22%3Afalse%2C%22only-company-edit%22%3Afalse%2C%22job-lists%22%3Afalse%7D%2C%22%24feature_flag_payloads%22%3A%7B%7D%7D; _gcl_au=1.1.812810613.1692104919; _cc_id=8ffc587f3c9ac87c64234a879ac2bd20; cto_bundle=k0Xuh19zTlk3TlFjdEdFWE55QjVZYzNWOGQlMkJqdjlzNEpGZHh5UmdTJTJGOSUyQm1Zc2h0VXlmdFVmQXhsQzBPWXB1b1lvSXhGWW5sSWtrYyUyQmklMkJBMCUyQkdQY21Odk5vMkxCbnF4OWpYMWxBOFhqYmlmREtCMWs0TW1veUFYMkVDTXpEa2NuWEpNZGtlJTJCSSUyRm1FUzh4a3NYMjZrcSUyQnl0TGhVTXpXZDljTGRubCUyRjViOHdnQWEyQSUzRA; _uetvid=4d733100f26c11ed99713d743675b0d0; s_nr30=1693144656288-Repeat; s_c24=1693144656290; mbox=PC#7f11cb382ef641beb7184b45373ee852.37_0#1756389457|session#32aee89718734dc8b35fb6fa0d9f8cbb#1693146517; AMCV_EE0201AC512D2BE80A490D4C%40AdobeOrg=1585540135%7CMCIDTS%7C19596%7CMCMID%7C26119846309066122693930433705073148270%7CMCAAMLH-1693749456%7C12%7CMCAAMB-1693749456%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1693151856s%7CNONE%7CvVersion%7C4.4.0%7CMCAID%7CNONE; _chartbeat2=.1684078249324.1693144657741.0001000110001011.C6mnrBBl9pf1DVCoeu-1cQR4q9HR.1',
            'dnt': '1',
            'pragma': 'no-cache',
            'sec-ch-ua': '"Chromium";v="116", "Not A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
        }
    };
    try {
        const apiResponse = await axios.request(config);

        if (apiResponse.status === 200) {
            return apiResponse.data.player; // Assuming player data is under 'player' key in the response
        } else {
            throw new Error(`API request failed with status code: ${apiResponse.status}`);
        }
    } catch (error) {
        throw new Error(`Error fetching player data from API: ${error.message}`);
    }
}

async function updatePlayerDataInDatabase(playerId) {
    try {
        // Find the existing player data in the database
        const existingPlayer = await PlayerStats.findOne({ playerId });

        if (existingPlayer) {

            const missingFields = [];

            if (!existingPlayer.image) missingFields.push('image');
            if (!existingPlayer.imageUrl) missingFields.push('imageUrl');

            if (missingFields.length > 0) {
                const newData = await fetchPlayerDataFromAPI(playerId);

                // If any specified fields are missing, update them with new data
                const updatedData = {
                    ...existingPlayer.toObject(),
                    image: newData.image,
                    imageUrl: newData.imageUrl,
                };

                // Update the player data in the database with the updated data
                const updatedPlayer = await PlayerStats.findOneAndUpdate(
                    { playerId },
                    updatedData,
                    { new: true }
                );

                return updatedPlayer;
            } else {
                // If all specified fields are present, return the existing player data
                return existingPlayer;
            }

        } else {

            return existingPlayer;
        }
    } catch (err) {
        throw new Error(`Error updating player data in the database: ${err.message}`);
    }
}

async function getPlayer(req, res) {
    const { playerId } = req.body;

    try {

        // Update the database with the new data
        const updatedPlayer = await updatePlayerDataInDatabase(playerId);


        const playerPriceData = await LatestPerformance(playerId);
        const finalPlayers = {
            ...updatedPlayer.toObject(),
            playerPriceData
        }
        // Return the updated player data
        res.status(200).json({ player: finalPlayers });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


async function getPlayersByTeam(req, res) {
    const { matchId, seriesId } = req.body;

    try {
        // First get the match from the matchid
        const matches = await RecentMatches.findOne({
            seriesId: seriesId,
            matchId: matchId
        });

        if (!matches) {
            // If the match is not found, return a 404 status code
            return res.status(404).json({ error: 'Match not found' });
        }

        var finalPlayers = [];
        // Second get all the team players from the match
        await Promise.all(matches.teamPlayers.map(async (player) => {
            // Third update the players who don't have data
            const playler = await updatePlayerDataInDatabase(player.playerId);

            finalPlayers.push(playler);
        }));

        // Fourth, return all the players
        // const players = await PlayerStats.find({ matchId });

        // console.log(finalPlayers)
        res.status(200).json(finalPlayers);
    } catch (error) {
        console.error(error);
        // Handle any unexpected errors with a 500 status code
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getTeamPlayers(req, res) {
    const { temaId } = req.body;

    try {
        // First get the match from the matchid
        const finalPlayers = await PlayerStats.find({
            temaId,
        });

        res.status(200).json(finalPlayers);
    } catch (error) {
        console.error(error);
        // Handle any unexpected errors with a 500 status code
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = { getPlayer, getPlayersByTeam, updatePlayerDataInDatabase, getTeamPlayers };
