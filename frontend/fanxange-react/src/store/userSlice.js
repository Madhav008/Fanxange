import { createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
});



const initialState = {
    userData: {},
    status: STATUSES.IDLE
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserdata: (state, actions) => {
            state.userData = actions.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
});

export const { setUserdata, setStatus } = userSlice.actions;

export default userSlice.reducer;




// Thunks
export function fetchUser() {
    return async function fetchUserThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))
        const baseURL = import.meta.env.VITE_APP_BACKEND_URL;
        fetch(`${baseURL}/auth/success`, {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(response => {
                if (response.status === 200) return response.json();
                throw new Error("failed to authenticate user");
            })
            .then(responseJson => {
                dispatch(setStatus(STATUSES.IDLE))
                dispatch(setUserdata({
                    authenticated: true,
                    user: responseJson.user
                }))
            })
            .catch(error => {
                dispatch(setStatus(STATUSES.ERROR))
                dispatch(setUserdata({
                    authenticated: false,
                    error: "Failed to authenticate user"
                }))
            });
    };
}