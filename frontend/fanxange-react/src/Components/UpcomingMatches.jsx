import React from 'react'

const UpcomingMatches = ({match}) => {
    
    return (
        <div className='card shadow-lg hover:opacity-70 p-10 bg-base-200 mb-3'>
            <p className='font-semibold mb-2 text-xs border-b whitespace-nowrap'>{match.title} . {match.groundName}</p>
            <div className='flex text-center justify-between align-middle'>
                <div>
                    <img className='rounded-full w-[40px] h-[35px] mt-1' src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match.teams[0]?.imageUrl}`} width="40" height="35" alt="Team 1" />
                    <span className='text-bold text-white whitespace-nowrap'>{match.teams[0]?.abbreviation}</span>
                </div>
                <span className='text-bold text-white m-5'>
                    vs
                </span>
                <div>
                    <img className='rounded-full w-[40px] h-[35px] mt-1' src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match.teams[1]?.imageUrl}`} width="40" height="35" alt="Team 2" />
                    <span className='text-bold text-white whitespace-nowrap'>{match.teams[1]?.abbreviation}</span>
                </div>
            </div>
        </div>
    )
}

export default UpcomingMatches      