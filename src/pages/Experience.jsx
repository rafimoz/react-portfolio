import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDarkMode } from "../contexts/DarkModeContext";


const Experience = () => {
    const { dark } = useDarkMode(); // Access the dark mode state

    const experienceRef = useRef([]);
    const containerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger)


    useEffect(() => {
        // Animate individual elements in/out view
        const tl = gsap.timeline({ paused: true });
        experienceRef.current.forEach((ref, index) => {
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
        <section ref={containerRef} className='w-full h-[100svh] sm:h-[100vh] flex items-center justify-end overflow-hidden sm:px-8 px-4'>
            <div>
                <div ref={(el) => (experienceRef.current[0] = el)} className='text-5xl sm:text-7xl font-bodoni text-end'>
                    <p>Experience</p>
                </div>

                <div ref={(el) => (experienceRef.current[1] = el)} className='flex flex-col gap-0 mt-20'>
                    <div  className='flex'>
                        <div className='flex justify-end mr-2'>
                            <p className={`w-[2px] h-full rounded-full ${dark ? "bg-primary" : "bg-secondary"}`}></p>
                        </div>
                        <div className='flex flex-col justify-between h-full font-aboreto text-2xl mb-5'>
                            <div className=' leading-relaxed'>
                                <p className='font-bold text-lg sm:text-xl'><a href="https://www.quantanite.com/">Aerhe Development Federation</a></p>
                                <p className='text-xs sm:text-lg'>Feb 2025 - Mar 2025</p>
                                <p className='text-xs sm:text-lg'>Intern</p>
                                <p className='text-xs sm:text-lg' >(Full-Time)</p>
                            </div>
                        </div>
                    </div>
                    <div  className='flex'>
                        <div className='flex justify-end mr-2'>
                            <p className={`w-[2px] h-full rounded-full ${dark ? "bg-primary" : "bg-secondary"}`}></p>
                        </div>
                        <div className='flex flex-col justify-between h-full font-aboreto text-2xl mt-5'>
                            <div className='leading-relaxed'>
                                <p className='font-bold text-lg sm:text-xl'><a href="https://www.quantanite.com/">quantanite</a></p>
                                <p className='text-xs sm:text-lg'>Jan 2021 - Aug 2021</p>
                                <p className='text-xs sm:text-lg'>Project Employee</p>
                                <p className='text-xs sm:text-lg' >(Full-Time)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience