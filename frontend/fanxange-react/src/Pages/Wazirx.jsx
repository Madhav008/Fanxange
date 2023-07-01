import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Charts from '../Components/Charts'
import OrderBook from '../Components/OrderBook'
import TradeHistory from '../Components/TradeHistory'
import Order from '../Components/Order'
import BuySell from '../Components/BuySell'
const Wazirx = () => {
  return (
    <div className='min-h-screen mx-2'>
      {/* Navbar */}
      <div className='flex p-2 w-xl '>
        <div className=' flex text-xl font-bold hover:bg-gray-900 rounded-full p-3'>
          <img className="mr-2" src="./src/assets/react.svg" alt="" srcset="" />
          <h1>Fan</h1><span className='text-accent'>Xange</span>
        </div>
        <h1 className='ml-auto font-bold sm:text-lg hover:bg-gray-900 rounded-full p-3 max-w-2 min-h-2'>Invite and Earn</h1>
      </div>
      {/* Series */}
      <div>
        {/* Tournaments */}
        <div className='flex space-x-3 flex-wrap px-5'>
          <p className='text-white font-bold text-xs'>Matches(18)</p>
          <p className='text-white text-xs'>Matches(5)</p>
          <p className='text-white text-xs'>Matches(5)</p>
          <p className='text-white text-xs'>Matches(5)</p>
          <p className='text-white text-xs'>Matches(5)</p>
          <p className='text-white text-xs'>Matches(5)</p>
          <p className='text-white text-xs'>Matches(5)</p>
          <p className='text-white text-xs'>Matches(5)</p>
          <p className='text-white text-xs'>Matches(5)</p>
        </div>
        {/* Matches */}
        <div className='overflow-x-scroll flex space-x-2 p-2'>
          <div className='card shadow-lg w-max mt-4 bg-slate-900 p-5 '>
            <div className='flex text-center justify-center align-middle'>
              <div>
                <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png" width="40" height="35" alt="" />
                <span className='text-bold text-white'>Team1</span>
              </div>
              <span className='text-bold text-white m-5'>
                vs
              </span>
              <div>
                <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png" width="40" height="35" alt="" />
                <span className='text-bold text-white'>Team2</span>
              </div>
            </div>
          </div>

          <div className='card shadow-lg w-max mt-4 bg-slate-900 p-5 '>
            <div className='flex text-center justify-center align-middle'>
              <div>
                <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png" width="40" height="35" alt="" />
                <span className='text-bold text-white'>Team1</span>
              </div>
              <span className='text-bold text-white m-5'>
                vs
              </span>
              <div>
                <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png" width="40" height="35" alt="" />
                <span className='text-bold text-white'>Team2</span>
              </div>
            </div>
          </div>

          <div className='card shadow-lg w-max mt-4 bg-slate-900 p-5 '>
            <div className='flex items-center justify-center align-middle'>
              <div>
                <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png" width="40" height="35" alt="" />
                <span className='text-bold text-white'>Team1</span>
              </div>
              <span className='text-bold text-white m-5'>
                vs
              </span>
              <div>
                <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png" width="40" height="35" alt="" />
                <span className='text-bold text-white'>Team2</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='flex-wrap md:flex'>

        {/* Sidebar */}
        <div className='mt-4 h-full flex flex-col mx-2 min-w-max w-[100%] xl:w-[15%]'>
          {/* Search Bar */}
          <div className='flex space-x-2 p-2 items-center rounded-full relative bg-gray-700'>
            <FaSearch />
            <input className='border-none bg-gray-700 focus:ring-0 focus:outline-none ' type="text" placeholder='Search Player' />
          </div>

          {/* Player Table */}
          <div>
            <table className="table">
              <div className='flex justify-between'>

                <th>Player</th>
                <th>Price</th>
              </div>

              <div className='h-[500px] overflow-scroll '>

                <div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div>

                <div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div><div className='flex justify-between'>
                  <td>TPottersville</td>
                  <td>1961</td>
                </div>
              </div>

            </table>
          </div>

        </div>
        {/* Main Section */}
        <div className='w-[100%] xl:w-[50%] mx-2'>
          <Charts />

          <div className='flex-wrap  sm:flex-nowrap flex my-5'>
            <OrderBook/>
            <TradeHistory/>
          </div>
        </div>

        {/* Orders Section */}
        <div className='w-[100%] xl:w-[30%]'>
          <Order/>
          <BuySell/>
        </div>
      </div>
    </div>

  )
}

export default Wazirx