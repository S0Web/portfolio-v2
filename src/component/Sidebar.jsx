import React from 'react'
import { Link } from "react-router-dom";
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
      <SidebarButton linkTo="/" logoPath={LogoHome}  name="Home"/>
      <SidebarButton linkTo="/resume" logoPath={LogoResume} name="Resume"/>
      <SidebarButton linkTo="/portfolio" logoPath={LogoPortfolio} name="Portfolio"/>
      <SidebarButton linkTo="/services" logoPath={LogoServices} name="Services"/>
      <SidebarButton linkTo="/contact" logoPath={LogoContact} name="Contact"/>   
    </div>

  )
}

export default Sidebar