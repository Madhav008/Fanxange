import React from 'react'

const MatchCard = ({ match }) => {
    return (
        <div>
            <div key={match?.mactchId} className='bg-neutral card shadow-lg w-max mt-4  p-5 hover:opacity-70'>
                <div className='flex gap-2 items-center '>
                    <div class="flex items-center align-middle animate-blink mb-1 ml-1">
                        <div class="flex bg-red-500 rounded-full w-1 h-1 text-red-600 items-center">
                            <span></span>
                        </div>
                        {/* <span class="ml-1 font-bold text-red-500">Live</span> */}
                    </div>
                    <p className='font-semibold mb-2 text-xs border-b whitespace-nowrap'>{match?.title} . {match?.groundName}</p>

                </div><div className='flex text-center justify-between align-middle'>
                    <div>
                        <img className='rounded-full w-[40px] h-[35px] mt-1' src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match?.teams[0]?.imageUrl}`} width="40" height="35" alt="" />
                        <span className='text-bold text-white whitespace-nowrap'>{match?.teams[0]?.abbreviation}</span>
                    </div>
                    <span className='text-bold text-white m-5 w-5'>
                        <img src="https://pixner.net/spovest/dark/assets/images/user/vs.png" alt="vs" />
                    </span>
                    <div>
                        <img className='rounded-full w-[40px] h-[35px] mt-1' src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match?.teams[1]?.imageUrl}`} width="40" height="35" alt="" />
                        <span className='text-bold text-white whitespace-nowrap'>{match?.teams[1]?.abbreviation}</span>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default MatchCard