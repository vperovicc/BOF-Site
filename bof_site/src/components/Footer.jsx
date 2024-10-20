import React, { useRef, useEffect } from 'react';
import '../styles/Footer.css';
import Sven from '../assets/footerImg.svg';
import Instagram from '../assets/instagram.svg';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef(null); // Reference for the footer

  useEffect(() => {
    // Create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate footer sliding up from the bottom
            gsap.fromTo(
              footerRef.current,
              { y: 100, opacity: 0 }, // Start below and transparent
              { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" } // Slide up to visible
            );

            // Unobserve after the animation to avoid repeated animations
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.4, // Trigger when 10% of the footer is in view
      }
    );

    // Start observing the footer's position
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Cleanup the observer on unmount
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className='container_footer' ref={footerRef}>
      <img src={Sven} alt='Sven Footer Image' />
      <div className='bottom_footer'>
        <a href='https://www.instagram.com/svenagiccoaching/?hl=en' target='_blank' rel="noopener noreferrer">
          <img src={Instagram} alt='Instagram' />
        </a>
        <p>Business of Fitness All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
