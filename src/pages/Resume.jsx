import React from 'react'
import './Resume.scss'

const Resume = () => {
  return (
    <>
    <h2 className="section-title">Curriculum vitae</h2>
    <div className="resume-content">
      <div className="left-item">
        <div className="resume-container">
          <h2>Présentation</h2>
          <div className="resume-item">  
            <h3>SELIM OUADI</h3>
            <div id="profil" className="place">Développeur et intégrateur, je réalise vos projets avec enthousiasme et sérieux. Ayant un intérêt particulier pour le développement je chercherais toujours à réaliser la production la plus efficace possible sans me contenter du minimum.</div>
            <ul>
              <li>06 18 33 69 33</li>
              <li>selimouadi31@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="resume-container">
          <h2>Education</h2>
          <div className="resume-item">  
            <h3>BAC+4 CONCEPTEUR ET DÉVELOPPEUR D'APPLICATION</h3>
            <h4>2022 - 2024</h4>
            <div className="place">Cloud Campus, Paris 10</div>
            <p>Formation full-stack en alternance, titre RNCP niveau 6. On y étudie les technologies web les plus efficaces ainsi que les compétences transversales dont un développeur à besoin.</p>
          </div>
          <div className="resume-item">  
            <h3>BAC+4 CONCEPTEUR ET DÉVELOPPEUR D'APPLICATION</h3>
            <h4>2022 - 2024</h4>
            <div className="place">Cloud Campus, Paris 10</div>
            <p>Formation full-stack en alternance, titre RNCP niveau 6. On y étudie les technologies web les plus efficaces ainsi que les compétences transversales dont un développeur à besoin.</p>
          </div>
        </div>
      </div>
      <div className="right-item">
        <div className="resume-container">
          <h2>Expériences</h2>
          <div className="resume-item">  
            <h3>Institut Adios</h3>
            <h4>Depuis 2022</h4>
            <div className="place">Neuilly-sur-Seine</div>
            <ul>
              <li>Institut Adios est mon entreprise d'accueil dans le cadre de mon alternance.</li>
              <li>Un large éventail de missions m'ayant été confiées, j'ai eu l'occasion de travailler seul ou en équipe.</li>
              <li>J'ai travaillé sur l'intégration d'articles, vous pouvez y voir un exemple dans mes <a href="/portfolio"> productions</a>.</li>
              <li>J'ai également travaillé sur diverses autres missions comme l'analyse de données, la gestion de la chaîne YouTube ou encore l'hébergement cloud à partir d'une machine virtuelle.</li>
            </ul>
          </div>
          <div className="resume-item">  
            <h3>Freelancing</h3>
            <h4>Depuis 2023</h4>
            <div className="place">Télétravail</div>
            <ul>
              <li>J'ai réalisé un site vitrine que vous pouvez voir dans mes <a href="/portfolio"productions></a>.</li>
              <li>Vous pouvez me retrouver sur la plateforme Malt en cliquant <a href="https://www.malt.fr/profile/selim0uadi" target="_blank">ici</a>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Resume