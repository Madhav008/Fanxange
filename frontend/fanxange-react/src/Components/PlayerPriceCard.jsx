import React, { useEffect } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import Charts from './Charts';
import { Link } from 'react-router-dom';


const PlayerPriceCard = ({ player }) => {


    return (

        <div className='flex bg-base-200 rounded-lg p-3 align-middle items-center justify-evenly w-[100%] mb-2 '>
            <Link key={player.playerId} to={`/player/${player.playerId}`}>


                <div className='flex items-center '>

                    <td class="flex items-center">
                        <div class="flex flex-col items-center justify-center w-[70px] h-[70px] bg-purple-700 border-2 border-red-500 rounded-full relative">
                            <span class="flex items-end justify-center">
                                <img class='w-[55px] h-[60px] rounded-full border-none outline-none' src={player.imageUrl
                                    ? `https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci${player?.imageUrl}`
                                    : '/assets/images/player_search/avatar_1.png'}
                                    alt='Player Avatar' />
                            </span>

                        </div>

                        <div class="flex flex-col justify-center items-start ml-2">
                            <span className='font-semibold '>{player?.name}</span>
                            <p className='text-yellow-200'>teamName</p>
                        </div>
                    </td>


                    <td class="flex items-center  text-center justify-center relative" >
                        <div class="m-4 p-1">
                            <p className='font-bold text-md mb-4'><i class="fas fa-dollar-sign "></i> 3.91</p>
                            <p className='text-sm font-bold'>+8.12 <i class="fas fa-caret-up"></i></p>
                        </div>
                    </td>

                </div>
            </Link>

            <div className='hidden lg:flex'>
                <Charts height="120px" width="120px" />
            </div>
            <div className='flex gap-2'>
                <span class="hover:bg-info font-open-sans text-[16px] font-bold leading-[1.75] uppercase text-white bg-transparent px-4 py-1 flex-wrap border border-white border-opacity-30 rounded-[25px] transition-all duration-600">Buy</span>

                <span class="hover:bg-info font-open-sans text-[16px] font-bold leading-[1.75] uppercase text-white bg-transparent px-4 py-1 flex-wrap border border-white border-opacity-30 rounded-[25px] transition-all duration-600">Sell</span>

            </div>
        </div>
    )
}

export default PlayerPriceCard
