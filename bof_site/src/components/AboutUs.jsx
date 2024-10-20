import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const paragraphsRef = useRef([]); // Array to hold references to paragraph elements

  // Function to add references to paragraphs
  const addToRefs = (el) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = paragraphsRef.current.indexOf(entry.target);
            // Determine the direction based on the index
            const direction = index % 2 === 0 ? { x: -500 } : { x: 500 }; // Left for even, right for odd

            // Animate paragraph
            gsap.fromTo(
              entry.target,
              { opacity: 0, x: direction.x }, // Start from the side
              { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" } // Slide in to center
            );

            // Unobserve after the animation to avoid repeated animations
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1, // Trigger the animation when 40% of the element is in view
      }
    );

    // Start observing each paragraph
    paragraphsRef.current.forEach((paragraph) => {
      if (paragraph) {
        observer.observe(paragraph);
      }
    });

    // Cleanup the observer on unmount
    return () => {
      paragraphsRef.current.forEach((paragraph) => {
        if (paragraph) {
          observer.unobserve(paragraph);
        }
      });
    };
  }, []);

  return (
    <div className='container_aboutus'>
      <p ref={addToRefs}>Sanjaš o pokrentanju vlastitog online fitness businessa, ali ne znaš od kuda početi?</p>
      <p ref={addToRefs}>Ja imam riješenje za tebe.</p>
      <p ref={addToRefs}>Online coaching je moja ljubav i strast, zato volim pomagati perspektivnim trenerima jer online coaching je meni promjenio život i želim i njima dati priliku za isto.</p>
      <p ref={addToRefs}>Sa preko 13 godina iskustva u fitnessu i bodybuildingu te 8 godina iskustva u online coachingu napravio sam svoje programe tako da i vi možete na što jednostavniji način izgraditi vaš online fitness cocahing business.</p>
      <p ref={addToRefs}>Svakako ako tvoj biznis ne radi barem 3000e mjesceno nešto se mora promjeniti, a neki od mojih programa je odličan prvi korak.</p>
      <p ref={addToRefs}>Vidimo se. </p>
    </div>
  );
}

export default AboutUs;
