import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Charts from '../Components/Charts'
import OrderBook from '../Components/OrderBook'
import TradeHistory from '../Components/TradeHistory'
import Order from '../Components/Order'
import BuySell from '../Components/BuySell'
import Matches from '../Components/Macthes.json'
const Wazirx = () => {


  /*   function getSeries() {
      const res = Matches
  
      try {
        // console.log(res);
        // if(res.matches.status!=="RESULT"){
        //     console.log(res.matches)
        //     return res.matches;
        // }
        let matchdata = [];
        let uniqueseries = [];
        const currentDate = new Date().toISOString().split("T")[0]; // Get current date in ISO format
  
        console.log(currentDate)
        res.matches.map((series) => {
  
          if (series.endDate.includes(currentDate)) {
            console.log(series.endDate)
            // console.log(series)
            matchdata.push(series);
          }
        });
  
  
        let seriesmap = new Map();
        matchdata.map((series) => {
          const alternateName = series.series.alternateName;
          if (!seriesmap.has(alternateName)) {
            seriesmap.set(alternateName, []);
            uniqueseries.push(series.series.alternateName)
          }
          seriesmap.get(alternateName).push(series);
  
  
        })
  
        console.log(seriesmap);
        setSeies(uniqueseries);
        return seriesmap;
      } catch (error) {
        console.log(error.message);
      }
    } */

  async function getSeries() {
    try {
      const response = await fetch('http://localhost:3132/series/recent', {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      }); // Replace <series API endpoint> with the actual endpoint URL
      if (!response.ok) {
        throw new Error('Failed to fetch series');
      }
      const series = await response.json();
      setSeies(series);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }


  async function getMatches() {
    try {
      const response = await fetch('http://localhost:3132/match/recent', {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      }); // Replace <series API endpoint> with the actual endpoint URL
      if (!response.ok) {
        throw new Error('Failed to fetch matches');
      }
      const matches = await response.json();
      setMatches(matches);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }



  useEffect(() => {
    getMatches();
    getSeries();
  }, [])

  const [Seies, setSeies] = useState()

  const [matches, setMatches] = useState()

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
          <p className='text-white text-xs cursor-pointer hover:opacity-50 font-bold'>All Matches({matches?.result.length})</p>

          {
            Seies?.map((matches) => {
              return <p className='text-white text-xs cursor-pointer hover:opacity-50'>{matches.name}({matches.count})</p>
            })
          }
        </div>
        {/* Matches */}
        <div className='overflow-x-scroll flex space-x-2 p-2 cursor-pointer'>
          {
            matches?.result.map((match) => {
              return <div key={match.mactchId} className='card shadow-lg w-max mt-4 bg-slate-900 p-5 hover:opacity-70'>
                <p className='font-semibold mb-2 text-xs border-b whitespace-nowrap'>{match.title} . {match?.groundName}</p>
                <div className='flex text-center justify-between align-middle'>
                  <div>
                    <img className='rounded-full w-[40px] h-[35px] mt-1' src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match.teams[0].imageUrl}`} width="40" height="35" alt="" />
                    <span className='text-bold text-white whitespace-nowrap'>{match.teams[0].abbreviation}</span>
                  </div>
                  <span className='text-bold text-white m-5'>
                    vs
                  </span>
                  <div>
                    <img className='rounded-full w-[40px] h-[35px] mt-1' src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match.teams[1].imageUrl}`} width="40" height="35" alt="" />
                    <span className='text-bold text-white whitespace-nowrap'>{match.teams[1].abbreviation}</span>
                  </div>
                </div>
              </div>
            })
          }

          {/*  <div className='card shadow-lg w-max mt-4 bg-slate-900 p-5 '>
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
          </div> */}
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
            <OrderBook />
            <TradeHistory />
          </div>
        </div>

        {/* Orders Section */}
        <div className='w-[100%] xl:w-[30%]'>
          <Order />
          <BuySell />
        </div>
      </div>
    </div>

  )
}

export default Wazirx