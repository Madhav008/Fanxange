import React from 'react'
import { useSelector } from 'react-redux';

const RecentMatches = () => {
  const { playerRecentMatchesStatus, playerRecentMatches } = useSelector((state) => state.player);


  if (playerRecentMatchesStatus == 'loading') {
    return <div>
      Loading ...
    </div>
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 m-5 hidden md:block">
              <span className="sr-only">Images</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Matches
            </th>
            <th scope="col" className="px-6 py-3">
              Total Points
            </th>
            <th scope="col" className="px-6 py-3">
              Bating Points
            </th>
            <th scope="col" className="px-6 py-3">
              Bowling Points
            </th>
            <th scope="col" className="px-6 py-3">
              Fielding Points
            </th>

          </tr>
        </thead>
        <tbody>

          {playerRecentMatches.map((matches) => {
            return <tr key={matches.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="m-5 hidden md:block w-20">
                <div className='flex items-center justify-between '>

                  <img width="40px" src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/${matches.teams[0]?.imageUrl}`} alt={matches.teams[0]?.abbreviation} />
                  <div className='text-white font-bold px-2'>VS</div>
                  <img width="40px" src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/${matches.teams[1]?.imageUrl}`} alt={matches.teams[1]?.abbreviation} />
                </div>
              </td>
              <td className=" p-4 font-semibold text-gray-900 dark:text-white text-sm w-30px  ">
                {matches.name}
              </td>
              <td className="px-6 py-4">
                {parseFloat(matches.total_points).toFixed(2)}
              </td>

              <td className="px-6 py-4">
                {parseFloat(matches.batStats).toFixed(2)}
              </td>

              <td className="px-6 py-4">
                {parseFloat(matches.bowlStats).toFixed(2)}
              </td>
              <td className="px-6 py-4">
                {parseFloat(matches.fieldStats).toFixed(2)}
              </td>
            </tr>
          })}







        </tbody>
      </table>
    </div>
  )
}

export default RecentMatches