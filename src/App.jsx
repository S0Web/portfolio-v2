import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.scss'
import Sidebar from './component/Sidebar'
import ScrollToTop from './component/ScrollToTop'
import ScrollProgress from './component/ScrollProgress'
import EasterEgg from './component/EasterEgg'
import Home from './component/Home'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="app-shell">
        <ScrollProgress />
        <div className="background" aria-hidden="true">
          <div className="background-blob"></div>
        </div>
        <div className="app-layout">
          <Sidebar />
          <main className="app-main">
            <ScrollToTop />
            <AnimatedRoutes />
          </main>
        </div>
        <EasterEgg />
      </div>
    </Router>
  )
}

export default App
