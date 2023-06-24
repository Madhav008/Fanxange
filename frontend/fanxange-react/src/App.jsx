import Hero from './Components/Hero'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './Pages/Dashboard'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/exchange" element={<Dashboard />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
