import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis'



const Home = () => {

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


    useEffect(() => {
      const animateDiv = (element) => {
        if (!element) return;
  
        const elementSize = 288; // Width and height of the div (72rem = 288px)
        const randomPosition = () => ({
          x: gsap.utils.random(0, window.innerWidth - elementSize, true),
          y: gsap.utils.random(0, window.innerHeight - elementSize, true),
        });
  
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
    tl.to(curvedTextRef.current, {
      scale:1,
      duration: 0.6,
      ease: 'power1.inOut',
    }),
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
    <div id='home' className='relative w-full h-[90vh] sm:h-[100vh] overflow-hidden'>

      <div ref={div1Ref} className='absolute w-72 h-72 rounded-full bg-primary/50'></div>
      <div ref={div2Ref} className='absolute w-72 h-72 rounded-full bg-primary/40'></div>

      <div className='w-full relative h-[90vh] sm:h-[100vh] overflow-hidden backdrop-filter backdrop-blur-2xl'>
        <div className='absolute z-10 bottom-0 w-full h-1/4 bg-gradient-to-t from-secondary to-transparent'></div>
        <div className='sm:w-1/3 w-3/4 absolute bottom-0 sm:-right-2 -right-12 translate-x-52 opacity-0' ref={headerImg}>
         {/* <img className='w-full' src="src\assets\header-image.png"  alt=""/> */} 

<a href="https://freeimage.host/i/2EQv5ge"><img className='w-full' src="https://iili.io/2EQv5ge.png" alt="2EQv5ge.md.png" ></a>


        </div>
        <div className='absolute flex items-center flex-col z-20 bottom-0 w-full opacity-0 translate-y-32' ref={headerRef}>
          <div>
          <p className='w-full text-[13vw] font-allura leading-none'>Rafi</p>
          <p className='w-full text-[17.5vw] font-bodoni leading-none'>MOZUMDER</p>
          </div>
        </div>
        <div className=' scale-0 absolute z-20 top-0 right-0' ref={curvedTextRef} >
          <img className='scale-75 cursor-pointer rounded-full' src="src\assets\header-curved-text.svg" alt="" />
        </div>

        <div ref={navRef} className='absolute z-20 text-lg left-5 top-[-100px] flex flex-col sm:flex-row font-aboreto'>
          <p onClick={() => scrollToSection('about')} className='text-primary/70 hover:text-primary cursor-pointer mr-10'>About</p>
          <p onClick={() => scrollToSection('work')} className='text-primary/70 hover:text-primary cursor-pointer mr-10'>Works</p>
          <p onClick={() => scrollToSection('contact')} className='text-primary/70 hover:text-primary cursor-pointer mr-10'>Join Me</p>
        </div>
      </div>
    </div>
  )
}

export default Home