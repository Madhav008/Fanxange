import Hero from './Components/Hero'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import Trade from './Pages/Trade'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchLiveMatches, fetchRecentMatches, fetchResultMatches, fetchUpcomingMatches } from './store/matchSlice'
import { fetchSeries } from './store/seriesSlice'
import MyPortfolio from './Pages/MyPortfolio'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLiveMatches());
    dispatch(fetchUpcomingMatches());
    dispatch(fetchRecentMatches());
    dispatch(fetchResultMatches());
    dispatch(fetchSeries());
  }, [dispatch])


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<MyPortfolio />} />
          <Route path="/player/:playerId" element={<Trade />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
