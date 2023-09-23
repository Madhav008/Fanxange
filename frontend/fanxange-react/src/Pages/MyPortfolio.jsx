import React from 'react'
import Navbar from '../Components/Navbar'
import Charts from '../Components/Charts'
import { BiSolidUpArrow } from 'react-icons/bi'
const MyPortfolio = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-evenly '>
        <div className='bg-[#3d447a] m-4 w-[400px] h-[200px] rounded-xl'>
          <div className='m-5 '>
            <h1 className='text-lg font-bold text-white py-2'>PORTFOLIO VALUE</h1>
            <h1 className='text-2xl font-bold text-yellow-300'>$1500</h1>

            {/* Specify the dimensions for the chart */}
            <Charts height="70%" width="100%" color="#ffc107" />
          </div>
        </div>
        <div className='bg-[#3d447a] m-4 w-[400px] h-[200px] rounded-xl'>
          <div className='m-5'>
            <h1 className='text-lg font-bold text-white py-2'>ACCOUNT BALANCE</h1>
            <h1 className='text-2xl font-bold text-yellow-300 '>$1500</h1>
            <Charts height="70%" width="100%" color="#0dcaf0" />

          </div></div>
        <div className='bg-[#3d447a] m-4 w-[400px] h-[200px] rounded-xl'>
          <div className='m-5'>
            <h1 className='text-lg font-bold text-white py-2'>EARNINGS</h1>
            <h1 className='text-2xl font-bold text-yellow-300 '>$1500</h1>
            <Charts height="70%" width="100%" color="#6f42c1" />
          </div></div>
      </div>

      <div className="overflow-x-auto p-5  bg-neutral-focus">
        <table className="table table-xl table-pin-cols	">
          {/* head */}
          <thead className='text-white text-xl'>
            <tr>
              <th >
                Players
              </th>
              <th >
                Change
              </th>
              <th >
                Share Price
              </th>
              <th >
                Bought At
              </th>
              <th >
                My Share
              </th>
              <th >
                Earning
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>


            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>

            {/* row 1 */}
            <tr>

              <td>
                <div className='flex gap-2 items-center '>
                  <img
                    className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                    src='https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'
                  />
                  <div className='flex flex-col items-center align-middle'>
                    <h1 className='text-white font-semibold text-sm'>player.name</h1>

                    <h2 className='text-yellow-200'>player.teamName</h2>

                  </div>
                </div>

              </td>
              <td>
                <h1 className='text-sm font-semibold  text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
              </td>
              <td>
                $34.23
              </td>
              <td>
                $34.23
              </td>
              <td>
                34
              </td>
              <td>
                $3400
              </td>
            </tr>






          </tbody>


        </table>
      </div>



    </div>
  )
}

export default MyPortfolio