import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Charts from '../Components/Charts'
import { BiSolidUpArrow } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchorder } from '../app/front1/store/orderSlice'
import './index.css'
import Link from 'next/link'

const MyPortfolio = () => {
  const { orders, status } = useSelector((state) => state.order)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchorder())
  }, [])





  if (status === 'loading') {
    return <div>
      Loading ...
    </div>
  }

  return (
    <div>
      <Navbar />
      <div className='flex justify-between overflow-x-auto overflow-y-hidden'>
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

      <div className="overflow-x-auto px-2  bg-neutral-focus">
        <table className="table table-xs table-pin-rows	">
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
              <th>
                Type
              </th>
              <th>
                Status
              </th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order) => (
                /* row 1 */
                <tr key={order.id} >
                  <td>
                    <Link to={`/player/${order.order.playerId}`}>
                      <div className='cursor-pointer flex flex-col gap-2 items-center lg:flex-row text-center'>
                        <img
                          className='bg-primary rounded-full w-[80px] h-[80px] border-red-700 border-4'
                          src={order.playerInfo.imageUrl
                            ? `https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci${order.playerInfo?.imageUrl}`
                            : 'https://pixner.net/spovest/dark/assets/images/player_search/avatar_1.png'}
                          alt='Player Avatar'
                        />
                        <div className='flex flex-col items-center align-middle'>
                          <h1 className='text-white font-semibold text-sm'>{order.playerInfo?.name}</h1>

                        </div>
                      </div>
                    </Link>
                  </td>
                  <td>
                    <h1 className='text-sm font-semibold text-green-400 flex items-center gap-1'>+4.1<BiSolidUpArrow /></h1>
                  </td>
                  <td>
                    <h1 className='text-sm font-semibold text-white flex items-center gap-1'>{Number(order?.playerPerformanceMatches?.price).toFixed(2)}</h1>

                  </td>
                  <td>
                    <h1 className='text-sm font-semibold text-white flex items-center gap-1'>{Number(order?.order?.price).toFixed(2)}</h1>

                  </td>
                  <td>
                    <h1 className='text-sm font-semibold text-white flex items-center gap-1'>{order?.order?.qty}</h1>

                  </td>
                  <td>
                    {(order.order.orderType === 'Buy'
                      ? (Number(order.playerPerformanceMatches.price).toFixed(2) - Number(order.order.price).toFixed(2)).toFixed(2)
                      : (Number(order.order.price).toFixed(2) - Number(order.playerPerformanceMatches.price).toFixed(2)).toFixed(2)
                    )}

                  </td>
                  <td>
                    <h1 className={`text-sm font-semibold flex items-center gap-1 ${order.order.orderType === 'Buy' ? 'text-green-400' : 'text-red-400'
                      }`}>
                      {order.order.orderType}
                    </h1>

                  </td>
                  <td>
                    <h1 className='text-sm font-semibold text-white flex items-center gap-1'>{order.order.status}</h1>
                  </td>
                  <td>
                    <h1 className='text-sm font-semibold text-purple-500 flex items-center gap-1 cursor-pointer'>Close</h1>
                  </td>
                </tr>
              ))
            }







          </tbody>


        </table>
      </div >



    </div >
  )
}

export default MyPortfolio