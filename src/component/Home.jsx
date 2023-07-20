import React, { useState, useEffect } from 'react'
import './Home.scss'
import Linkedin from '../assets/social-link/linkedin.svg'
import Github from '../assets/social-link/github.svg'
import Whatsapp from '../assets/social-link/whatsapp.svg'
import Discord from '../assets/social-link/discord.svg'

const Home = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [shadow, setShadow] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (event) => {
    if (!isActive) {
      // Set a 0.3s delay before activating the effect
      setTimeout(() => setIsActive(true), 100);
    }

    const div = document.getElementById('rotatingDiv');
    if (!div) return;

    const divRect = div.getBoundingClientRect();
    const centerX = divRect.left + divRect.width / 2;
    const centerY = divRect.top + divRect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const coefficientX = 2; // Ajustez selon vos préférences
    const coefficientY = 7; // Ajustez selon vos préférences

    const diffX = (mouseX - centerX) * (coefficientX / 100 );
    const diffY = (mouseY - centerY) * (coefficientY / 100 );

    const rotationX = -diffY;
    const rotationY = diffX;

    setRotation({ x: rotationX, y: rotationY });

    // Calcul des ombres en temps réel en fonction de la position du curseur
    const shadowX = (diffX / 100) * 10; // Ajustez le coefficient pour l'effet d'ombre en relief
    const shadowY = (diffY / 100) * 10; // Ajustez le coefficient pour l'effet d'ombre en relief
    setShadow({ x: shadowX, y: shadowY });

      // Adjust the div position based on cursor movement
      const posX = (diffX / 100) * 100; // Adjust the coefficient to control the movement
      const posY = (diffY / 100) * 100; // Adjust the coefficient to control the movement
      setPosition({ x: posX, y: posY });
  };

  return (
    <div className="home-content">
      <div
      id=""
      className="rotating-div"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translate(${isActive ? position.x : 0}px, ${
          isActive ? position.y : 0
        }px)`,
        transition: isActive ? 'transform 0.3s ease' : 'none', // Add transition only when active
      }}
        onMouseMove={handleMouseMove}
      >
        <div
          id='rotatingDiv'
          className='container'
          style={{
            boxShadow: `${shadow.x}px ${shadow.y}px 50px rgba(0, 0, 0, 0.3)`, // Utilisation des valeurs d'ombre dynamiques
          }}
        >
          <h1>Selim Ouadi</h1>
          <p>Je suis <span>Développeur, Intégrateur, Freelance</span></p>
          <div className="social-links">
            <img src={Linkedin} alt="linkedin" />
            <img src={Github} alt="github" />
            <img src={Whatsapp} alt="whatsapp" />
            <img src={Discord} alt="discord" />
          </div>
        </div>
      </div>
    </div>
  )
}

  export default Home