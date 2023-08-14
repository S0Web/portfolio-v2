import React from 'react'
import './Portfolio.scss'
import computerDisplay from '../assets/computer-display-1.png'

const Portfolio = () => {
  return (
    <>
    <div className="portfolio-content">
        <div className="portfolio-container">
          <div className="computer">
          <img src={computerDisplay} alt="computer-display.png" />
          </div>
          <div className="description">
            <h2>Arthur Appéré</h2>
            <p>Portfolio démonstratif à usage professionnel</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio