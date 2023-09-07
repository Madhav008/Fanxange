import { createSlice } from '@reduxjs/toolkit';
import { fanxangeApi } from '../services/fanxangeApi'
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});


const initialState = {
    playerData: [],
    status: STATUSES.IDLE,

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

    }
})

export const { setplayer, setStatus } = playerSlice.actions;
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
