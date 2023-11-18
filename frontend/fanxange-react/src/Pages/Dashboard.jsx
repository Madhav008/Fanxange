import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import UpcomingMatches from '../Components/UpcomingMatches';
import TournamentBar from '../Components/TournamentBar';
import MatchCard from '../Components/MatchCard';
import LeftSideBar from '../Components/Leftsidebar';
import Middlesidebar from '../Components/Middlesidebar';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming'); // 'upcoming' or 'live'

  const {
    liveMatches,
    upcomingMatches,
    recentMatches: match,
    resultMatches: matchResults,
    liveMatchesStatus,
    upcomingMatchesStatus,
    recentMatchesStatus,
    resultMatchesStatus,
  } = useSelector((state) => state.match);
  const { series: Series, status: seriesStatus } = useSelector((state) => state.series);
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className='font-open-sans'>
      <Navbar />

      {/* <TournamentBar matches={match} Series={Series} seriesStatus={seriesStatus} recentMatchesStatus={recentMatchesStatus} /> */}

      <div className='flex justify-start pl-2 m-4 space-x-4'>
        <button
          onClick={() => handleTabChange('upcoming')}
          className={`py-2 px-4 bg-base-200 text-white rounded-md ${selectedTab === 'upcoming' ? 'border-2 border-blue-500' : ''
            } hover:bg-secondary-focus focus:outline-none focus:border-2 focus:border-blue-500 transition duration-300`}
        >
          Upcoming Matches
        </button>
        <button
          onClick={() => handleTabChange('live')}
          className={`py-2 px-4 bg-base-200 text-white rounded-md ${selectedTab === 'live' ? 'border-2 border-blue-500' : ''
            } hover:bg-secondary-focus focus:outline-none focus:border-2 focus:border-blue-500 transition duration-300`}
        >
          Live Matches
        </button>
      </div>

      <div className='font-semibold text-lg px-2 mt-2 ml-4 text mb-2 leading-1 border-b text-white'>
        {selectedTab === 'upcoming' ? 'Upcoming Matches' : 'Live Matches'}
      </div>

      <div className='overflow-x-scroll flex space-x-2 p-2 cursor-pointer'>
        {selectedTab === 'upcoming' &&
          upcomingMatchesStatus !== 'loading' &&
          upcomingMatches.length !== 0 &&
          upcomingMatches.liveMatches.map((m, index) => (
            <UpcomingMatches key={index} match={m} />
          ))}
        {selectedTab === 'live' &&
          liveMatchesStatus !== 'loading' &&
          resultMatchesStatus !== 'loading' &&
          liveMatches.length !== 0 && (
            <>
              {liveMatches.liveMatches.map((match) => (
                <MatchCard key={match.matchId} match={match} />
              ))}
              {matchResults.liveMatches.map((match) => (
                <MatchCard key={match.matchId} match={match} />
              ))}
            </>
          )}
      </div>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-between '>
        <LeftSideBar />
        <Middlesidebar />
        {/*         <div className='max-w-sm shadow-2xl shadow-slate-800 mt-5 -order-1 lg:order-1 '>
          <div className='font-bold text-white w-full my-1 border-b-2 text-center'>
            Live Matches
          </div>
          <div className='overflow-y-auto h-[930px]'>

            {liveMatchesStatus !== 'loading' && resultMatchesStatus !== 'loading' && liveMatches.length != 0 && (
              <>
                {liveMatches?.liveMatches.map((match) => (
                  <MatchCard key={match.matchId} match={match} />
                ))}
                {matchResults?.liveMatches.map((match) => (
                  <MatchCard key={match.matchId} match={match} />
                ))}
              </>
            )}


          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
