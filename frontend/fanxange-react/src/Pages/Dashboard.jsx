import React from 'react'
import Charts from '../Components/Charts'
import Navbar from '../Components/Navbar'
import Tabbar from '../Components/Tabbar'
import PlayerStats from '../Components/PlayerStats'
import Order from '../Components/Order'
import BuySell from '../Components/BuySell'
import TradeHistory from '../Components/TradeHistory'
import OrderBook from '../Components/OrderBook'

const Dashboard = () => {
  return (
    <div>

      <div >
        {/* Navbar */}
        <Navbar />
      </div>

      <div className='flex m-6'>

        {/* Player stats */}
        <div className='w-[20%]'>
        <PlayerStats />  
        </div>

        <div className='m-5 w-[60%] flex flex-col h-[800px]'>
          <Charts />
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 lg:w-full xl:w-1/2'>
              <OrderBook />
            </div>
            <div className='w-full md:w-1/2 lg:w-full xl:w-1/2'>
              <TradeHistory />
            </div>
          </div>

        </div>

        <div className='flex flex-col w-[20%]'>
          {/* Orders */}
          <Order />

          {/* Buy/Sell */}
          <BuySell />
        </div>

        {/* Charts */}

      </div>

      {/* Bottom Tabbar */}

    </div>
  )
}

export default Dashboard