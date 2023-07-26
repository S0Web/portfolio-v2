import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.scss'
import Sidebar from './component/Sidebar'
import Home from './component/Home'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Contact from './pages/Contact'
function App() {
  
  return (
    <Router>
      <div className="background"></div>
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/resume" element ={<Resume/>} />
          <Route path="/portfolio" element ={<Portfolio/>} />
          <Route path="/services" element ={<Services/>} />
          <Route path="/contact" element ={<Contact/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
