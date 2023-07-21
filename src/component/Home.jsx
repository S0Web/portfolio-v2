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
  const[blur, setBlur] = useState ({x: 0, y: 0})
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (event) => {
    if (!isActive) {
      // changer la valeur pour avoir un délai
      setTimeout(() => setIsActive(true), 0);
    }

    const div = document.getElementById('rotatingDiv');
    if (!div) return;

    const divRect = div.getBoundingClientRect();
    const centerX = divRect.left + divRect.width / 2;
    const centerY = divRect.top + divRect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const coefficientX = 3; // taux de rotation en x
    const coefficientY = 8; // taux de rotation en y

    const diffX = (mouseX - centerX) * (coefficientX / 100 );
    const diffY = (mouseY - centerY) * (coefficientY / 100 );

    const rotationX = -diffY;
    const rotationY = diffX;

    setRotation({ x: rotationX, y: rotationY });

    // Calcul des ombres en temps réel en fonction de la position du curseur
    const shadowX = (diffX / 100) * 40; // Ombre x
    const shadowY = (diffY / 100) * 40; // Ombre y
    setShadow({ x: shadowX, y: shadowY });

      // change la position en fonction du curseur
      const posX = (diffX / 100) * 300; // position x
      const posY = (diffY / 100) * 300; // position y
    setPosition({ x: posX, y: posY });
    
    const blurX = Math.abs(diffX) > 0 ? Math.min(Math.abs(diffX / 100) * 20, 40) : 0;
    const blurY = Math.abs(diffY) > 0 ? Math.min(Math.abs(diffY / 100) * 20, 40) : 0;
    setBlur({ x: blurX, y: blurY });

  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setShadow({ x: 0, y: 0 });
    setPosition({ x: 0, y: 0 });
  }

  return (
    <div className="home-content">
      <div
      className="rotating-div"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translate(${isActive ? position.x : 0}px, ${
          isActive ? position.y : 0
        }px)`,
        transition: isActive ? 'transform 0.15s ease' : 'none',
      }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          id='rotatingDiv'
          className='container'
          style={{
            boxShadow: `${shadow.x}px ${shadow.y}px 50px rgba(0, 0, 0, 0.3)`,
            backdropFilter: `blur(${blur.x}px) blur(${blur.y}px)`,
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