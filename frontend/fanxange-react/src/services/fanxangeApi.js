import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_BACKEND_URL;
// const baseURL = 'http://192.168.1.65:3132/'
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
  getPlayerMatchInfo: '/performance/:playerId',
  getTeamInfo: '/team/teamInfo',
  trendingPlayer: '/player/trending',

  //Order
  placeOder: '/order/create',
  getOrders: '/order/:userId',
  closeOrder: '/order/close',

  //Wallet 
  createWallet: '/wallet/createwallet',
  getBalance: '/wallet/getbalance/:userid',
  deposit: '/wallet/deposit',
  withdraw: '/wallet/withdraw',
  getTransactions: '/wallet/gettransactions',
  getUserTransactions: '/wallet/getusertransactions/:walletId',
  updateTransaction: '/wallet/updatetransaction/:transactionId',
  getPendingDeposits: '/wallet/getpendingdeposits',
  getPendingWithdrawals: '/wallet/getpendingwithdrawals',
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

  getMatchInfo: ({ matchId, seriesId }) => makeRequest(apiEndpoints.getMatchInfo, 'POST', { matchId, seriesId }),

  getPlayerInfo: (playerId) => makeRequest(apiEndpoints.getPlayerInfo, 'POST', { playerId }),

  getPlayerRecentMatchesInfo: (playerId) => makeRequest(apiEndpoints.getPlayerMatchInfo.replace(':playerId', playerId)),

  getTeamData: ({ seriesId, matchId }) => makeRequest(apiEndpoints.getTeamData, 'POST', { seriesId, matchId }),

  getTeamInfo: (teamId) => makeRequest(apiEndpoints.getTeamInfo, 'POST', { teamId }),

  getTrending: () => makeRequest(apiEndpoints.trendingPlayer),


  //Order Endpoints
  placeOder: (order) => makeRequest(apiEndpoints.placeOder, 'POST', order),
  getUserOrder: (userId) => makeRequest(apiEndpoints.getOrders.replace(':userId', userId)),
  closeOrder: (data) => makeRequest(apiEndpoints.closeOrder, 'POST', data),

  // Wallets Endpoints
  createWallet: ({ userid }) => makeRequest(apiEndpoints.createWallet, 'POST', { userid }),
  getBalance: (userid) => makeRequest(apiEndpoints.getBalance.replace(':userid', userid), 'GET'),
  deposit: (data) => makeRequest(apiEndpoints.deposit, 'POST', data),
  withdraw: (data) => makeRequest(apiEndpoints.withdraw, 'POST', data),
  getUserTransactions: (walletId) => makeRequest(apiEndpoints.getUserTransactions.replace(':walletId', walletId), 'GET'),

  //Admin Endpoints
  getTransactions: () => makeRequest(apiEndpoints.getTransactions, 'GET'),
  getPendingDeposits: () => makeRequest(apiEndpoints.getPendingDeposits, 'GET'),
  getPendingWithdrawals: () => makeRequest(apiEndpoints.getPendingWithdrawals, 'GET'),
  updateTransaction: (transactionId, data) => makeRequest(apiEndpoints.updateTransaction.replace(':transactionId', transactionId), 'PUT', data),
};

