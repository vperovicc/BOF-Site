import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/Divider.css';

const Divider = ({ subtitle, title }) => {
  const lineRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dividerRef = useRef(null); // Reference to the entire divider

  useEffect(() => {
    // Create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate subtitle
            gsap.fromTo(
              subtitleRef.current,
              { scale: 0, opacity: 0 }, // Start small and transparent
              { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" } // Grow in
            );

            // Animate title
            gsap.fromTo(
              titleRef.current,
              { scale: 0, opacity: 0 }, // Start small and transparent
              { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 0.2 } // Grow in with delay
            );

            // Animate line expansion
            gsap.fromTo(
              lineRef.current,
              { scaleX: 0 }, // Start from center (scaleX is 0)
              { scaleX: 1, duration: 1, ease: "power2.out" } // Expand to full width
            );

            // Unobserve after the animation to avoid repeated animations
            observer.unobserve(dividerRef.current);
          }
        });
      },
      {
        threshold: 0.4, // Trigger the animation when 40% of the element is in view
      }
    );

    // Start observing the divider element
    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    // Cleanup the observer on unmount
    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, []);

  return (
    <div className='container_divider' ref={dividerRef}>
      <p className='subtitle' ref={subtitleRef}>{subtitle}</p>
      <p className='title' ref={titleRef}>{title}</p>
      <div className='line' ref={lineRef} />
    </div>
  );
}

export default Divider;
