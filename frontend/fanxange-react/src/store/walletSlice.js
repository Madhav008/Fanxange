import { createSlice } from '@reduxjs/toolkit';
import { fanxangeApi } from '../services/fanxangeApi'
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});


const initialState = {
    balance: 0.00,
    mWallet: {},
    status: STATUSES.IDLE,
    transactions: [],
    transactionStatus: STATUSES.IDLE,
}


export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {

        setbalance: (state, action) => {
            state.balance = parseFloat(action.payload).toFixed(2);
        },

        setWallet: (state, action) => {
            state.mWallet = action.payload;
        },

        setStatus: (state, action) => {
            state.status = action.payload;
        },

        setTransactions: (state, action) => {
            state.transactions = action.payload;
        },

        setTransactionsStatus: (state, action) => {
            state.transactionStatus = action.payload;
        },
    }
})

export const { setWallet, setbalance, setStatus, setTransactions, setTransactionsStatus } = walletSlice.actions;
export default walletSlice.reducer;


// Thunks
export function createWallet() {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            var userid = getState().user.userData.user.id
            const data = await fanxangeApi.createWallet({ userid });
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}
export function getWallet() {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));

        const waitForUserId = async () => {
            const userid = getState().user.userData?.user?.id;
            if (!userid) {
                // If userid is not present, wait for 1 second and then retry
                return new Promise(resolve => setTimeout(resolve, 1000)).then(waitForUserId);
            }
            return userid;
        };

        try {
            const userid = await waitForUserId();

            // Now userid is available, proceed to fetch the wallet
            const data = await fanxangeApi.getBalance(userid);
            dispatch(setbalance(parseFloat(data.balance)));
            dispatch(setWallet(data.wallet))
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}

export function deposit(amount) {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            var userid = getState().user.userData.user.id
            var mdata = {
                userid, amount
            }
            const data = await fanxangeApi.deposit(mdata);
            console.log(data)
            dispatch(setbalance(parseFloat(data.balance)))
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}


export function withdraw(amount) {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            var userid = getState().user.userData.user.id
            var mdata = {
                userid, amount
            }
            const data = await fanxangeApi.withdraw(mdata);
            console.log(data)
            dispatch(setbalance(parseFloat(data.balance)))
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}

export function transactions() {
    return async function fetchThunk(dispatch, getState) {
        dispatch(setTransactionsStatus(STATUSES.LOADING));
        try {
            var walletId = getState().wallet.mWallet._id
            const data = await fanxangeApi.getUserTransactions(walletId);
            dispatch(setTransactions(data))
            dispatch(setTransactionsStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setTransactionsStatus(STATUSES.ERROR));
        }
    };
}