import { configureStore } from '@reduxjs/toolkit'
import matchReducer from './matchSlice';
import teamReducer from './teamSlice';
import seriesReducer from './seriesSlice';
import playerReducer from './playerSlice';
import orderReducer from './orderSlice';


export const store = configureStore({
  reducer: {
    match: matchReducer,
    team: teamReducer,
    series: seriesReducer,
    player:playerReducer,
    order:orderReducer,


  }, middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
