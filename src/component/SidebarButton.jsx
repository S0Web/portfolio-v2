import React from 'react'
import './SidebarButton.scss'
import HomeButton from '../assets/Sidebar/logo-home.svg'

const SidebarButton = () => {
    const= pathToImage = '../assets/Sidebar/logo-home.svg'

  return (
      <div className="sidebar-button-content">
        <img src={pathToImage} />
    </div>
  )
}

export default SidebarButton