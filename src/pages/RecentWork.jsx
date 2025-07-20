import React, { useEffect, useRef, useState } from 'react';
import { useDarkMode } from "../contexts/DarkModeContext";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// Data for your work cards
const workData = [
  {
    id: '01',
    image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1750406480/pawambhbvcjck2dlel3p.jpg',
    title: 'Basha Bhara Hobe',
    link: 'https://basha-bhara-hobe.vercel.app/',
    description: 'A health management platform, created using MERN stack technology. To bring friendliness to users. A health management platform, created using MERN stack technology. To bring friendliness to users.',
  },
  {
    id: '02',
    image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574498/carenavi_ox81ff.jpg',
    title: 'carenavi',
    link: 'https://carenavi-healthcare.vercel.app/',
    description: 'A health management platform, created using MERN stack technology. To bring friendliness to users.',
  },
  {
    id: '03',
    image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1740497393/157_1x_shots_so_aswwzm.jpg',
    title: 'Lunch Box',
    link: 'https://github.com/rafimoz/office-lunch-menu-management',
    description: 'An office lunch management platform, created using MERN stack technology. To bring friendliness to users.',
  },
  {
    id: '04',
    image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1740497395/209shots_so_osrv34.jpg',
    title: 'Portfolio',
    link: 'https://dribbble.com/shots/25642292-Modern-Portfolio-Design',
    description: 'A personal portfolio, inspired by 3D technology. To bring friendliness to users.',
  },
  {
    id: '05',
    image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574510/uidesign_pc8s8o.jpg',
    title: 'Photobooth',
    link: 'https://dribbble.com/shots/25737179-Personal-Portfolio-Photographer',
    description: 'A portfolio for photographers, created using React and Tailwind technology. To bring friendliness to users.',
  },
];

const RecentWork = () => {
  const { dark } = useDarkMode();
  const navigate = useNavigate();

  const workRef = useRef([]);
  const containerRef = useRef(null);
  const gsapBlRef = useRef(null);
  const gsapTrackRef = useRef(null);
  const gsapSliderRef = useRef(null);

  // No more [moreInfo, setMoreInfo] here!

  // GSAP Scroll Animation
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
          markers: false,
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

  // Title Animation
  useEffect(() => {
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

  // Component for a single work card - NOW WITH ITS OWN STATE!
  const WorkCard = ({ id, image, title, link, description }) => {
    const { dark } = useDarkMode(); // Access dark mode within the card
    const [isExpanded, setIsExpanded] = useState(false); // State specific to THIS card

    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div className={`
        grid 
        ${isExpanded ? "grid-rows-[0fr_5fr]" : "grid-rows-[5fr_1fr]"} 
        w-[90vw] h-full sm:w-[40vw] overflow-hidden 
        ${dark ? "bg-primary/80 text-secondary" : "bg-secondary/80 text-primary"} 
        gsap__item
        relative
      `}>
        <div className='w-full flex justify-center items-center overflow-hidden relative'>
          <img src={image} alt={title} className="object-cover h-full w-full" />
          <div className={`absolute inset-0 bg-gradient-to-br ${dark ? "from-primary to-primary/0" : "from-secondary to-secondary/0"}`}></div>
        </div>
        {/* Adjusted position for #id. Made it absolute within the relative parent. */}
        <p className={`text-4xl sm:text-6xl font-bodoni leading-none absolute sm:top-4 top-2 sm:left-4 left-2 ${isExpanded ? "hidden" : "block"}`}>#{id}</p>
        {/* The click handler is now on this card's specific div */}
        <div className='sm:p-4 p-2 cursor-pointer mb-8'> {/* Added cursor-pointer for better UX */}
          <p className='font-aboreto uppercase text-[15px] flex items-center gap-1 sm:text-xl'>{title} -
            <a href={link} target='_blank' onClick={(e) => e.stopPropagation()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
            </a>
          </p>
          <p className={`w-full text-[13px] sm:text-sm font-sans leading-[14px] ${isExpanded ? "line-clamp-none" : "line-clamp-1"}`}>
            {description}
          </p>
          <div onClick={toggleExpansion} className='absolute sm:right-4 right-2 sm:bottom-4 bottom-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={containerRef} id='work' className="relative w-full overflow-hidden sm:pl-8 pl-4">
      <main>
        <section className="sm:h-[100vh] h-[80vh] flex flex-col justify-center gsap_slider" ref={gsapSliderRef}>
          <header >
            <div className='text-5xl sm:text-7xl font-bodoni'>
              <p>Recent Works</p>
            </div>
          </header>

          <div className="w-full sm:h-[75%] h-[65%]">
            <div className="h-full gsap_h">
              <div className="w-full h-full gsap__bl" ref={gsapBlRef}>
                <div className="flex items-center h-full overflow-hidden w-full gsap__inner">
                  <div className="flex py-4 sm:py-6 gap-4 h-full gsap__track" ref={gsapTrackRef}>
                    {workData.map((work) => (
                      <WorkCard
                        key={work.id}
                        id={work.id}
                        image={work.image}
                        title={work.title}
                        link={work.link}
                        description={work.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:px-8 px-4 flex items-center justify-end gap-2 font-aboreto">
            <p className="w-full text-end text-sm sm:text-lg">
              View more of my works
            </p>
            <button
              onClick={() => navigate("/allworks")}
              className='w-10 h-10'
            >
              <svg className={`w-full fill-current border border-current rounded-full`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M36 49C35.4477 49 35 49.4477 35 50C35 50.5523 35.4477 51 36 51L36 49ZM63.7071 50.7071C64.0976 50.3166 64.0976 49.6834 63.7071 49.2929L57.3431 42.9289C56.9526 42.5384 56.3195 42.5384 55.9289 42.9289C55.5384 43.3195 55.5384 43.9526 55.9289 44.3431L61.5858 50L55.9289 55.6569C55.5384 56.0474 55.5384 56.6805 55.9289 57.0711C56.3195 57.4616 56.9526 57.4616 57.3431 57.0711L63.7071 50.7071ZM36 51L63 51L63 49L36 49L36 51Z" />
              </svg>
            </button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default RecentWork;