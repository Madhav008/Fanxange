import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_BACKEND_URL;

// Define Axios requests for each of your endpoints
const axiosInstance = axios.create({
  baseURL,
});

const apiEndpoints = {
  getLiveMatches: '/match/live',
  getUpcomingMatches: '/match/upcomming',
  getMatchResults: '/match/result',
  getRecentMatch: '/match/recent',
  getSeries: '/series/recent',
  getMatchInfo: '/match/info',
  getTeamData: '/player',
  getPlayerInfo: '/player/data',
  getTeamInfo: '/team/teamInfo',


};

// Define functions to make Axios requests for your endpoints
const makeRequest = async (url, method = 'GET', data = null) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fanxangeApi = {
  getLiveMatches: () => makeRequest(apiEndpoints.getLiveMatches),
  getUpcomingMatches: () => makeRequest(apiEndpoints.getUpcomingMatches),
  getMatchResults: () => makeRequest(apiEndpoints.getMatchResults),
  getRecentMatch: () => makeRequest(apiEndpoints.getRecentMatch),
  getSeries: () => makeRequest(apiEndpoints.getSeries),
  getMatchInfo: ({ matchId, seriesId }) =>
    makeRequest(apiEndpoints.getMatchInfo, 'POST', { matchId, seriesId }),
  getPlayerInfo: (playerId) =>
    makeRequest(apiEndpoints.getPlayerInfo, 'POST', { playerId }),
  getTeamData: ({ seriesId, matchId }) =>
    makeRequest(apiEndpoints.getTeamData, 'POST', { seriesId, matchId }),
  getTeamInfo: (teamId) =>
    makeRequest(apiEndpoints.getTeamInfo, 'POST', { teamId }),
};

