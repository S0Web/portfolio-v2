import React from 'react'
import './Sidebar.scss'
import SidebarButton from './SidebarButton'
const Sidebar = () => {
  return (
    <div className="sidebar-content">
      <SidebarButton/>
      <SidebarButton/>
      <SidebarButton/>
      <SidebarButton/>
      <SidebarButton/>
    </div>
  )
}

export default Sidebar