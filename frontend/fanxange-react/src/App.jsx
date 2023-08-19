import Hero from './Components/Hero'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import Series from './Pages/Series'
import Wazirx from './Pages/Wazirx'
import Navneet from './Components/Navneet'
import League from './Pages/League'


function App() {
  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/exchange" element={<Dashboard />} />
          <Route path="/wazirx" element={<Wazirx />} />
          <Route path="/series" element={<Series />} />
          <Route path="/navneet" element={<Navneet />} />
          <Route path="/" element={<League />} />




        </Routes>
      </Router>

    </>
  )
}

export default App
