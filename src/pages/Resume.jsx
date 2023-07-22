import React from 'react'
import './Resume.scss'
import ResumeContainer from '../component/ResumeContainer'

const Resume = () => {
  return (
    <div className="resume-content">
      <div className="left-item">
      <ResumeContainer/>
      <ResumeContainer/>
      </div>
      <div className="right-item">
      <ResumeContainer/>
      </div>
    </div>
  )
}

export default Resume