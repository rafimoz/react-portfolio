import React, { useEffect, useRef } from 'react'
import { useDarkMode } from "../contexts/DarkModeContext";

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Expertise = () => {
  const { dark } = useDarkMode(); // Access the dark mode state
    const undelLine = useRef([]);
    const expretiseRef = useRef([]);
    const containerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        undelLine.current.forEach((line) => {
            gsap.to(line, {
                scrollTrigger: {
                    trigger: line,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: true,
                  },
                width: '100%',
                duration: 0.5,
                ease: 'power2.out',
              });
        })
    }, [])


      // title animation
  useEffect(() => {
    // Animate individual elements in/out view
    const tl = gsap.timeline({ paused: true });
    expretiseRef.current.forEach((ref, index) => {
      if (ref) {
        tl.fromTo(
          ref,
          { x: index % 2 === 0 ? 900 : -900, opacity: 0 },
          { x: 0, opacity: 1, ease: 'power3.out', duration: 0.5 },
          index * 0.2
        );
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.play();
          } else {
            tl.reverse();
          }
        });
      },
      { threshold: 0.15}
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <section ref={containerRef} id='expertise' className='w-full overflow-hidden sm:px-8 px-4'>
        <div className='my-52'>
            <div ref={(el) => (expretiseRef.current[1] = el)}  className='text-5xl sm:text-7xl font-bodoni'>
                <p>My Expertise</p>
            </div>
            <div className='flex flex-col font-sans mt-10 gap-10 text-[10px] sm:text-2xl'>
                <div className='flex flex-col gap-5'>
                    <div className='grid grid-cols-[2fr_1fr_5fr]'>
                        <p>front-end</p>
                        <span> - </span>
                        <p className='text-end'>Html, Css, Javascript, React.js, React-Native, Tailwindcss, Bootstrap</p>
                    </div>
                    <p className={`w-0 h-0.5 ${dark ? "bg-primary" : "bg-secondary"}`} ref={(el) => (undelLine.current[0] = el)}></p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='grid grid-cols-[2fr_1fr_5fr]'>
                        <p>Back-end</p>
                        <span> - </span>
                        <p className='text-end'>Node.js, Express.js, Python, MongoDB, MySql, Auth(JWT)</p>
                    </div>
                    <p className={`w-0 h-0.5 ${dark ? "bg-primary" : "bg-secondary"}`} ref={(el) => (undelLine.current[1] = el)}></p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='grid grid-cols-[2fr_1fr_5fr]'>
                        <p>Tools</p>
                        <span> - </span>
                        <p className='text-end'>Git, Figma, Adobe Photoshop, Adobe Illustrator, Framer, Spline, Unity</p>
                    </div>
                    <p className={`w-0 h-0.5 ${dark ? "bg-primary" : "bg-secondary"}`} ref={(el) => (undelLine.current[2] = el)}></p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='grid grid-cols-[2fr_1fr_5fr]'>
                        <p>Programming Lang</p>
                        <span> - </span>
                        <p className='text-end'>JAVA, Python, JAVASCIPT, C++, C#</p>
                    </div>
                    <p className={`w-0 h-0.5 ${dark ? "bg-primary" : "bg-secondary"}`} ref={(el) => (undelLine.current[3] = el)}></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Expertise