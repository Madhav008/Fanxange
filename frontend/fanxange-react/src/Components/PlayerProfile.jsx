import React from 'react'

const PlayerProfile = () => {
  return (
    <div className='p-5 lg:flex bg-neutral lg:items-center mb-6 '>
      <div className='flex items-center justify-between mb-6'>
        <img className="w-[100px] h-[100px] lg:w-max lg:h-max" src="https://pixner.net/spovest/dark/assets/images/profile/profile.png" alt="" />
        <div className='text-end'>
          <h1 className='font-bold lg:text-xl mx-5 px-5 text-white'>David Miller</h1>
          <h1 className='font-bold lg:text-xl mx-5 px-5 text-yellow-400'>Golden State Warriors</h1>
        </div>
      </div>
      <div className="divider"></div>
      <div className='lg:flex gap-2 justify-evenly '>
        <div className="lg:divider lg:divider-horizontal "></div>
        <div>
          <h1><span className='font-bold lg:text-2xl text-white'>$0.00</span> <span className='break-words whitespace-nowrap'>(0 Shares)</span></h1>
          <h1 className='lg:text-lg text-info break-words whitespace-nowrap'>Total value</h1>
        </div>
        <div className="divider lg:divider-horizontal "></div>
        <div>
          <h1><span className='font-bold lg:text-2xl text-white'>$1.06</span></h1>
          <h1 className='lg:text-lg text-info break-words whitespace-nowrap'>Current Price</h1>
        </div>
        <div className="divider lg:divider-horizontal "></div>
        <div>
          <h1><span className='font-bold lg:text-2xl text-white'>Points 1.30</span></h1>
          <h1 className='lg:text-lg text-info break-words whitespace-nowrap'>Current Points</h1>
        </div>
        <div className="divider divider-horizontal"></div>
 
      </div>
    </div>
  )
}

export default PlayerProfile