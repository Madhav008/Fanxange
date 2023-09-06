import React, { useEffect, useState } from 'react';
import PlayerPriceCard from './PlayerPriceCard';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamPlayer } from '../store/teamSlice';

const Middlesidebar = () => {

  const { matchData, matchDataStatus } = useSelector((state) => state.match)
  const { teamData, teamStatus, team } = useSelector((state) => state.team)

  const dispatch = useDispatch();

  return (
    <div className='p-3 flex flex-col align-middle items-center w-full'>
      <h1 className='text-white text-sm border-b-2 font-semibold p-2 text-center w-full mb-2'>Current Match Players</h1>
      <div className='flex items-center font-bold justify-evenly w-full mx-auto flex-wrap xl:flex-nowrap'>
        {/* Player Search Bar */}
        <div className="form-control w-full">
          <div className="input-group  rounded-md my-2 shadow-lg shadow-base-950 w-full">
            <input type="text" placeholder="Search Players" className="input input-bordered w-full" />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        <div className='flex items-center'>
          {matchDataStatus === 'loading' ? (
            <div className="text-sm hover:bg-secondary hover:text-white border rounded-lg w-max p-2 m-2 items-center text-center break-words whitespace-nowrap">
              Loading...
            </div>
          ) : (
            <>
              <h1
                onClick={() => {
                  const objectId = matchData?.matches?.[0]?.teams?.[0]?.objectId;
                  if (objectId) {

                    dispatch(getTeamPlayer(objectId))
                  } else {
                    console.log("No ObjectId found");
                  }
                }}
                className='text-sm hover:bg-secondary hover:text-white border rounded-lg w-max p-2 m-2 items-center text-center break-words whitespace-nowrap'
              >
                {matchData && matchData.matches && matchData.matches[0]?.teams[0]?.longName
                  ? matchData.matches[0]?.teams[0]?.longName
                  : 'Team A Player'}
              </h1>
              <h1 onClick={() => {
                const objectId = matchData?.matches?.[0]?.teams?.[1]?.objectId;
                if (objectId) {

                  dispatch(getTeamPlayer(objectId))
                } else {
                  console.log("No ObjectId found");
                }
              }}
                className='text-sm hover:bg-secondary hover:text-white border rounded-lg w-max p-2 m-2 items-center text-center break-words whitespace-nowrap'>
                {matchData && matchData.matches && matchData.matches[0]?.teams[1]?.longName ? matchData.matches[0]?.teams[1]?.longName : 'Team B Player'}
              </h1>
            </>
          )}
        </div>
      </div>

      {/* Parent with search bar and player table */}
      <div className='max-h-[xl] w-full'>
        <div className='divider'></div>
        {/* Player Cards */}
        <div className='h-[720px] overflow-auto'>
          {teamStatus === 'loading' ? (
            <div>Loading...</div>
          ) : teamStatus === 'error' ? (
            <div>Error loading data.</div>
          ) : (
            (team.length > 0 || (teamData && teamData.length > 0)) ? (
              // Render the 'team' or 'teamData' based on availability
              (team.length > 0 ? team : teamData).map((player) => (
                <PlayerPriceCard key={player.playerId} player={player} />
              ))
            ) : (
              <div>No player data available.</div>
            )
          )}
        </div>
      </div>

    </div>
  );
}

export default Middlesidebar;
