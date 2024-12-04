import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const About = () => {
  const aboutRef = useRef([]);
  const containerRef = useRef(null);
  const splitTextRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Split text for animation
    if (splitTextRef.current) {
      const splitText = new SplitType(splitTextRef.current, { types: 'chars, words' });

      gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: splitTextRef.current,
          start: 'top 50%',
          end: 'bottom 60%',
          scrub: true,
        },
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: 'power2.out',
      });
    }
  }, []);

  useEffect(() => {
    // Animate individual elements in/out view
    const tl = gsap.timeline({ paused: true });
    aboutRef.current.forEach((ref, index) => {
      if (ref) {
        tl.fromTo(
          ref,
          { x: index % 2 === 0 ? 900 : -900, opacity: 0 },
          { x: 0, opacity: 1, ease: 'power3.out', duration: 1 },
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
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id='about' ref={containerRef} className="w-full h-fit flex justify-center items-center overflow-hidden">
      <div className="my-40 grid grid-cols-[1fr_2fr]">
        {/* Social links */}
        <div
          ref={(el) => (aboutRef.current[5] = el)}
          className="flex flex-col justify-end items-end mr-2 ml-2 gap-2"
        >
          {['instagram.png', 'linkedin.png', 'github.png', 'cv.png'].map((icon, index) => (
            <a key={index} href="" className="w-16 h-16 rounded-full bg-primary">
              <img className="scale-50" src={`src/assets/${icon}`} alt="" />
            </a>
          ))}
        </div>

        {/* Text content */}
        <div className="w-full font-allura mr-2">
          <p
            ref={(el) => (aboutRef.current[0] = el)}
            className="text-5xl sm:text-8xl lg:text-9xl mb-2 font-bodoni"
          >
            About me
          </p>
          <div>
            <p ref={splitTextRef} className="text-3xl font-aboreto">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ad neque soluta
              quam voluptate veritatis. Consequuntur inventore omnis qui ratione modi. Quo debitis sint dolore provident
              at minima a quasi. consectetur adipisicing elit. Totam provident molestias aspernatur veritatis corrupti
              dolore beatae sunt ducimus molestiae, laudantium velit dolorum autem qui? Numquam nam velit pariatur minus
              nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates quo magnam, harum suscipit,
              a aperiam nihil exercitationem dolorem expedita laudantium. Modi deleniti quia quasi quibusdam tenetur
              iste sapiente aliquid!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
