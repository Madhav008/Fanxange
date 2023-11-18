import React, { useEffect, useState } from 'react'
import { BiSolidDownArrow, BiSolidUpArrow, BiSolidPlusCircle, BiSolidMinusCircle } from 'react-icons/bi'
import BuySell from './BuySell'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeletedTeamsInfo } from '../store/teamSlice';
import LoadingAnimation from './LoadingAnimation';

const PlayerProfile = () => {
  const { playerData, status } = useSelector((state) => state.player);
  const [modalData, setModalData] = useState(null);
  const handleClick = (data) => {
    // Set the data for a Buy operation
    console.log(data)
    setModalData(data);
    window.my_modal_2.showModal();
  };

  if (status === 'loading') {
    return <LoadingAnimation />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSeletedTeamsInfo(playerData?.player?.teamId))
  }, [playerData])


  const { selectedTeam, selectedTeamStatus } = useSelector((state) => state.team)

  return (
    <div className='p-5 lg:flex bg-neutral lg:items-center mb-6 '>
      {<div className='flex items-center justify-between mb-6 '>
        <img className="w-[100px] h-[100px] lg:w-[160px] lg:h-[180px]" src={playerData?.player?.imageUrl
          ? `https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci${playerData?.player?.imageUrl}`
          //  '/assets/images/profile/profile.png'
          : '/assets/images/profile/profile.png'}
          alt={playerData?.player?.name} />
        <div className='text-start'>
          <h1 className='font-bold lg:text-xl mx-5 px-5 text-white'>{playerData?.player?.name}</h1>
          {selectedTeamStatus === 'loading' ? (<LoadingAnimation />) : (<h1 className='font-bold lg:text-xl mx-5 px-5 text-yellow-400'>{selectedTeam?.team?.longName}</h1>)}
        </div>
      </div >}
      <div className="divider"></div>
      <div className='lg:flex gap-2 justify-evenly items-center '>
        <div className="lg:divider lg:divider-horizontal "></div>
        {/* <div className='whitespace-nowrap'>
          <h1><span className='font-bold lg:text-xl text-white'>₹0.00</span> <span className='break-words whitespace-nowrap'>(0 Shares)</span></h1>
          <h1 className='lg:text-lg text-info break-words whitespace-nowrap'>Total value</h1>
          </div> 
        <div className="divider lg:divider-horizontal "></div>
        */}
        <div>
          <h1><span className='font-bold lg:text-xl text-white'>₹{parseFloat(playerData?.player?.playerPriceData?.price).toFixed(2)}</span></h1>
          <h1 className='lg:text-lg text-gray-400 font-semibold break-words whitespace-nowrap'>Current Price</h1>
        </div>
        <div className="divider lg:divider-horizontal "></div>
        <div>
          <h1><span className='font-bold lg:text-xl text-white'>Points {parseFloat(playerData?.player?.playerPriceData?.avg_points).toFixed(2)}</span></h1>
          <h1 className='lg:text-lg text-gray-400 font-semibold break-words whitespace-nowrap'>Current Points</h1>
        </div>
        <div className="divider lg:divider-horizontal "></div>

        <div className='flex  mx-auto w-full justify-between  items-center flex-wrap'>
          <div>
            <h1>
              <span className={`font-bold lg:text-xl flex text-${Number(playerData?.player?.playerPriceData?.change_price) >= 0 ? 'green-500' : 'red-500'}`}>
                ₹{Number(playerData?.player?.playerPriceData?.change_price)}({playerData?.player?.playerPriceData?.change_percent}%)
                {Number(playerData?.player?.playerPriceData?.change_price) >= 0 ? (
                  <BiSolidUpArrow className='m-1' />
                ) : (
                  <BiSolidDownArrow className='m-1' />
                )}
              </span>
            </h1>

            <h1 className='lg:text-lg text-gray-400 font-semibold break-words whitespace-nowrap'>Last Match Change</h1>
          </div>


          <div className="divider lg:divider-horizontal "></div>

          <div className='flex text-center gap-5 text-lg items-center py-5 flex-wrap'>
            <button className='outline rounded-full md:w-[100px] btn btn-outline hover:bg-green-500 text-white hover:text-white ' onClick={() => handleClick("Buy")}>Buy</button>
            <button className='outline rounded-full md:w-[100px] btn btn-outline hover:bg-red-500 text-white hover:text-white ' onClick={() => handleClick("Sell")}>Sell</button>
          </div>
        </div>

      </div>

      <dialog id="my_modal_2" className="modal">
        {/* <form method="dialog" className="modal-box p-0 "> */}
        <div className=" modal-box  p-0 relative max-w-lg  max-h-lg">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div className=" text-center">
              <BuySell data={modalData} />
            </div>
          </div>
        </div>
        {/* </form> */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div >
  )



}

export default PlayerProfile