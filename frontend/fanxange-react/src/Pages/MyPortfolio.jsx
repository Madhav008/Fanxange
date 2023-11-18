import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Charts from '../Components/Charts'
import { BiSolidUpArrow } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchorder } from '../store/orderSlice'
import { Link } from 'react-router-dom'
import LoadingAnimation from '../Components/LoadingAnimation'
import PlayerTable from '../Components/PlayerTable'
const MyPortfolio = () => {
  const { orders, status } = useSelector((state) => state.order)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchorder())
  }, [])


  if (status === 'loading') {
    return <LoadingAnimation />
  }

  return (
    <div className='font-open-sans'>
      <Navbar portfolio={true} />
      <div className='flex flex-wrap justify-evenly overflow-x-auto overflow-y-hidden'>
        <div className='bg-accent m-4 w-[300px] h-[200px] rounded-xl'>
          <div className='m-5 '>
            <div class="flex items-center justify-between  font-bold  text-white">
              <p class="text-sm ">PORTFOLIO VALUE</p>
              <p class="flex items-center text-green-500">
                <i class="fas fa-plus mr-1"></i>
                09.84%
                <img className='ml-2' src="assets/images/user/arrow.png" alt="Arrow" />
              </p>
            </div>
            <h1 className='text-sm font-bold text-yellow-300'>$1500</h1>

            {/* Specify the dimensions for the chart */}
            <Charts height="70%" width="100%" color="#ffc107" />
          </div>
        </div>

        <div className='bg-accent m-4 w-[300px] h-[200px] rounded-xl'>
          <div className='m-5 '>
            <div class="flex items-center justify-between  font-bold  text-white">
              <p class="text-sm ">ACCOUNT BALANCE</p>
              <p class="flex items-center text-green-500">
                <i class="fas fa-plus mr-1"></i>
                09.84%
                <img className='ml-2' src="assets/images/user/arrow.png" alt="Arrow" />
              </p>
            </div>
            <h1 className='text-sm font-bold text-yellow-300'>$1500</h1>

            {/* Specify the dimensions for the chart */}
            <Charts height="70%" width="100%" color="#0dcaf0" />
          </div>
        </div>
        <div className='bg-accent m-4 w-[300px] h-[200px] rounded-xl'>
          <div className='m-5 '>
            <div class="flex items-center justify-between  font-bold  text-white">
              <p class="text-sm ">EARNINGS</p>
              <p class="flex items-center text-green-500">
                <i class="fas fa-plus mr-1"></i>
                09.84%
                <img className='ml-2' src="assets/images/user/arrow.png" alt="Arrow" />
              </p>
            </div>
            <h1 className='text-sm font-bold text-yellow-300'>$1500</h1>

            {/* Specify the dimensions for the chart */}
            <Charts height="70%" width="100%" color="#6f42c1" />
          </div>
        </div>

      </div>


      <div class="font-open-sans text-28 font-bold leading-1.357 text-white mt-50 mb-2">
        <h5 className='font-bold text-xl md:text-2xl lg:text-3xl m-4'>My Players</h5>
        <div class="overflow-x-auto bg-accent-focus">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Players</th>
                <th scope="col">Earning</th>
                <th scope="col">Share Price</th>
                <th scope="col">Bought At</th>
                <th scope="col">My Share</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((order) => (
                  /* row 1 */
                  <PlayerTable order={order} />
                ))
              }
            </tbody>
          </table>
        </div>

      </div>
    </div >
  )
}

export default MyPortfolio