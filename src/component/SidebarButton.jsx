import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './SidebarButton.scss'

const SidebarButton = ({ logoPath, name, linkTo, isActive }) => {
  return (
    <Link
      to={linkTo}
      className={`sidebar-button-content${isActive ? ' activeButton' : ''}`}
      aria-label={name}
      aria-current={isActive ? 'page' : undefined}
    >
      {isActive && (
        <motion.span
          className="active-pill"
          layoutId="active-pill"
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        />
      )}
      <img src={logoPath} alt="" />
      <p>{name}</p>
    </Link>
  )
}

SidebarButton.propTypes = {
  logoPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default SidebarButton
