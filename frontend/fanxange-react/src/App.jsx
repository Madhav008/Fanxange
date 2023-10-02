import React from 'react';
import Hero from './Components/Hero';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Trade from './Pages/Trade';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLiveMatches, fetchRecentMatches, fetchResultMatches, fetchUpcomingMatches } from './store/matchSlice';
import { fetchSeries } from './store/seriesSlice';
import MyPortfolio from './Pages/MyPortfolio';
import ProtectedRoutes from './Components/ProtectedRoutes';
import { fetchUser } from './store/userSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLiveMatches());
    dispatch(fetchUpcomingMatches());
    dispatch(fetchRecentMatches());
    dispatch(fetchResultMatches());
    dispatch(fetchSeries());
    dispatch(fetchUser());
  }, [dispatch]);

  const {  status } = useSelector((state) => state.user);
  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/portfolio" element={<MyPortfolio />} />
            <Route path="/player/:playerId" element={<Trade />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
