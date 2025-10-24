import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Titles = () => {
  const titleRefs = useRef([]);
  const containerRef = useRef(null);

  useGSAP(() => {
    titleRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        {
          x: index % 2 === 0 ? 1400 : -1400,
        },
        {
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%', // when 80% of viewport from top
            end: 'top 20%', // when scrolled past
            scrub: 1, // makes it smooth in both directions
          },
          delay: index * 0.3,
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="w-full flex justify-center items-center">
      <div className="w-full text-center my-56 text-5xl sm:text-8xl overflow-hidden">
        <div>
          <p className="font-allura cursor-default">A</p>
        </div>
        <div className="font-aboreto">
          {['"DESIGNER', 'DEVELOPER', 'ARTIST', 'THINKER"'].map((text, i) => (
            <div
              key={i}
              className="hover:scale-105 hover:tracking-wide transition-all cursor-default"
            >
              <p ref={(el) => (titleRefs.current[i] = el)}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Titles;
