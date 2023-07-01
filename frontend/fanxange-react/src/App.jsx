import Hero from './Components/Hero'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import Series from './Pages/Series'
import Wazirx from './Pages/Wazirx'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/exchange" element={<Dashboard />} />
          <Route path="/wazirx" element={<Wazirx />} />
          <Route path="/series" element={<Series />} />


        </Routes>
      </Router>

    </>
  )
}

export default App
