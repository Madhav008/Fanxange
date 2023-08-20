import Hero from './Components/Hero'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import Series from './Pages/Series'
import Wazirx from './Pages/Wazirx'
import Navneet from './Components/Unused/Navneet'
import League from './Pages/League'
import Trade from './Pages/Trade'


function App() {
  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/wazirx" element={<Wazirx />} />
          <Route path="/league" element={<League />} />
          <Route path="/trade" element={<Trade />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
