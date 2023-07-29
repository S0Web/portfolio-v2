import React from 'react'
import './ResumeContainer.scss'

const ResumeContainer = ({ title, subtitle, place, date, description, descriptionElement1, descriptionElement2, descriptionElement3, descriptionElement4 }) => {

  return (
      <div className="resume-container">
          <h2>{title}</h2>
          <div className="resume-item">  
            <h3>{subtitle}</h3>
            <h4>{date}</h4>
            <div className="place">{place}</div>
        <p>{description}</p>
        <ul>
          <li>{descriptionElement1}</li>
          <li>{descriptionElement2}</li>
          <li>{descriptionElement3}</li>
          <li>{descriptionElement4}</li>
        </ul>
          </div>
    </div>
  )
}

export default ResumeContainer