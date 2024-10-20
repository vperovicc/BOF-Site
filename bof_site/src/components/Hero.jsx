import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/Hero.css';

const Hero = () => {
  const buttonRef = useRef(null);
  const buttonRef1 = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // Animate text and button on mount
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { scale: 0, opacity: 0 }, // Start small and transparent
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" } // Grow in
    );

    gsap.fromTo(
      subtitleRef.current,
      { scale: 0, opacity: 0 }, // Start small and transparent
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 0.2 } // Grow in with delay
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0, opacity: 0 }, // Start small and transparent
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 0.4 } // Grow in with delay
    );

    gsap.fromTo(
      buttonRef1.current,
      { scale: 0, opacity: 0 }, // Start small and transparent
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 0.4 } // Grow in with delay
    );
  }, []);

  const handleMouseEnter1 = () => {
    gsap.to(buttonRef.current, { scale: 1.1, duration: 0.3 }); // Grow on hover
  };

  const handleMouseLeave1 = () => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.3 }); // Shrink on hover
  };

  const handleMouseEnter2 = () => {
    gsap.to(buttonRef1.current, { scale: 1.1, duration: 0.3 }); // Grow on hover
  };

  const handleMouseLeave2 = () => {
    gsap.to(buttonRef1.current, { scale: 1, duration: 0.3 }); // Shrink on hover
  };

  return (
    <div className='container_hero'>
      <div className='text_hero'>
        <h1 ref={titleRef}>POKRENITE SVOJ ONLINE COACHING BIZNIS I ZARADJUJTE <span> VISE OD 3000 € MESECNO.</span></h1>
        <p ref={subtitleRef}>Uzivajte u fleksibilnim satima dok pravite razliku. Zapocnite svoje putovanje ka finansijskoj nezavisnosti danas!</p>
      </div>
      <video></video>
      <div className='buttons_hero'>
        <div
          className='button_hero'
          ref={buttonRef}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <a href='https://calendly.com/sven-agic-bof/1h-call' target='_blank' rel="noopener noreferrer">
            <p>Rezervisite Konzultativni Poziv.</p>
          </a>
        </div>

        <div className='button1_hero' ref={buttonRef1}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2} >
          <a href='https://www.skool.com/business-of-fitness/about' target='_blank' rel="noopener noreferrer"><p>
            Udji u Besplatnu Grupu
          </p></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
