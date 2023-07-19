import React from 'react'
import './SidebarButton.scss'

const SidebarButton = ({LogoPath, Name}) => {

  return (
      <div className="sidebar-button-content">
      <img src={LogoPath} alt="logo" />
      <p>{Name}</p>
    </div>
  )
}

export default SidebarButton