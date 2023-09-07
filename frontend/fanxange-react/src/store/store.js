import { configureStore } from '@reduxjs/toolkit'
import matchReducer from './matchSlice';
import teamReducer from './teamSlice';
import seriesReducer from './seriesSlice';
import playerReducer from './playerSlice';

export const store = configureStore({
  reducer: {
    match: matchReducer,
    team: teamReducer,
    series: seriesReducer,
    player:playerReducer,

  }, middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
