import React from 'react'

const Card = ({ match }) => {
    console.log(match)
    return (
        <div>{/* Card Design */}
            <div className='bg-base-200 rounded-md'>
                {/* Upper Part */}
                <div className='mt-3 h-full'>
                    <div className='flex justify-between px-5 py-5 '>
                        <div className='flex flex-col items-center '>
                            <img src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match?.teams[0]?.imageUrl}`} height="50px" width="50px" alt="team1" />
                            <span className='text-bold text-white whitespace-nowrap'>{match.teams[0]?.abbreviation}</span>
                        </div>
                        {/* Image for vs */}
                        <div className='my-auto items-center '>
                            <img src="https://pixner.net/spovest/dark/assets/images/user/vs.png" alt="vs" />
                        </div>

                        <div className='flex flex-col items-center '>
                            <img src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match?.teams[1]?.imageUrl}`} height="50px" width="50px" alt="team2" />
                            <span className='text-bold text-white whitespace-nowrap'>{match.teams[1]?.abbreviation}</span>
                        </div>
                    </div>
                </div>

                {/* Bootom Part */}
                <div className='mt-5 flex bg-base-300 bg-opacity-50 justify-between p-[60px] rounded-md'>
                    <div>
                        <span>April 14,2023</span>
                    </div>

                    <div>
                        <span>2:00 PM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card