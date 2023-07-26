import React from 'react';
import './SidebarButton.scss';
import { Link } from 'react-router-dom';

const SidebarButton = ({ logoPath, name, linkTo, activePage, handlePageClick }) => {
  return (
    <div className="sidebar-button-content">
      <Link
        to={linkTo}
        className={activePage === name ? 'activeButton' : 'inactiveButton'}
        onClick={() => handlePageClick(name)}
      >
        <img src={logoPath} alt="logo" />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default SidebarButton;
