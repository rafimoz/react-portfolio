import React, { useEffect, useRef } from 'react';
import { useDarkMode } from "../contexts/DarkModeContext";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const { dark } = useDarkMode();
  const undelLine = useRef([]);
  const expertiseRef = useRef([]);
  const containerRef = useRef(null);

  // Underline animations
  useEffect(() => {
    undelLine.current.forEach((line) => {
      if (line) {
        gsap.fromTo(
          line,
          { width: '0%' },
          {
            width: '100%',
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            },
          }
        );
      }
    });
  }, []);

  // Title & content animations
  useEffect(() => {
    expertiseRef.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { x: index % 2 === 0 ? -900 : 900, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: 'power3.out',
            duration: 0.8,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 1,
            },
            delay: index * 0.15,
          }
        );
      }
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="expertise"
      className="w-full h-screen overflow-hidden my-20 sm:px-8 px-4"
    >
      <div className="h-full flex flex-col justify-center">
        <div
          ref={(el) => (expertiseRef.current[0] = el)}
          className="text-5xl sm:text-7xl font-bodoni"
        >
          <p>My Expertise</p>
        </div>

        <div className="flex flex-col font-sans mt-10 gap-10 text-xs sm:text-2xl">
          {[
            {
              title: "front-end",
              tech: "Html, Css, Javascript, React.js, React-Native, Tailwindcss, Bootstrap",
            },
            {
              title: "Back-end",
              tech: "Node.js, Express.js, Python, MongoDB, MySql, Auth(JWT)",
            },
            {
              title: "Tools",
              tech: "Git, Figma, Adobe Photoshop, Adobe Illustrator, Framer, Spline, Unity",
            },
            {
              title: "Programming Lang",
              tech: "JAVA, Python, JAVASCRIPT, C++, C#",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-[2fr_1fr_5fr]">
                <p>{item.title}</p>
                <span>-</span>
                <p className="text-end">{item.tech}</p>
              </div>
              <p
                className={`w-0 h-0.5 ${
                  dark ? "bg-primary" : "bg-secondary"
                }`}
                ref={(el) => (undelLine.current[i] = el)}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
