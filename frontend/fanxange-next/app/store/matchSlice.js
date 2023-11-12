import { createSlice } from '@reduxjs/toolkit';
import { fanxangeApi } from '../../services/fanxangeApi';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const initialState = {
  matchData: {},
  liveMatches: [],
  upcomingMatches: [],
  recentMatches: [],
  resultMatches: [],
  matchDataStatus: STATUSES.IDLE,
  liveMatchesStatus: STATUSES.IDLE,
  upcomingMatchesStatus: STATUSES.IDLE,
  recentMatchesStatus: STATUSES.IDLE,
  resultMatchesStatus: STATUSES.IDLE,
};

export const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    setMatchData: (state, action) => {
      state.matchData = action.payload;
    },
    setLiveMatches: (state, action) => {
      state.liveMatches = action.payload;
    },
    setUpcomingMatches: (state, action) => {
      state.upcomingMatches = action.payload;
    },
    setRecentMatches: (state, action) => {
      state.recentMatches = action.payload;
    },
    setResultMatches: (state, action) => {
      state.resultMatches = action.payload;
    },
    setMatchDataStatus: (state, action) => {
      state.matchDataStatus = action.payload;
    },
    setLiveMatchesStatus: (state, action) => {
      state.liveMatchesStatus = action.payload;
    },
    setUpcomingMatchesStatus: (state, action) => {
      state.upcomingMatchesStatus = action.payload;
    },
    setRecentMatchesStatus: (state, action) => {
      state.recentMatchesStatus = action.payload;
    },
    setResultMatchesStatus: (state, action) => {
      state.resultMatchesStatus = action.payload;
    },
  },
});

export const {
  setLiveMatches,
  setUpcomingMatches,
  setRecentMatches,
  setResultMatches,
  setMatchData,
  setLiveMatchesStatus,
  setUpcomingMatchesStatus,
  setRecentMatchesStatus,
  setResultMatchesStatus,
  setMatchDataStatus
} = matchSlice.actions;

export default matchSlice.reducer;

// Thunks
export function fetchLiveMatches() {
  return async function fetchThunk(dispatch) {
    dispatch(setLiveMatchesStatus(STATUSES.LOADING));
    try {
      const data = await fanxangeApi.getLiveMatches();
      dispatch(setLiveMatches(data));
      dispatch(setLiveMatchesStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setLiveMatchesStatus(STATUSES.ERROR));
    }
  };
}

export function fetchUpcomingMatches() {
  return async function fetchThunk(dispatch) {
    dispatch(setUpcomingMatchesStatus(STATUSES.LOADING));
    try {
      const data = await fanxangeApi.getUpcomingMatches();
      dispatch(setUpcomingMatches(data));
      dispatch(setUpcomingMatchesStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setUpcomingMatchesStatus(STATUSES.ERROR));
    }
  };
}

export function fetchRecentMatches() {
  return async function fetchThunk(dispatch) {
    dispatch(setRecentMatchesStatus(STATUSES.LOADING));
    try {
      const data = await fanxangeApi.getRecentMatch();
      dispatch(setRecentMatches(data));
      dispatch(setRecentMatchesStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setRecentMatchesStatus(STATUSES.ERROR));
    }
  };
}

export function fetchResultMatches() {
  return async function fetchThunk(dispatch) {
    dispatch(setResultMatchesStatus(STATUSES.LOADING));
    try {
      const data = await fanxangeApi.getMatchResults();
      dispatch(setResultMatches(data));
      dispatch(setResultMatchesStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setResultMatchesStatus(STATUSES.ERROR));
    }
  };
}

export function fetchMatchData(query) {
  return async function fetchThunk(dispatch) {
    dispatch(setMatchDataStatus(STATUSES.LOADING));
    try {
      const data = await fanxangeApi.getMatchInfo(query);
      dispatch(setMatchData(data));
      dispatch(setMatchDataStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setMatchDataStatus(STATUSES.ERROR));
    }
  };
}
