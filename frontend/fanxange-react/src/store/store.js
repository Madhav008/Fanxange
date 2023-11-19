import { configureStore } from '@reduxjs/toolkit'
import matchReducer from './matchSlice';
import teamReducer from './teamSlice';
import seriesReducer from './seriesSlice';
import playerReducer from './playerSlice';
import orderReducer from './orderSlice';
import userReducer from './userSlice';
import walletReducer from './walletSlice';


export const store = configureStore({
  reducer: {
    wallet:walletReducer,
    match: matchReducer,
    team: teamReducer,
    series: seriesReducer,
    player:playerReducer,
    order:orderReducer,
    user:userReducer,
    

  }, middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
