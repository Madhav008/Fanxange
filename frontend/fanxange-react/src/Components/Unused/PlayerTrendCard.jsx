import React from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'


const PlayerTrendCard = ({ player }) => {
    return (
        <div className='flex bg-neutral rounded-lg p-3 align-middle items-center justify-evenly w-full mb-2'>
            <div className='flex gap-2 p-5 items-center'>
                <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src={player.playerData.imageUrl
                        ? `https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci${player.playerData?.imageUrl}`
                        : 'https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'}
                    alt={player.name}
                />
                <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm '>{player.playerData.name}</h1>
                    {/* <h2 className='text-yellow-200 '>Team Name</h2> */}
                </div>
            </div>


            <div>
                <button className='btn btn-outline m-4  btn-success '>Trade</button>
            </div>
        </div>
    )
}

export default PlayerTrendCard
