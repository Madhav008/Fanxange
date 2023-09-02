import React from 'react'

const TournamentBar = ({ matches, Series }) => {
    return (
        <div  className='w-full overflow-auto'>
            <div className='flex space-x-3 flex-wrap px-5  w-max'>
                <p className='text-white text-xs cursor-pointer hover:opacity-50 font-bold'>All Matches({matches?.result.length})</p>

                {
                    Series?.map((matches) => {
                        return <p key={matches.seriesId} className='text-white text-xs cursor-pointer hover:opacity-50'>{matches.name}({matches.count})</p>
                    })
                }
            </div>

        </div>
    )
}

export default TournamentBar