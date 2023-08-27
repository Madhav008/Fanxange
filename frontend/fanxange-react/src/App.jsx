import Hero from './Components/Hero'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import Trade from './Pages/Trade'


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/trade" element={<Trade />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
