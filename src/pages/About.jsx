import React, { useEffect, useRef } from 'react';
import { useDarkMode } from "../contexts/DarkModeContext";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const About = () => {
  const { dark } = useDarkMode(); // Access the dark mode state

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
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: true,
        },
        opacity: 0,
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
    <section id='about' ref={containerRef} className="w-full h-fit flex justify-center items-center overflow-hidden sm:px-8 px-4">
      <div className="my-40 grid grid-cols-[1fr_4fr] gap-4 sm:grid-cols-[1fr_2fr]">
        {/* Social links */}
        <div className="flex flex-col justify-end items-end gap-2" >
          <a href="https://www.linkedin.com/in/rafi-mozumder/" target="_blank" rel="noopener noreferrer" className={`scale-75 sm:scale-100 w-16 rounded-full fill-current`}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M 12 1.9921875 C 6.4855957 1.9921875 2 6.4769321 2 12 C 2 17.510738 6.4856593 21.992187 12 21.992188 C 17.514341 21.992188 22 17.510738 22 12 C 22 6.4759835 17.514341 1.9921875 12 1.9921875 z M 12 2.9921875 C 16.973659 2.9921875 21 7.0160165 21 12 C 21 16.969262 16.973659 20.992188 12 20.992188 C 7.0263407 20.992188 3 16.969262 3 12 C 3 7.0170679 7.0264043 2.9921875 12 2.9921875 z M 8.0371094 7 C 7.3901094 7 7.0019531 7.427 7.0019531 8 C 7.0019531 8.56 7.3917031 9 7.9707031 9 C 8.6177031 9 9.0019531 8.56 9.0019531 8 C 9.0019531 7.427 8.6171094 7 8.0371094 7 z M 7.0019531 10 L 7.0019531 16 L 9.0019531 16 L 9.0019531 10 L 7.0019531 10 z M 11.001953 10 L 11.001953 16 L 13.001953 16 L 13.001953 12.693359 C 13.001953 11.720359 13.874937 11.572266 14.085938 11.572266 C 14.296937 11.572266 15.001953 11.786359 15.001953 12.693359 L 15.001953 16 L 17.001953 16 L 17.001953 12.693359 C 17.001953 10.800359 16.052953 10 15.001953 10 C 13.950953 10 13.284953 10.346844 13.001953 10.839844 L 13.001953 10 L 11.001953 10 z"></path>
            </svg>
          </a>
          <a href="https://github.com/rafimoz" target="_blank" rel="noopener noreferrer" className={`scale-75 sm:scale-100 w-16 rounded-full fill-current`}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/raafi.jpeg/" target="_blank" rel="noopener noreferrer" className={`scale-75 sm:scale-100 w-16 rounded-full fill-current`}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 33 C 4 39.063407 8.9365932 44 15 44 L 33 44 C 39.063407 44 44 39.063407 44 33 L 44 15 C 44 8.9365932 39.063407 4 33 4 L 15 4 z M 15 6 L 33 6 C 37.982593 6 42 10.017407 42 15 L 42 33 C 42 37.982593 37.982593 42 33 42 L 15 42 C 10.017407 42 6 37.982593 6 33 L 6 15 C 6 10.017407 10.017407 6 15 6 z M 35 11 C 33.895 11 33 11.895 33 13 C 33 14.105 33.895 15 35 15 C 36.105 15 37 14.105 37 13 C 37 11.895 36.105 11 35 11 z M 24 14 C 18.488666 14 14 18.488666 14 24 C 14 29.511334 18.488666 34 24 34 C 29.511334 34 34 29.511334 34 24 C 34 18.488666 29.511334 14 24 14 z M 24 16 C 28.430666 16 32 19.569334 32 24 C 32 28.430666 28.430666 32 24 32 C 19.569334 32 16 28.430666 16 24 C 16 19.569334 19.569334 16 24 16 z"></path>
            </svg>
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1sW1Spkja2WpSHM87yrBK5nROqeBO7z1n" download target="_blank" rel="noopener noreferrer" className={`scale-75 sm:scale-100 w-16 rounded-full fill-current`}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M 12 1.9921875 C 10.638166 1.9921875 9.3405266 2.2685415 8.15625 2.7636719 C 8.1524641 2.7652547 8.1483148 2.7659908 8.1445312 2.7675781 A 0.50005 0.50005 0 0 0 7.984375 2.8398438 A 0.50005 0.50005 0 0 0 7.9765625 2.8457031 C 5.9052572 3.7605672 4.202938 5.3560737 3.1523438 7.3515625 A 0.50005 0.50005 0 0 0 3.0039062 7.6582031 C 2.3678424 8.9734097 2 10.442286 2 12 C 2 15.82305 4.1607202 19.146514 7.3242188 20.826172 A 0.50005 0.50005 0 0 0 7.6484375 20.982422 C 8.9661446 21.622338 10.439012 21.992187 12 21.992188 C 13.057457 21.992188 14.075782 21.824786 15.033203 21.519531 A 0.50006103 0.50006103 0 0 0 15.207031 21.455078 C 19.150852 20.115692 22 16.388695 22 12 C 22 11.98025 21.998161 11.96113 21.998047 11.941406 A 0.50021575 0.50021575 0 0 0 21.990234 11.816406 C 21.939073 9.0070941 20.729073 6.4848522 18.818359 4.6972656 A 0.50005 0.50005 0 0 0 18.625 4.5214844 C 16.858801 2.953021 14.542144 1.9921875 12 1.9921875 z M 12 2.9921875 C 14.164484 2.9921875 16.149287 3.7557088 17.701172 5.0273438 C 16.870041 6.0657638 15.849358 6.9420084 14.685547 7.6054688 C 13.415817 5.774588 11.687608 4.289959 9.6679688 3.3085938 C 10.41286 3.1092365 11.191889 2.9921875 12 2.9921875 z M 8.2929688 3.796875 C 10.518391 4.6503532 12.4286 6.1439815 13.789062 8.0585938 C 12.477951 8.6475332 11.03285 8.9921875 9.5019531 8.9921875 C 7.5588775 8.9921875 5.7456939 8.4580673 4.1855469 7.5390625 C 5.1228822 5.8961189 6.5602626 4.5814526 8.2929688 3.796875 z M 18.435547 5.7050781 C 19.858793 7.1624364 20.78762 9.1018612 20.962891 11.259766 C 20.170205 11.087519 19.346405 10.994141 18.501953 10.994141 C 17.79227 10.994141 17.098318 11.060055 16.423828 11.183594 C 16.127424 10.218602 15.721361 9.3024024 15.220703 8.4472656 C 16.456804 7.7355017 17.544089 6.8048908 18.435547 5.7050781 z M 3.734375 8.4335938 C 5.4307605 9.4198138 7.4003932 9.9921875 9.5019531 9.9921875 C 11.230463 9.9921875 12.861614 9.5913515 14.333984 8.90625 C 14.795603 9.687193 15.170636 10.524345 15.447266 11.40625 C 11.474868 12.50099 8.3677123 15.681407 7.359375 19.695312 C 4.7497367 18.121557 3 15.270001 3 12 C 3 10.731844 3.2635507 9.5270895 3.734375 8.4335938 z M 18.501953 11.994141 C 19.35983 11.994141 20.185992 12.115452 20.984375 12.308594 C 20.868304 15.724155 18.854051 18.648073 15.957031 20.068359 C 16.620291 18.509294 17 16.79998 17 15 C 17 14.021644 16.884934 13.071199 16.679688 12.154297 C 17.271709 12.050587 17.880188 11.994141 18.501953 11.994141 z M 15.705078 12.373047 C 15.894064 13.218851 16 14.096823 16 15 C 16 17.031797 15.486598 18.93452 14.595703 20.609375 C 13.773587 20.856173 12.902994 20.992188 12 20.992188 C 10.667275 20.992188 9.4069811 20.696241 8.2695312 20.177734 C 9.1232611 16.402767 11.999248 13.395823 15.705078 12.373047 z"></path>
            </svg>
          </a>
        </div>

        {/* Text content */}
        <div className="w-full">
          <p
            ref={(el) => (aboutRef.current[0] = el)}
            className="text-5xl sm:text-7xl mb-2 font-bodoni"
          >
            About me
          </p>
          <div>
            <p ref={splitTextRef} className="text-xl sm:text-3xl font-light">
              I’m Rafi Mozumder, a results-driven Full-Stack Web Developer with a strong foundation in modern web 
              technologies and a passion for building impactful digital solutions. 
              With hands-on experience in JavaScript, PHP, and Python ecosystems—including <span className='font-normal'>React.js, Next.js, Node.js, Express, and Laravel—</span>  
              I develop scalable, high-performance applications with clean, maintainable code and seamless 
              backend integration. I’m also proficient in database management with MongoDB 
              and MySQL, and specialize in crafting responsive, user-focused interfaces 
              using Tailwind CSS, Figma, and Adobe Creative Suite. Currently pursuing a 
              BSc in Computer Science and Engineering at the Canadian University of Bangladesh, 
              I’ve led and contributed to projects like Basha Bhara Hobe, a QR-enabled rental listing platform; CareNavi, 
              an AI-powered healthcare navigation app; and the official website of my university. 
              I thrive in collaborative environments, adapt quickly to new tools and frameworks, and am 
              committed to delivering reliable, scalable, and aesthetically polished web experiences from concept to deployment. <span className=' font-normal'>let's connect!</span> 😊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;