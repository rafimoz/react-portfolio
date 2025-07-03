import React, { useEffect, useRef } from 'react'
import { useDarkMode } from "../contexts/DarkModeContext";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis'

const Home = () => {
  const { dark, setDark } = useDarkMode(); // Access dark mode state

  let setTheme = () => {
    setDark((prevDark) => !prevDark);
  };

  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 1.5, // Increase duration for slower scrolling
      easing: (t) => 1 - Math.pow(1 - t, 3), // Slower easing function
      smooth: true,
      smoothTouch: true,
    });

    // Start Lenis animation frame
    const raf = (time) => {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.current?.destroy();
    };
  }, []);

  // Scroll to the specific section by ID
  const scrollToSection = (id) => {
    lenis.current?.scrollTo(`#${id}`);
  };

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const navRef = useRef(null);
  const lightRef = useRef(null);


  useEffect(() => {
    const animateDiv = (element) => {
      if (!element) return;

      const elementSize = 288; // Width and height of the div (72rem = 288px)
      const randomPosition = () => ({
        x: gsap.utils.random(0, window.innerWidth - elementSize, true),
        y: gsap.utils.random(0, window.innerHeight - elementSize, true),
      });
      gsap.to(element, {
        scale: 1,
        duration: 1,
        ease: 'power1.inOut',
      })

      const animate = () => {
        gsap.to(element, {
          ...randomPosition(),
          duration: gsap.utils.random(3, 6, true),
          ease: 'power1.inOut',
          onComplete: animate,
        });
      };

      animate();
    };

    animateDiv(div1Ref.current);
    animateDiv(div2Ref.current);

    return () => {
      gsap.killTweensOf(div1Ref.current);
      gsap.killTweensOf(div2Ref.current);
    };
  }, []);


  const curvedTextRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    gsap.fromTo(curvedTextRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'linear' }
    );

    tl.to(curvedTextRef.current, {
      rotation: 360,
      duration: 10,
      ease: "linear",
    });

    curvedTextRef.current.addEventListener('mouseenter', () => {
      gsap.to(tl, { timeScale: 0.2, duration: 0.5 });
    });

    curvedTextRef.current.addEventListener('mouseleave', () => {
      gsap.to(tl, { timeScale: 1, duration: 0.5 });
    });
  }, []);

  // Reveal animation for the header element
  const headerRef = useRef(null);
  useEffect(() => {
    // Animate to final position
    gsap.to(headerRef.current, {
      y: 0, // Move to its original position
      opacity: 1, // Fade in
      duration: 1.5, // Animation duration
      delay: 0.8,
      ease: 'power3.out', // Smooth easing
    });

    gsap.to(navRef.current, {
      top: 5,
      opacity: 1, // Fade in
      duration: 1.5, // Animation duration
      delay: 0.8,
      ease: 'power3.out', // Smooth easing
    })

    gsap.to(lightRef.current, {
      top: "-7%",
      opacity: 1, // Fade in
      duration: 1.5, // Animation duration
      delay: 0.8,
      ease: 'power3.out', // Smooth easing
    })
  }, []);

  const headerImg = useRef(null);

  useEffect(() => {
    // Animate from right with a delay
    gsap.to(headerImg.current, {
      x: 0, // Move to its original position on the x-axis (from the right)
      opacity: 1, // Fade in the element
      y: 0, // Reset the vertical position
      duration: 1.5, // Animation duration
      delay: 0.5, // Delay before animation starts
      ease: 'power3.out', // Smooth easing
    });
  }, []);


  return (
    <div id='home' className='relative w-full h-[100svh] sm:h-[100vh] overflow-hidden'>
      <div ref={lightRef} className="absolute -top-[100%] left-[50%] -translate-x-[50%] z-50">
        <img onClick={setTheme} className=" scale-75 leading-tight cursor-pointer" src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733854337/light_yjdtac.svg" alt="" />
      </div>



      <div ref={div1Ref} className={`scale-0 absolute w-[400px] h-[400px] rounded-full ${dark ? "bg-primary/40" : "bg-secondary/40"}`}></div>
      <div ref={div2Ref} className={`scale-0 absolute w-[400px] h-[400px] rounded-full ${dark ? "bg-primary/30" : "bg-secondary/30"}`}></div>

      <div className='w-full relative h-full overflow-hidden backdrop-filter backdrop-blur-2xl'>
        <div className={`absolute z-10 bottom-0 w-full h-1/5 bg-gradient-to-t ${dark ? "from-secondary" : "from-primary"} to-transparent`} ></div>
        <div className='sm:w-1/3 w-3/4 absolute bottom-0 sm:-right-2 -right-12 translate-x-52 opacity-0' ref={headerImg}>
          <img className='w-full' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733521980/header-image_dhyltu.png" alt="2EQv5ge.png" border="0" />
        </div>
        <div className='absolute flex items-center flex-col z-10 bottom-0 w-full opacity-0 translate-y-32' ref={headerRef}>
          <div>
            <p className='w-full text-[13vw] font-allura leading-none'>Rafi</p>
            <p className='w-full text-[17.5vw] font-bodoni leading-none'>MOZUMDER</p>
          </div>
        </div>
        <div className='absolute top-0 right-0' ref={curvedTextRef} >
          <img className='scale-75 cursor-pointer rounded-full' src={`${dark ? "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733521979/header-curved-text_dvuywg.svg" : "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733742205/curverTextDark_bchcp9.svg"}`} alt="" />
        </div>

        <div ref={navRef} className='absolute z-20 text-lg left-5 top-[-100px] flex flex-col sm:flex-row font-aboreto'>
          <p onClick={() => scrollToSection('about')} className=' hover:opacity-45 cursor-pointer mr-10 transition-all'>About</p>
          <p onClick={() => scrollToSection('work')} className='hover:opacity-45 cursor-pointer mr-10 transition-all'>Works</p>
          <p onClick={() => scrollToSection('contact')} className='hover:opacity-45 cursor-pointer mr-10 transition-all'>Join Me</p>
        </div>
      </div>
    </div>
  )
}

export default Home