import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDarkMode } from "../contexts/DarkModeContext";

// Register the ScrollTrigger plugin with GSAP once
gsap.registerPlugin(ScrollTrigger);

const experienceData = [
    {
        company: "AB Construction LTD",
        link: "https://abcl.com.bd/",
        role: "Asst. Executive (IT & Admin)",
        duration: "Aug 2025 - Present",
        type: "(Full-Time)"
    },
    {
        company: "Aerhe Development Federation",
        link: "https://www.quantanite.com/",
        role: "Volunteer",
        duration: "Feb 2025 - Mar 2025",
        type: "(Full-Time)"
    },
    {
        company: "Quantanite Bangladesh LTD",
        link: "https://www.quantanite.com/",
        role: "Project Employee",
        duration: "Jan 2021 - Aug 2021",
        type: "(Full-Time)"
    }
];

const Experience = () => {
    const { dark } = useDarkMode();

    const experienceRef = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current && experienceRef.current.length) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                }
            });

            experienceRef.current.forEach((el, index) => {
                if (el) {
                    tl.fromTo(
                        el,
                        {
                            y: index % 2 === 0 ? -900 : 900,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            ease: 'power3.out',
                            duration: 0.5
                        },
                        index * 0.2
                    );
                }
            });

            return () => {
                if (tl) {
                    tl.kill();
                    if (tl.scrollTrigger) {
                        tl.scrollTrigger.kill();
                    }
                }
            };
        }
    }, []);

    return (
        <section ref={containerRef} className='w-full my-80 overflow-hidden sm:px-8 px-4'>
            <div>
                <div ref={(el) => (experienceRef.current[0] = el)} className='text-5xl sm:text-7xl font-bodoni'>
                    <p>My Experience</p>
                </div>

                <div ref={(el) => (experienceRef.current[1] = el)} className='flex flex-col gap-4 mt-20'>
                    {experienceData.map((exp, index) => (
                        <div key={index}>
                            <div className={`w-full sm:grid sm:grid-cols-2 flex flex-col gap-1 sm:items-center p-4 border ${dark ? 'border-primary/40 hover:bg-primary hover:text-secondary' : 'border-secondary/40 hover:bg-secondary hover:text-primary'} rounded-xl h-full font-aboreto text-2xl`}>
                                <div className=''>
                                    <p className='text-xs sm:text-lg'>{exp.duration}</p>
                                </div>
                                <div className='space-y-2'>
                                    <p className='font-bold text-lg sm:text-xl line-clamp-1'>
                                        <a href={exp.link}>{exp.company}</a>
                                    </p>
                                    <p className='text-xs sm:text-lg line-clamp-1'>{exp.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;