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
          start: 'top 40%',
          end: 'bottom 50%',
          scrub: true,
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
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
      <div className="my-40 grid grid-cols-[1fr_3fr] sm:grid-cols-[1fr_2fr]">
        {/* Social links */}
        <div
          className="flex flex-col justify-end items-end px-4 gap-2"
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
            Hello! I'm Rafi Mozumder, a passionate and detail-oriented Front-End Developer with a strong foundation in React.js and a keen eye for UI/UX design. Currently pursuing a Bachelor of Computer Science with a stellar CGPA of 3.80, I have a proven track record of crafting seamless and intuitive digital experiences.
            With expertise in HTML, CSS, JavaScript, and modern tools like TypeScript, Redux, and Tailwind CSS, I thrive at developing scalable web solutions. My portfolio showcases impactful projects, including a healthcare navigation platform (CareNavi) and a university website, reflecting my ability to solve real-world problems through technology.
            Beyond coding, I enjoy designing interfaces with Figma and developing engaging experiences, whether it’s a 3D RPG game or an interactive web application. I'm constantly exploring the latest tech trends to stay ahead in this dynamic industry.
            If you're looking for someone to bring your ideas to life through thoughtful design and robust development, let's connect! 😊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
