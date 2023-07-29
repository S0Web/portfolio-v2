import React from 'react'
import './Resume.scss'
import ResumeContainer from '../component/Resume/ResumeContainer'

const Resume = () => {
  return (
    <>
      <h2 className="section-title">Curriculum vitae</h2>
    <div className="resume-content">
      <div className="left-item">
      <ResumeContainer 
        title="Présentation"
        subtitle="SELIM OUADI"
        description="Développeur et intégrateur, je réalise vos projets avec enthousiasme et sérieux. Ayant un intérêt particulier pour le développement je chercherais toujours à réaliser la production la plus efficace possible sans me contenter du minimum."
        descriptionElement1="06 18 33 69 33"
        descriptionElement2="selimouadi31@gmail.com"
        />
      <ResumeContainer
        title="Education"
        subtitle="BAC+4 CONCEPTEUR ET DÉVELOPPEUR D'APPLICATION"
        date="2022 - 2024"
        place="Cloud Campus, Paris"
        description="Formation full-stack en alternance, titre RNCP niveau 6. On y étudie les technologies web les plus efficaces ainsi que les compétences transversales dont un développeur à besoin."
          >
      </ResumeContainer>
      </div>
      <div className="right-item">
      <ResumeContainer 
        title="Expérience"
        subtitle=""
        date=""
        place=""
        description=""
        />
      </div>
    </div>
    </>
  )
}

export default Resume