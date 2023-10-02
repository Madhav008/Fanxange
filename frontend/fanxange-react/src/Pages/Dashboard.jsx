import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import UpcomingMatches from '../Components/UpcomingMatches';
import TournamentBar from '../Components/TournamentBar';
import MatchCard from '../Components/MatchCard';
import LeftSideBar from '../Components/Leftsidebar';
import Middlesidebar from '../Components/Middlesidebar';
import { useSelector } from 'react-redux';

const Dashboard = () => {
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

  return (
    <div>
      <Navbar />

      <TournamentBar matches={match} Series={Series} seriesStatus={seriesStatus} recentMatchesStatus={recentMatchesStatus} />
      <div className='overflow-x-scroll flex space-x-2 p-2 cursor-pointer '>
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
      <div className='flex flex-col-reverse lg:flex-row lg:justify-between '>
        <LeftSideBar />
        <Middlesidebar />
        <div className='max-w-sm shadow-2xl shadow-slate-800 mt-5 -order-1 lg:order-1 '>
          <div className='font-bold text-white w-full my-1 border-b-2 text-center'>
            Upcoming Matches
          </div>
          <div className='overflow-y-auto h-[930px]'>
            {upcomingMatchesStatus !== 'loading' && upcomingMatches.length != 0 &&
              upcomingMatches?.liveMatches.map((m, index) => (
                <UpcomingMatches key={index} match={m} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
