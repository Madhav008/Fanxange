import React from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import Charts from './Charts';


const PlayerPriceCard = () => {
    return (
        <div className='flex bg-base-200 rounded-lg p-3 align-middle items-center justify-evenly w-full mb-2 '>
            <div className='flex gap-2 p-5 items-center'>
                <img className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4' src="https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png" alt="" />
                <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm '>Player Name</h1>
                    {/* <h2 className='text-yellow-200 '>Team Name</h2> */}
                </div>
            </div>


            <div className='flex p-5 ml-5'>
                <div className='flex flex-col align-middle items-center'>
                    <h1 className='text-sm font-semibold '>$4.2</h1>
                    <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
                    <h1 className='text-sm font-semibold  text-red-400 flex items-center gap-1'>-5.1<BiSolidDownArrow /></h1>

                </div>
            </div>

                <div className='hidden lg:flex'>
                <Charts  height="120px" width="120px" />
                </div>
            <div>
                <button className='btn btn-outline m-4  btn-success '>Buy</button>
                <button className='btn btn-outline m-4  btn-error'>Sell</button>
            </div>
        </div>
    )
}

export default PlayerPriceCard
