import { createSlice } from '@reduxjs/toolkit';
import { fanxangeApi } from '../services/fanxangeApi';


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});



const initialState = {
    teamData: [],
    team: [],
    teamStatus: STATUSES.IDLE
};

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeams: (state, action) => {
            state.team = [];
            state.teamData = action.payload;
        },
        setTeamStatus: (state, action) => {
            state.teamStatus = action.payload;
        },

        getTeamPlayer: (state, action) => {
            state.teamStatus = STATUSES.LOADING
            state.team = [];
            state.teamData.forEach((player) => {
                if (action.payload == player.teamId) {
                    state.team.push(player);
                }
            })
            state.teamStatus = STATUSES.IDLE
        },


    },
});


export const { setTeams, setTeamStatus, getTeamPlayer } = teamSlice.actions;
export default teamSlice.reducer;


export function fetchTeams(query) {
    return async function fetchThunk(dispatch, getState) {
        
        dispatch(setTeamStatus(STATUSES.LOADING));
        try {
            const data = await fanxangeApi.getTeamData(query);
            dispatch(setTeams(data));
            dispatch(setTeamStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setTeamStatus(STATUSES.ERROR));
        }
    };
}
