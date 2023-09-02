
import React from 'react'
import Navbar from '../Components/Navbar'
import UpcomingMatches from '../Components/UpcomingMatches'
import TournamentBar from '../Components/TournamentBar'
import MatchCard from '../Components/MatchCard'
import LeftSideBar from '../Components/Leftsidebar'
import Middlesidebar from '../Components/Middlesidebar'
import { useGetLiveMatchesQuery, useGetMatchInfoQuery, useGetMatchResultsQuery, useGetRecentMatchQuery, useGetSeriesQuery, useGetUpcomingMatchesQuery } from '../services/fanxangeApi'


const Dashboard = () => {


  const { data: liveMatches } = useGetLiveMatchesQuery()
  const { data: upcomingMatches } = useGetUpcomingMatchesQuery()
  const { data: matchResults } = useGetMatchResultsQuery()
  const { data: match } = useGetRecentMatchQuery()
  const { data: Series } = useGetSeriesQuery()



  return (
    <div >

      <div>
        <Navbar />
        {/* Series */}
        <div>
          {/* Tournaments */}
          <TournamentBar matches={match} Series={Series} />

          {/* Matches */}
          <div className='overflow-x-scroll flex space-x-2 p-2 cursor-pointer '>
            {liveMatches?.liveMatches.map(match => (
              <MatchCard match={match} />
            ))}

            {matchResults?.liveMatches.map(match => (
              <MatchCard match={match} />
            ))}
          </div>

        </div>
        <div className='flex   flex-col-reverse lg:flex-row lg:justify-between '>


          <LeftSideBar />
          <Middlesidebar />



          <div className=' max-w-sm shadow-2xl shadow-slate-800 mt-5 -order-1 lg:order-1 '>
            <div className='font-bold text-white w-full my-1 border-b-2 text-center'>
              Upcomming Matches
            </div>
            <div className='overflow-y-auto h-[930px]'>
              {upcomingMatches?.liveMatches.map((m, index) => (
                  <UpcomingMatches key={index} match={m} />
                
              ))}
            </div>
          </div>
        </div>
      </div>







    </div>
  )



}

export default Dashboard