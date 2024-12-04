import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // Default state is invisible

  useEffect(() => {
    const onMouseMove = (e) => {
      setIsVisible(true); // Show cursor when mouse moves

      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => setIsVisible(false); // Hide cursor when mouse leaves screen
    const onMouseEnter = () => setIsVisible(true); // Show cursor when mouse re-enters screen

    const onTextHover = () => {
      // Scale up the cursor on hover
      gsap.to(cursorRef.current, {
        scale: 3, // Adjust the scale as needed
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const onTextHoverOut = () => {
      // Scale back the cursor
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    // Attach global events
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseLeave);
    window.addEventListener('mouseover', onMouseEnter);

    // Add hover events for text elements
    const textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a');
    textElements.forEach((el) => {
      el.addEventListener('mouseenter', onTextHover);
      el.addEventListener('mouseleave', onTextHoverOut);
    });

    return () => {
      // Cleanup global events
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseLeave);
      window.removeEventListener('mouseover', onMouseEnter);

      // Cleanup hover events
      textElements.forEach((el) => {
        el.removeEventListener('mouseenter', onTextHover);
        el.removeEventListener('mouseleave', onTextHoverOut);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`w-6 h-6 z-50 bg-primary rounded-full fixed left-0 top-0 translate-x-[-50%] translate-y-[-50%] pointer-events-none mix-blend-difference transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
};

export default Cursor;