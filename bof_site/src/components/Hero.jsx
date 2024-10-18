import React, { useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Hero.css';

const Hero = () => {
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, { scale: 1.1, duration: 0.3 }); // Grow on hover
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.3 }); // Shrink on hover out
  };

  return (
    <div className='container_hero'>
      <div className='text_hero'>
        <h1>POKRENITE SVOJ ONLINE COACHING BIZNIS I ZARADJUJTE <span> VISE OD 3000 € MESECNO.</span></h1>
        <p>Uzivajte u fleksibilnim satima dok pravite razliku. Zapocnite svoje putovanje ka finansijskoj nezavisnosti danas!</p>
      </div>
      <video></video>
      <div
        className='button_hero'
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href='https://calendly.com/sven-agic-bof/1h-call' target='_blank' rel="noopener noreferrer">
          <p>Rezervisite Konzultativni Poziv.</p>
        </a>
      </div>
    </div>
  );
}

export default Hero;
