import React, { useEffect } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import Charts from './Charts';
import { Link } from 'react-router-dom';


const PlayerPriceCard = ({ player }) => {


    return (
        <div className='flex bg-base-200 rounded-lg p-3 align-middle items-center justify-evenly w-[100%] mb-2 '>
            <Link key={player.playerId} to={`/player/${player.playerId}`}>
                <div className='flex items-center '>
                    <div className='flex gap-2 p-5 items-center '>
                        <img
                            className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                            src={player.imageUrl
                                ? `https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci${player.imageUrl}`
                                : 'https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'}
                            alt={player.name}
                        />
                        <div className='flex flex-col items-center align-middle'>
                            <h1 className='text-white font-semibold text-sm'>{player.name}</h1>
                            {player.teamName && (
                                <h2 className='text-yellow-200'>{player.teamName}</h2>
                            )}
                        </div>
                    </div>



                    <div className='flex p-5 ml-5 '>
                        <div className='flex justify-between align-middle items-center text-center'>
                            <h1 className='text-sm font-semibold pr-2'>$4.2</h1>
                            <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
                            {/* <h1 className='text-sm font-semibold  text-red-400 flex items-center gap-1'>-5.1<BiSolidDownArrow /></h1> */}

                        </div>
                    </div>

                    <div className='hidden lg:flex'>
                        <Charts height="120px" width="120px" />
                    </div>
                </div>
            </Link>

            <div>
                <button className='btn btn-outline m-4  btn-success '>Buy</button>
                <button className='btn btn-outline m-4  btn-error'>Sell</button>
            </div>
        </div>
    )
}

export default PlayerPriceCard
