import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Header.css';
import Logo from '../assets/logo.svg';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    // Slide the header down from the top when the component mounts
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 }, // Start above and transparent
      { y: 0, opacity: 1, duration: 1 } // Slide down to its original position
    );
  }, []);

  return (
    <div className='container_header' ref={headerRef}>
      <img src={Logo} alt='logo' />
    </div>
  );
};

export default Header;
