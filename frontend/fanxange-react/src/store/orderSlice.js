import { createSlice } from '@reduxjs/toolkit';
import { fanxangeApi } from '../services/fanxangeApi'
import toast from 'react-hot-toast';
import { getWallet } from './walletSlice';

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
        const userid = getState().user.userData.user.id;
        const walletId = getState().wallet.mWallet._id;

        var newOrder = {
            ...order,
            user: userid,
            walletId
        }
        try {
            const data = await fanxangeApi.placeOder(newOrder);
            if (data != null) {
                toast.success('Order Executed Successfully!')
                dispatch(getWallet())
            }
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
            var userid = getState().user.userData.user.id
            // var difficulty = getState().questions.difficulty
            const data = await fanxangeApi.getUserOrder(userid);

            dispatch(setorders(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}


export function closeOrder(order) {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const walletId = getState().wallet.mWallet._id;

            var mdata = {
                ...order,
                walletId
            }

            // var difficulty = getState().questions.difficulty
            const data = await fanxangeApi.closeOrder(mdata);
            dispatch(getWallet())
            dispatch(fetchorder())
            // dispatch(setorders(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}