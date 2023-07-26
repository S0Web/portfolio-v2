import React, { useState } from 'react';
import SidebarButton from './SidebarButton';
import LogoHome from '../assets/Sidebar/logo-home.svg'
import LogoResume from '../assets/Sidebar/logo-resume.svg'
import LogoPortfolio from '../assets/Sidebar/logo-portfolio.svg'
import LogoServices from '../assets/Sidebar/logo-services.svg'
import LogoContact from '../assets/Sidebar/logo-contact.svg'

import './Sidebar.scss'; // Assurez-vous que vous avez le fichier CSS correspondant

const Sidebar = () => {
  const [activePage, setActivePage] = useState('Home'); // Par défaut, nous définissons "Home" comme la page active

  const handlePageClick = (pageName) => {
    setActivePage(pageName); // Met à jour la page active lorsqu'un bouton est cliqué
  };

  return (
    <div className="sidebar-content">
      {/* Les boutons appellent maintenant setActivePage lorsqu'ils sont cliqués */}
      <SidebarButton linkTo="/" logoPath={LogoHome} name="Home" activePage={activePage} handlePageClick={handlePageClick} />
      <SidebarButton linkTo="/resume" logoPath={LogoResume} name="Resume" activePage={activePage} handlePageClick={handlePageClick} />
      <SidebarButton linkTo="/portfolio" logoPath={LogoPortfolio} name="Portfolio" activePage={activePage} handlePageClick={handlePageClick} />
      <SidebarButton linkTo="/services" logoPath={LogoServices} name="Services" activePage={activePage} handlePageClick={handlePageClick} />
      <SidebarButton linkTo="/contact" logoPath={LogoContact} name="Contact" activePage={activePage} handlePageClick={handlePageClick} />
    </div>
  );
};

export default Sidebar;
