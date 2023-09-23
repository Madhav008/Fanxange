import { createSlice } from '@reduxjs/toolkit';
import { fanxangeApi } from '../services/fanxangeApi'
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});


const initialState = {
    orders: [],
    status: STATUSES.IDLE,

}


export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {

        setorders: (state, action) => {
            state.orders = action.payload;
        },

        setStatus: (state, action) => {
            state.status = action.payload;
        },

    }
})

export const { setorders, setStatus } = ordersSlice.actions;
export default ordersSlice.reducer;


// Thunks


export function createOrder(order) {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const data = await fanxangeApi.placeOder(order);

            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}

export function fetchorder() {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            // var pageno = getState().questions.page 
            // var difficulty = getState().questions.difficulty
            const data = await fanxangeApi.getUserOrder("650e9bea3671e2f8171430d0");

            dispatch(setorders(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}
