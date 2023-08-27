
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import UpcomingMatches from '../Components/UpcomingMatches'
import TournamentBar from '../Components/TournamentBar'
import MatchCard from '../Components/MatchCard'
import LeftSideBar from '../Components/Leftsidebar'
import Middlesidebar from '../Components/Middlesidebar'


const Dashboard = () => {



  async function getMatches() {
    try {
      const response = await fetch('http://192.168.1.65:3132/match/recent', {
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


  async function getSeries() {
    try {
      const response = await fetch('http://192.168.1.65:3132/series/recent', {
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


  useEffect(() => {
    getMatches();
    getSeries();

  }, [])

  const [match, setMatches] = useState()
  const [Seies, setSeies] = useState()


  return (
    <div >

      <div>
        <Navbar />
        {/* Series */}
        <div>
          {/* Tournaments */}
          <TournamentBar matches={match} Seies={Seies} />

          {/* Matches */}
          <div className='overflow-x-scroll flex space-x-2 p-2 cursor-pointer '>
            {match?.result.map(match => (
              <MatchCard match={match} />
            ))}
          </div>

        </div>
        <div className='flex   flex-col-reverse lg:flex-row lg:justify-between '>


          <LeftSideBar />
          <Middlesidebar />



          <div className=' max-w-sm shadow-2xl shadow-slate-800 mt-5 -order-1 lg:order-1 '>
            <div className='font-bold text-white w-full my-1 border-b-2 text-center'>
              Upcomming Matches
            </div>
            <div className='overflow-y-auto h-[930px]'>
              {match?.result.map((m, index) => (
                <UpcomingMatches key={index} match={m} />
              ))}
            </div>
          </div>
        </div>
      </div>







    </div>
  )
}

export default Dashboard