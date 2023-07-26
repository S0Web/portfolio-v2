import React from 'react'
import './ResumeContainer.scss'

const ResumeContainer = ({ title, subtitle, place, date, description }) => {

  return (
      <div className="resume-container">
          <h2>{title}</h2>
          <div className="resume-item">  
            <h3>{subtitle}</h3>
            <h4>{date}</h4>
            <div className="place">{place}</div>
        <p>{description}</p>
          </div>
    </div>
  )
}

ResumeContainer.defaultProps = {
    title: 'titre',
    subtitle: 'sous-titre',
    place: 'lieu',
    date: 'date',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptas ipsam fugit libero! Quibusdam id, laboriosam omnis totam nihil consectetur officia quasi? Voluptatem quibusdam enim commodi, fuga architecto incidunt ipsum placeat explicabo at debitis blanditiis, maxime optio quaerat illo nulla?'
}

export default ResumeContainer