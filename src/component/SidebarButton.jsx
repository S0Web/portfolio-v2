import React, {useState} from 'react'
import './SidebarButton.scss'
import {Link} from 'react-router-dom'

const SidebarButton = ({ logoPath, name, linkTo }) => {

  return (
    <div className={"sidebar-button-content"}>
      <Link to={linkTo}>
        <img src={logoPath} alt="logo" />
        <p>{name}</p>
      </Link>
    </div>
  )
}

export default SidebarButton