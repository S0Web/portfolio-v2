import React from 'react'
import './Sidebar.scss'
import SidebarButton from './SidebarButton'
import LogoHome from '../assets/Sidebar/logo-home.svg'
import LogoResume from '../assets/Sidebar/logo-resume.svg'
import LogoPortfolio from '../assets/Sidebar/logo-portfolio.svg'
import LogoServices from '../assets/Sidebar/logo-services.svg'
import LogoContact from '../assets/Sidebar/logo-contact.svg'
const Sidebar = () => {
  return (
    <div className="sidebar-content">
      <SidebarButton LogoPath={LogoHome}  Name="Home"/>
      <SidebarButton LogoPath={LogoResume} Name="Resume"/>
      <SidebarButton LogoPath={LogoPortfolio} Name="Portfolio"/>
      <SidebarButton LogoPath={LogoServices} Name="Services"/>
      <SidebarButton LogoPath={LogoContact} Name="Contact"/>
    </div>
  )
}

export default Sidebar