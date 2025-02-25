import React, { useEffect, useRef } from 'react';
import { useDarkMode } from "../contexts/DarkModeContext";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const RecentWork = () => {
  const { dark } = useDarkMode(); // Access the dark mode state

  const navigate = useNavigate();


  const workRef = useRef([]);
  const containerRef = useRef(null);
  const gsapBlRef = useRef(null);
  const gsapTrackRef = useRef(null);
  const gsapSliderRef = useRef(null);

  useEffect(() => {
    const scrollTrig = () => {
      if (!gsapBlRef.current || !gsapTrackRef.current || !gsapSliderRef.current) return;

      const gsapBl = gsapBlRef.current.offsetWidth;
      const gsapTrack = gsapTrackRef.current.offsetWidth;
      const scrollSliderTransform = gsapTrack - gsapBl;

      const winHeight = window.innerHeight;
      const slHeight = gsapSliderRef.current.offsetHeight;
      const startScrollTrig = (winHeight - slHeight) / 2;

      const proxy = { skew: 0 };
      const skewSetter = gsap.quickSetter('.gsap__item', 'skewX', 'deg');
      const clamp = gsap.utils.clamp(-1000, 1000);

      gsap.to(gsapTrackRef.current, {
        scrollTrigger: {
          trigger: gsapSliderRef.current,
          start: () => `-=${startScrollTrig}`,
          end: '+=1500px',
          scrub: true,
          pin: true,
          markers: false, // Add markers for debugging
          onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / 800);
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
              proxy.skew = skew;
              gsap.to(proxy, {
                skew: 0,
                duration: 0.8,
                ease: 'power3',
                overwrite: true,
                onUpdate: () => skewSetter(proxy.skew),
              });
            }
          },
        },
        x: `-${scrollSliderTransform}px`,
      });

      gsap.set('.gsap__item', { transformOrigin: 'center center', force3D: true });
    };

    scrollTrig();

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  // title animation
  useEffect(() => {
    // Animate individual elements in/out view
    const tl = gsap.timeline({ paused: true });
    workRef.current.forEach((ref, index) => {
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
      { threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} id='work' className="relative w-full overflow-hidden">
      <header ref={(el) => (workRef.current[1] = el)} className="mx-8  my-5">
        <div className='text-4xl sm:text-8xl lg:text-9xl font-bodoni'>
          <p>Recent Works</p>
        </div>
      </header>

      <main className="pb-[100px]">
        <section className="h-[100vh] py-6 gsap_slider" ref={gsapSliderRef}>
          <div className="w-full h-full px-8">
            <div className="h-full gsap_h">
              <div className="w-full h-full gsap__bl" ref={gsapBlRef}>
                <div className="flex items-center h-full overflow-hidden w-[calc(100%+50px)] gsap__inner">
                  <div className="flex h-[60vh] sm:h-full gsap__track" ref={gsapTrackRef}>

                    <div className={`grid grid-cols-[5fr_2fr] w-[100vw] p-5 h-full sm:w-[60vw] sm:h-full overflow-hidden ${dark ? "bg-primary/80 text-secondary" : "bg-secondary/80 text-primary"} ml-5 gsap__item`} >
                        <div className='w-full h-full flex justify-center items-center overflow-hidden'>
                          <img src='https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574498/carenavi_ox81ff.jpg' alt='' className="w-full h-full object-cover" />
                        </div>
                        <div className='flex flex-col justify-between items-center pl-3'>
                          <p className='w-full text-end text-4xl sm:text-6xl font-bodoni leading-none'>#01</p>
                          <p className='w-full text-[10px] sm:text-sm font-aboreto text-end flex flex-col'><span className='font-aboreto uppercase text-[17px] sm:text-xl'>carenavi</span>A health management platform, created using mern stack technology. To bring friendliness to users.</p>
                        </div>
                    </div>

                    <div className={`grid grid-cols-[5fr_2fr] w-[100vw] p-5 h-full sm:w-[60vw] sm:h-full overflow-hidden ${dark ? "bg-primary/80 text-secondary" : "bg-secondary/80 text-primary"} ml-5 gsap__item`} >
                      <div className='w-full h-full flex justify-center items-center overflow-hidden'>
                        <img src='https://res.cloudinary.com/dhlh7av5k/image/upload/v1740497395/209shots_so_osrv34.jpg' alt='' className="w-full h-full object-cover" />
                      </div>
                      <div className='flex flex-col justify-between items-center pl-3'>
                        <p className='w-full text-end text-4xl sm:text-6xl font-bodoni leading-none'>#02</p>
                        <p className='w-full text-[10px] sm:text-sm font-aboreto text-end flex flex-col'><span className='font-aboreto uppercase text-[17px] sm:text-xl'>Portfolio</span>A personal portfolio, inspired by 3D technology. To bring friendliness to users.</p>
                        </div>
                    </div>

                    <div className={`grid grid-cols-[5fr_2fr] w-[100vw] p-5 h-full sm:w-[60vw] sm:h-full overflow-hidden ${dark ? "bg-primary/80 text-secondary" : "bg-secondary/80 text-primary"} ml-5 gsap__item`} >
                      <div className='w-full h-full flex justify-center items-center overflow-hidden'>
                        <img src='https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574163/Group_3_c6riuk.png' alt='' className="w-full h-full object-cover" />
                      </div>
                      <div className='flex flex-col justify-between items-center pl-3'>
                        <p className='w-full text-end text-4xl sm:text-6xl font-bodoni leading-none'>#03</p>
                        <p className='w-full text-[10px] sm:text-sm font-aboreto text-end flex flex-col'><span className='font-aboreto uppercase text-[17px] sm:text-xl'>gari lagbe</span>A mobile application for buys and sell cars, created using react native technology. To bring friendliness to users.</p>
                        </div>
                    </div>

                    <div className={`grid grid-cols-[5fr_2fr] w-[100vw] p-5 h-full sm:w-[60vw] sm:h-full overflow-hidden ${dark ? "bg-primary/80 text-secondary" : "bg-secondary/80 text-primary"} ml-5 gsap__item`} >
                      <div className='w-full h-full flex justify-center items-center overflow-hidden'>
                        <img src='https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574510/uidesign_pc8s8o.jpg' alt='' className="w-full h-full object-cover" />
                      </div>
                      <div className='flex flex-col justify-between items-center pl-3'>
                        <p className='w-full text-end text-4xl sm:text-6xl font-bodoni leading-none'>#04</p>
                        <p className='w-full text-[10px] sm:text-sm font-aboreto text-end flex flex-col'><span className='font-aboreto uppercase text-[17px] sm:text-xl'>Photography</span>A portfolio for photographer, created using react and tailwind technology. To bring friendliness to users.</p>
                        </div>
                    </div>

                    <div className={`grid grid-cols-[5fr_2fr] w-[100vw] p-5 h-full sm:w-[60vw] sm:h-full overflow-hidden ${dark ? "bg-primary/80 text-secondary" : "bg-secondary/80 text-primary"} ml-5 gsap__item`} >
                      <div className='w-full h-full flex justify-center items-center overflow-hidden'>
                        <img src='https://res.cloudinary.com/dhlh7av5k/image/upload/v1740497393/157_1x_shots_so_aswwzm.jpg' alt='' className="w-full h-full object-cover" />
                      </div>
                      <div className='flex flex-col justify-between items-center pl-3'>
                        <p className='w-full text-end text-4xl sm:text-6xl font-bodoni leading-none'>#05</p>
                        <p className='w-full text-[10px] sm:text-sm font-aboreto text-end flex flex-col'><span className='font-aboreto uppercase text-[17px] sm:text-xl'>Lunch Box</span>A office lunch management platform, created using mern stack technology. To bring friendliness to users.</p>
                        </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[50px] font-aboreto">
          <div className="w-full px-8 flex items-center justify-end gap-3">
            <p className="w-full text-end text-sm sm:text-xl">
              View more of my works
            </p>
            <button onClick={() => navigate("/works")} className=' w-14 h-12 sm:w-16 sm:h-16 p-1 text-sm sm:text-lg text-center rounded-full border border-primary hover:bg-primary hover:border-secondary hover:text-secondary transition-all'>here</button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default RecentWork;