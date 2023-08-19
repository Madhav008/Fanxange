import React from 'react'

const TournamentBar = ({ matches, Seies }) => {
    return (
        <div>
            <div className='flex space-x-3 flex-wrap px-5'>
                <p className='text-white text-xs cursor-pointer hover:opacity-50 font-bold'>All Matches({matches?.result.length})</p>

                {
                    Seies?.map((matches) => {
                        return <p className='text-white text-xs cursor-pointer hover:opacity-50'>{matches.name}({matches.count})</p>
                    })
                }
            </div>

        </div>
    )
}

export default TournamentBar