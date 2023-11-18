import React from 'react'
import { useSelector } from 'react-redux';
import LoadingAnimation from './LoadingAnimation';

const RecentMatches = () => {
  const { playerRecentMatchesStatus, playerRecentMatches } = useSelector((state) => state.player);


  if (playerRecentMatchesStatus == 'loading') {
    return <div>
      <LoadingAnimation />
    </div>
  }

  return (
    <div>
      <h3 className='font-bold text-xl md:text-2xl lg:text-3xl m-4 '>Game History</h3>
      <div >
        <table class="table ">
          <thead className='font-bold text-white bg-accent-focus h-4xl ' style={{ padding: "40px", margin: "80px", height: "70px" }}>
            <tr>
              <th className='px-6 py-3 m-5 hidden md:block'>Opponent</th>
              <th>Matches</th>
              <th>Total Points</th>
              <th>Bating Points</th>
              <th>Bowling Points</th>
              <th>Fielding Points</th>

            </tr>
          </thead>
          <tbody className='bg-secondary'>
            {playerRecentMatches.map((matches) => {
              return <tr key={matches.name}>
                <td class="teams hidden md:block">
                  <div className='flex items-center justify-between '>

                    <img width="40px" src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/${matches.teams[0]?.imageUrl}`} alt={matches.teams[0]?.abbreviation} />
                    <div className='text-white font-bold px-2'>VS</div>
                    <img width="40px" src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/${matches.teams[1]?.imageUrl}`} alt={matches.teams[1]?.abbreviation} />
                  </div>
                </td>
                <td className='font-semibold text-gray-900 dark:text-white text-sm w-30px  '> {matches.name}</td>
                <td>{parseFloat(matches.total_points).toFixed(2)}</td>
                <td>                  {parseFloat(matches.batStats).toFixed(2)}
                </td>
                <td> {parseFloat(matches.bowlStats).toFixed(2)}</td>
                <td>{parseFloat(matches.fieldStats).toFixed(2)}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
      <div class="rounded-full border border-base-300 px-5 py-2 mx-auto mt-5 text-center w-[150px] hover:bg-neutral-focus">
        <span >View More</span>
      </div>
    </div>
  )
}

export default RecentMatches