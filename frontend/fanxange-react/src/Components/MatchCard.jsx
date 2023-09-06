import React from 'react'
import { fetchMatchData } from '../store/matchSlice';
import { useDispatch } from 'react-redux';
import { fetchTeams } from '../store/teamSlice';

const MatchCard = ({ match }) => {
    const dispatch = useDispatch();
    const handleQuery = () => {
        dispatch(fetchMatchData({
            matchId: match.matchId,
            seriesId: match.seriesId,
        }))

        dispatch(fetchTeams({
            seriesId: match.seriesId,
            matchId: match.matchId,
        }))
    }

    return (
        <div>
            <div onClick={handleQuery} key={match?.mactchId} className='bg-neutral card shadow-lg w-[350px] mt-4  p-5 hover:opacity-70 '>
                <div className='flex gap-2 items-center '>
                    <div className="flex items-center align-middle animate-blink mb-1 ml-1">

                        {/* <span className="ml-1 font-bold text-red-500">Live</span> */}
                    </div>
                    <p className='font-semibold mb-2 text-xs border-b whitespace-nowrap'>{match?.title} . {match?.groundName}</p>

                </div>
                <div className='flex flex-col text-center justify-between align-middle '>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img className='rounded-full w-[40px] h-[35px] mt-1' src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match?.teams[0]?.team.imageUrl}`} width="40" height="35" alt="" />
                            <span className='text-bold text-white whitespace-nowrap'>{match?.teams[0]?.team.abbreviation}</span>
                            {match?.teams[0]?.isLive && (
                                <div className="flex bg-red-500 rounded-full w-1 h-1 text-red-600 items-center">
                                    <span></span>
                                </div>
                            )}
                        </div>




                        {match?.teams[0]?.isLive ? (
                            <div className='font-bold text-white flex '>
                                <p className='font-semibold text-gray-500 mr-2'>({match.teams[0].scoreInfo})</p>  <span>{match.teams[0].score}</span>
                            </div>
                        ) : (
                            <div className='font-bold text-white flex '>
                                <p className='font-semibold text-gray-500 mr-2'>{match.teams[0].scoreInfo}</p>  <span>{match.teams[0].score}</span>
                            </div>
                        )}

                    </div>


                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>

                            <img className='rounded-full w-[40px] h-[35px] mt-1' src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match?.teams[1]?.team.imageUrl}`} width="40" height="35" alt="" />
                            <span className='text-bold text-white whitespace-nowrap'>{match?.teams[1]?.team.abbreviation}</span>


                            {/* Conditionally render "Live" if the first team is live */}
                            {match?.teams[1]?.isLive && (
                                <div className="flex bg-red-500 rounded-full w-1 h-1 text-red-600 items-center">
                                    <span></span>
                                </div>
                            )}
                        </div>

                        {match?.teams[1]?.isLive ? (
                            <div className='font-bold text-white flex '>
                                <p className='font-semibold text-gray-500 mr-2'>({match.teams[1].scoreInfo})</p>  <span>{match.teams[1].score}</span>
                            </div>
                        ) : (
                            <div className='font-bold text-white flex '>
                                <p className='font-semibold text-gray-500 mr-2'>{match.teams[1].scoreInfo}</p>  <span>{match.teams[1].score}</span>
                            </div>
                        )}

                    </div>
                </div>
                <p className='font-semibold mb-2 text-xs  whitespace-nowrap mt-5'>{match.statusText}</p>




            </div>
        </div>
    )
}

export default MatchCard