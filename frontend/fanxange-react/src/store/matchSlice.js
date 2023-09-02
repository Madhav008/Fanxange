import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    matchData:{},
    teamData: {},
}


export const matchSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {

        setMatchData: (state, action) => {
            state.matchData = action.payload;
        },
        setTeamData: (state, action) => {
            state.teamData = action.payload;
        },

     
    }
})

export const { setTeamData,setMatchData } = matchSlice.actions;
export default matchSlice.reducer;