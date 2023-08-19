import React from 'react'
import PlayerPriceCard from './PlayerPriceCard'


const Middlesidebar = () => {
  return (
    <div className='p-3 flex flex-col align-middle items-center '>
    <h1 className='text-white text-sm border-b-2 font-bold p-2 text-center w-full mb-2'>Trending Players</h1>
    <div className='flex items-center font-bold justify-evenly w-full'>
        {/* <h1 className='text-sm  hover:bg-red-500 hover:text-white border rounded-lg w-max p-2 m-2 items-center text-center '>Popular Players</h1> */}
        <h1 className='text-sm  hover:bg-red-500 hover:text-white border rounded-lg w-max p-2 m-2 items-center text-center '>New Players</h1>
        <h1 className='text-sm  hover:bg-red-500 hover:text-white border rounded-lg w-max p-2 m-2 items-center text-center '>Favourite Players</h1>
    </div>

    {/* Parent with search bar and player table */}

    <div className=' max-h-[xl] ' > {/* Set a fixed height here */}
        {/* Player Search Bar */}
        <div className="form-control w-full">
            <div className="input-group bg-base-300 p-6 rounded-md my-2 shadow-lg shadow-base-950">
                <input type="text" placeholder="Search Players" className="input input-bordered w-full" />
                <button className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </div>
        <div className='divider'></div>
        {/* Player Cards */}
        <div className='h-[720px] overflow-auto'>
            <PlayerPriceCard />
            <PlayerPriceCard />
            <PlayerPriceCard />
            <PlayerPriceCard />
            <PlayerPriceCard />
            <PlayerPriceCard />
            <PlayerPriceCard />
            <PlayerPriceCard />

            {/* Add more PlayerPriceCard components as needed */}
        </div>
    </div>
    </div>
  )
}

export default Middlesidebar
