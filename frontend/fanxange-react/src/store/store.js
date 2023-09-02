import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { fanxangeApi } from '../services/fanxangeApi'
import matchReducer from './matchSlice';
import teamReducer from './teamSlice';


export const store = configureStore({
  reducer: {
    [fanxangeApi.reducerPath]: fanxangeApi.reducer,
    match: matchReducer,
    team: teamReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fanxangeApi.middleware),
})

setupListeners(store.dispatch)