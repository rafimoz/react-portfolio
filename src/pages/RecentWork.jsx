import React, { useState, useEffect, useRef } from 'react';
import { useDarkMode } from "../contexts/DarkModeContext";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const RecentWork = () => {
  const { dark } = useDarkMode(); // Access the dark mode state
  const [portfolioData, setPortfolioData] = useState([]);
  const navigate = useNavigate();
  const API_BASE_URL = 'http://localhost:5000/api'; // Ensure this matches your backend port

  const workRef = useRef([]);
  const containerRef = useRef(null);
  const gsapBlRef = useRef(null);
  const gsapTrackRef = useRef(null);
  const gsapSliderRef = useRef(null);

  const fetchData = async () => {
    try {
      const [portfolioRes] = await Promise.all([
        fetch(`${API_BASE_URL}/portfolio`),
      ]);
      if (!portfolioRes.ok) {
        const errorText = await portfolioRes.text();
        throw new Error(`Portfolio data fetch failed: ${portfolioRes.status} ${portfolioRes.statusText} - ${errorText}`);
      }
      const portfolioJson = await portfolioRes.json();
      setPortfolioData(portfolioJson);
    } catch (err) {
      console.error("Failed to fetch data:", err);
      setError(err.message); // Set the detailed error message to state
    }
  };



  useEffect(() => {
    fetchData();
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

      <main>
        <header ref={(el) => (workRef.current[1] = el)} className="mx-8">
          <div className='text-4xl sm:text-8xl lg:text-9xl font-bodoni'>
            <p>Recent Works</p>
          </div>
        </header>
        <section className="h-screen gsap_slider" ref={gsapSliderRef}>
          <div className="w-full h-full px-8">
            <div className="h-full gsap_h">
              <div className="w-full h-full gsap__bl" ref={gsapBlRef}>
                <div className="flex items-center h-full overflow-hidden w-[calc(100%+50px)] gsap__inner">
                  <div className="flex gap-4 h-[50%] sm:h-[90%] gsap__track" ref={gsapTrackRef}>
                    {
                      portfolioData.length > 0 && (
                        portfolioData.map((project, index) => (
                          <div key={index} className={`grid grid-cols-[5fr_2fr] w-[120vw] p-5 h-full sm:w-[60vw] sm:h-full overflow-hidden ${dark ? "bg-primary/80 text-secondary" : "bg-secondary/80 text-primary"} gsap__item`} >
                            <div className='w-full h-full flex justify-center items-center overflow-hidden'>
                              <img src={project.image} alt='' className="w-full h-full object-cover" />
                            </div>
                            <div className='flex flex-col justify-between items-center pl-3'>
                              <p className='w-full text-end text-4xl sm:text-6xl font-bodoni leading-none'>#{index + 1}</p>
                              <div className='flex gap-3 flex-col items-end'>
                                <p className='w-full text-xs sm:text-sm font-aboreto text-end flex flex-col'><span className='font-aboreto uppercase sm:text-xl text-sm'>{project.title}</span>{project.description}</p>
                                <div className='flex items-center gap-1'>
                                  <a href={project.link} target='_blank'>
                                    <svg className='w-8' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-310.000000, -1089.000000)" fill={`${dark ? '#181C14' : '#ECDFCC'}`}> <path d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z" id="arrow-right-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="font-aboreto">
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