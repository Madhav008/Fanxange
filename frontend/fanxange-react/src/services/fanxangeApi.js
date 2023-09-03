// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const fanxangeApi = createApi({
  reducerPath: 'fanxangeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.65:3132/' }),
  endpoints: (builder) => ({

    getLiveMatches: builder.query({
      query: () => '/match/live',
      providesTags: ['Matches']
    }),

    getUpcomingMatches: builder.query({
      query: () => '/match/upcomming',
      providesTags: ['Matches']
    }),

    getMatchResults: builder.query({
      query: () => '/match/result',
      providesTags: ['Matches']
    }),

    getRecentMatch: builder.query({
      query: () => '/match/recent',
      providesTags: ['Matches']
    }),

    getSeries: builder.query({
      query: () => '/series/recent',
      providesTags: ['Series']
    }),

    getMatchInfo: builder.query({
      query: (match) => ({
        url: '/match/info',
        method: 'POST',
        body: match
      }),
    }),

    getPlayerInfo: builder.query({
      query: ({ playerId, teamId }) => ({
        url: '/player/data',
        method: 'POST',
        body: {
          playerId: playerId,
          teamId: teamId,
        }
      }),
    }),


    getTeamData: builder.query({
      query: ({ seriesId, matchId }) => ({
        url: '/player',
        method: 'POST',
        body: {
          seriesId, matchId
        }
      }),
    }),
    getTeamPlayers: builder.query({
      query: ({ temaId, matchId }) => ({
        url: '/teams',
        method: 'POST',
        body: {
          teamId, matchId
        }
      }),
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetLiveMatchesQuery,
  useGetMatchResultsQuery,
  useGetUpcomingMatchesQuery,
  useGetRecentMatchQuery,
  useGetSeriesQuery,
  useGetMatchInfoQuery,
  useGetPlayerInfoQuery,
  useGetTeamDataQuery,
} = fanxangeApi