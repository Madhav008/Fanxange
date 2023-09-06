import axios from 'axios';

const baseURL = 'https://fanxange.depthfirstsearch.tk/';

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
  getPlayerInfo: '/player/data',
  getTeamData: '/player',
  getTeamPlayers: '/teams',
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
  getPlayerInfo: ({ playerId, teamId }) =>
    makeRequest(apiEndpoints.getPlayerInfo, 'POST', { playerId, teamId }),
  getTeamData: ({ seriesId, matchId }) =>
    makeRequest(apiEndpoints.getTeamData, 'POST', { seriesId, matchId }),
  getTeamPlayers: ({ teamId, matchId }) =>
    makeRequest(apiEndpoints.getTeamPlayers, 'POST', { teamId, matchId }),
};

