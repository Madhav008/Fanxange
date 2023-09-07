import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import PlayerPointsChart from '../Components/PlayerPointsChart'
import PlayerPriceChart from '../Components/PlayerPriceChart'
import PlayerProfile from '../Components/PlayerProfile'
import UpcomingMatches from '../Components/UpcomingMatches'
import RecentMatches from '../Components/RecentMatches'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchplayer } from '../store/playerSlice'


const Trade = () => {


  const { playerId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchplayer(playerId));
  }, [])


  const { status } = useSelector((state) => state.player);


  if (status == 'loading') {
    return <div>
      Loading ... 
    </div>
  }


  return (
    <div>
      <Navbar />
      <PlayerProfile />
      <div className='flex flex-col lg:flex-row  w-full gap-2 justify-between'>
        <div className='flex flex-col lg:flex-row gap-3 justify-between w-full h-full'>
          <PlayerPointsChart />
          <PlayerPriceChart />
        </div>
      </div>

      {/*  <div className='flex mx-auto max-w-4xl items-center align-middle justify-evenly my-6'>
        <button className='border-2 font-bold text-sm  hover:bg-gradient-to-r from-[#fd746c]  to-[#ff9068] text-white rounded-full w-[200px] uppercase p-4 bg-transparent'>
          Buy SHARES
        </button>
        <button className='border-2 font-bold text-sm  hover:bg-gradient-to-r from-[#fd746c]  to-[#ff9068] text-white rounded-full w-[200px] uppercase p-4 bg-transparent'>
          Sell SHARES
        </button>

      </div>

      <div className='bg-[#3E3B99] h-[500px] max-w-4xl flex mx-auto m-8 rounded-3xl shadow-lg shadow-cyan-900 '>
        <div className='w-max mx-auto flex max-w-sm my-6 align-middle flex-col'>
          <h1 className='font-semibold text-lg text-white'>Amount of Shares</h1>
          <div className='flex mx-auto bg-blue-700   rounded-full h-max px-4 items-center'>
            <button className='btn rounded-full bg-blue-800 p-5 border-none'></button>
            <div className='text-white font-bold text-2xl mx-7 bg-blue-800 p-3 rounded-3xl m-2  '>19</div>
            <button className='btn rounded-full bg-blue-800 p-5 border-none'></button>

          </div>
        </div>
      </div> */}



      <div className='h-[500px] overflow-y-auto'>
        <RecentMatches />
      </div>

    </div>
  )
}

export default Trade