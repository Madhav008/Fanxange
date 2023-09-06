import { configureStore } from '@reduxjs/toolkit'
import matchReducer from './matchSlice';
import teamReducer from './teamSlice';
import seriesReducer from './seriesSlice';

export const store = configureStore({
  reducer: {
    match: matchReducer,
    team: teamReducer,
    series: seriesReducer

  }, middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
