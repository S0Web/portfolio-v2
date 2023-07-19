import { useState } from 'react'
import './App.scss'
import Sidebar from './component/Sidebar'
import Home from './component/Home'

function App() {

  return (
    <>
      <div className="app-content">
        <Sidebar />
        <Home/>
      </div>
    </>
  )
}

export default App
