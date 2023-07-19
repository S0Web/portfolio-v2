import React from 'react'
import './Home.scss'
import Linkedin from '../assets/social-link/linkedin.svg'
import Github from '../assets/social-link/github.svg'
import Whatsapp from '../assets/social-link/whatsapp.svg'
import Discord from '../assets/social-link/discord.svg'

const Home = () => {
  return (
    <div className="home-content">
      <h1>Selim Ouadi</h1>
      <p>Je suis <span>Développeur, Intégrateur, Freelance</span></p>
      <div className="social-links">
        <img src={Linkedin} alt="linkedin" />
        <img src={Github} alt="github" />
        <img src={Whatsapp} alt="whatsapp" />
        <img src={Discord} alt="discord" />
      </div>

    </div>
  )
}

export default Home