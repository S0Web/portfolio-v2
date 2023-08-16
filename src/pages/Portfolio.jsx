import React from 'react'
import './Portfolio.scss'
import computer1 from '../assets/computer-display-1.png'
import computer2 from '../assets/computer-display-2.png'

const Portfolio = () => {
  return (
    <>
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-content">
        <div id="portfolio-container-1" className="portfolio-container">
          <a href="">
            <div className="computer">
              <img src={computer1} alt="computer-display.png" />
            </div>
          </a>
          <div className="description">
            <h2>Arthur Appéré</h2>
            <p>Portfolio démonstratif à usage professionnel</p>
          </div>
        </div>
        <div id="portfolio-container-2" className="portfolio-container">
          <div className="description">
            <h2>Institut Adios</h2>
            <p>Intégration d'articles avec Wordpress</p>
          </div>
          <a href="">
            <div className="computer">
              <img src={computer2} alt="computer-display.png" />
            </div>
          </a>
        </div>
    </div>
    </>
  )
}

export default Portfolio