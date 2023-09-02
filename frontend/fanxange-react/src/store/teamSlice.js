import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    teams:{},
    teamA: [],
    teamB: [],
};

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeams: (state, action) => {
            const { players, matchData } = action.payload;
            if (matchData && matchData.matches && players) {
                const firstMatch = matchData.matches[0];
                if (firstMatch && players) {
                    const { teams } = firstMatch;
                    state.teams = teams;
                    state.teamA = [];
                    state.teamB = [];

                    // Push players into teamA and teamB
                    players.forEach(player => {
                        if (player.teamId == teams[0].objectId) {
                            state.teamA.push(player);
                        }
                        if (player.teamId == teams[1].objectId) {
                            state.teamB.push(player);
                        }
                    });
                }
            }
        },
    },
});


export const { setTeams } = teamSlice.actions;



export default teamSlice.reducer;
