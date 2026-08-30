import { useLocation } from 'react-router-dom'
import SidebarButton from './SidebarButton'
import LogoHome from '../assets/Sidebar/logo-home.svg'
import LogoResume from '../assets/Sidebar/logo-resume.svg'
import LogoPortfolio from '../assets/Sidebar/logo-portfolio.svg'

import './Sidebar.scss'

const NAV_ITEMS = [
  { to: '/', label: 'Home', logo: LogoHome },
  { to: '/resume', label: 'Resume', logo: LogoResume },
  { to: '/portfolio', label: 'Portfolio', logo: LogoPortfolio },
]

const Sidebar = () => {
  const { pathname } = useLocation()

  return (
    <nav className="sidebar-content" aria-label="Navigation principale">
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <SidebarButton
              linkTo={item.to}
              logoPath={item.logo}
              name={item.label}
              isActive={pathname === item.to}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
