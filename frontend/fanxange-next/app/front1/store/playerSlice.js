import { createSlice } from '@reduxjs/toolkit';
import { fanxangeApi } from '../services/fanxangeApi';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});


const initialState = {
    playerData: [],
    playerRecentMatches: [],
    trendingPlayers: [],
    playerRecentMatchesStatus: STATUSES.IDLE,
    status: STATUSES.IDLE,
    trendingPlayerStatus: STATUSES.IDLE,
}


export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {

        setplayer: (state, action) => {
            state.playerData = action.payload;
        },

        setStatus: (state, action) => {
            state.status = action.payload;
        },

        setPlayerRecentMatches: (state, action) => {
            state.playerRecentMatches = action.payload;
        },
        setPlayerRecentMatchesStatus: (state, action) => {
            state.playerRecentMatchesStatus = action.payload;
        },
        setTrendingPlayers: (state, action) => {
            state.trendingPlayers = action.payload;
        },
        setTrendingPlayerStatus: (state, action) => {
            state.trendingPlayerStatus = action.payload;
        }

    }
})

export const { setplayer, setStatus, setPlayerRecentMatches, setPlayerRecentMatchesStatus, setTrendingPlayerStatus, setTrendingPlayers } = playerSlice.actions;
export default playerSlice.reducer;


// Thunks
export function fetchplayer(query) {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            // var pageno = getState().questions.page 
            // var difficulty = getState().questions.difficulty
            const data = await fanxangeApi.getPlayerInfo(query);

            dispatch(setplayer(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}

// Thunks
export function fetchPlayerRecentMatches(query) {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setPlayerRecentMatchesStatus(STATUSES.LOADING));
        try {
            // var pageno = getState().questions.page 
            // var difficulty = getState().questions.difficulty
            const data = await fanxangeApi.getPlayerRecentMatchesInfo(query);

            dispatch(setPlayerRecentMatches(data));
            dispatch(setPlayerRecentMatchesStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setPlayerRecentMatchesStatus(STATUSES.ERROR));
        }
    };
}

export function fetchtrendingplayer(query) {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setTrendingPlayerStatus(STATUSES.LOADING));
        try {
            const data = await fanxangeApi.getTrending();
            dispatch(setTrendingPlayers(data));
            dispatch(setTrendingPlayerStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setTrendingPlayerStatus(STATUSES.ERROR));
        }
    };
}