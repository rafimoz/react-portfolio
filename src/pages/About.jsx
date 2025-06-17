import { useState, useEffect, useRef } from 'react';
import { useDarkMode } from "../contexts/DarkModeContext";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const About = () => {
  const { dark } = useDarkMode(); // Access the dark mode state
  const [aboutData, setAboutData] = useState([]);
  const aboutRef = useRef([]);
  const containerRef = useRef(null);
  const splitTextRef = useRef(null);
  const API_BASE_URL = 'http://localhost:5000/api'; // Ensure this matches your backend port

  gsap.registerPlugin(ScrollTrigger);

  const fetchData = async () => {
    try {
      const [aboutRes] = await Promise.all([
        fetch(`${API_BASE_URL}/about`),
      ]);

      if (!aboutRes.ok) {
        const errorText = await aboutRes.text(); // Get raw response for more detail
        throw new Error(`About data fetch failed: ${aboutRes.status} ${aboutRes.statusText} - ${errorText}`);
      }
      const aboutJson = await aboutRes.json();
      setAboutData(aboutJson);
    } catch (err) {
      console.error("Failed to fetch data:", err);
      setError(err.message); // Set the detailed error message to state
    }
  };

  useEffect(() => {
    fetchData();

    // Split text for animation
    if (splitTextRef.current) {
      const splitText = new SplitType(splitTextRef.current, { types: 'chars, words' });

      gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: splitTextRef.current,
          start: 'top 50%',
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
      { threshold: 0.1 }
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
        <div className="flex flex-col justify-end items-end px-4 gap-2" >
          <a href="https://www.linkedin.com/in/rafi-mozumder/" target="_blank" rel="noopener noreferrer" className={`scale-75 sm:scale-100 w-16 h-16 rounded-full ${dark ? "bg-primary" : "border border-secondary"}`}>
            <img className="scale-50" src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733854337/linkedin_cbgzjj.png" alt="" />
          </a>
          <a href="https://github.com/rafimoz" target="_blank" rel="noopener noreferrer" className={`scale-75 sm:scale-100 w-16 h-16 rounded-full ${dark ? "bg-primary" : "border border-secondary"}`}>
            <img className="scale-50" src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733854337/github_son5ik.png" alt="" />
          </a>
          <a href="https://www.instagram.com/raafi.jpeg/" target="_blank" rel="noopener noreferrer" className={`scale-75 sm:scale-100 w-16 h-16 rounded-full ${dark ? "bg-primary" : "border border-secondary"}`}>
            <img className="scale-50" src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733854336/instagram_ec9kj7.png" alt="" />
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1sW1Spkja2WpSHM87yrBK5nROqeBO7z1n" download target="_blank" rel="noopener noreferrer" className={`scale-75 sm:scale-100 w-16 h-16 rounded-full ${dark ? "bg-primary" : "border border-secondary"}`}>
            <img className=" object-cover" src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733854337/cv_sixsib.png" alt="" />
          </a>
        </div>

        {/* Text content */}
        <div className="w-full font-allura mr-2">
          <p
            ref={(el) => (aboutRef.current[0] = el)}
            className="text-4xl sm:text-8xl lg:text-9xl mb-2 font-bodoni"
          >
            About me
          </p>
          <div>
            <p ref={splitTextRef} className="text-xl sm:text-3xl font-aboreto">{aboutData.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
