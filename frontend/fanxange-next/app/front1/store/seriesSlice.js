import { createSlice } from '@reduxjs/toolkit';
import { fanxangeApi } from '../services/fanxangeApi';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});


const initialState = {
    series: [],
    status: STATUSES.IDLE,

}


export const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {

        setseries: (state, action) => {
            state.series = action.payload;
        },

        setStatus: (state, action) => {
            state.status = action.payload;
        },

    }
})

export const { setseries, setStatus } = seriesSlice.actions;
export default seriesSlice.reducer;


// Thunks
export function fetchSeries() {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            // var pageno = getState().questions.page 
            // var difficulty = getState().questions.difficulty
            const data = await fanxangeApi.getSeries();

            dispatch(setseries(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}
