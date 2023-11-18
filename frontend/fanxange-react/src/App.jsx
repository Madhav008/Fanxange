import React from 'react';
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
import { fetchtrendingplayer } from './store/playerSlice';
import Landing from './Pages/Landing';
import LoadingAnimation from './Components/LoadingAnimation';
import Wallet from './Pages/Wallet';
import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLiveMatches());
    dispatch(fetchUpcomingMatches());
    dispatch(fetchRecentMatches());
    dispatch(fetchResultMatches());
    dispatch(fetchSeries());
    dispatch(fetchUser());
    dispatch(fetchtrendingplayer());
  }, [dispatch]);

  const { status, userData } = useSelector((state) => state.user);
  if (status === 'loading') {
    return <LoadingAnimation />
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          {userData.authenticated === true && <Route path="/player/:playerId" element={<Trade />} />}
          <Route element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/wallet' element={<Wallet />} />
            <Route path="/portfolio" element={<MyPortfolio />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />

    </>
  );
}

export default App;
