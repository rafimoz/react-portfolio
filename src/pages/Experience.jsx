import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDarkMode } from "../contexts/DarkModeContext";


const Experience = () => {
    const { dark } = useDarkMode(); // Access the dark mode state
    const [experienceData, setExperienceData] = useState([]);
    const experienceRef = useRef([]);
    const containerRef = useRef(null);
    const API_BASE_URL = 'http://localhost:5000/api'; // Ensure this matches your backend port

    gsap.registerPlugin(ScrollTrigger)

    const fetchData = async () => {
        try {
            const [experienceRes] = await Promise.all([
                fetch(`${API_BASE_URL}/experience`)
            ]);

            if (!experienceRes.ok) {
                const errorText = await experienceRes.text();
                throw new Error(`Experience data fetch failed: ${experienceRes.status} ${experienceRes.statusText} - ${errorText}`);
            }
            const experienceJson = await experienceRes.json();
            setExperienceData(experienceJson);
        } catch (err) {
            console.error("Failed to fetch data:", err);
            setError(err.message); // Set the detailed error message to state
        }
    };

    useEffect(() => {
        fetchData();
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
        <section ref={containerRef} className='w-full h-[100svh] sm:h-[100vh] flex items-center justify-end px-7 overflow-hidden'>
            <div>
                <div ref={(el) => (experienceRef.current[0] = el)} className='text-4xl sm:text-8xl lg:text-9xl font-bodoni sm:text-end'>
                    <p>Experience</p>
                </div>
                {
                    experienceData.length > 0 && (
                        experienceData.map((exp, index) => (
                            <div key={index}>
                                <div ref={(el) => (experienceRef.current[1] = el)} className='flex mt-12'>
                                    <div className='flex justify-end mr-4'>
                                        <p className={`w-1 h-full rounded-full ${dark ? "bg-primary" : "bg-secondary"}`}></p>
                                    </div>
                                    <div className='flex flex-col justify-between gap-10 h-full font-aboreto text-2xl'>
                                        <div className='leading-relaxed'>
                                            <div className='flex items-center gap-2'>
                                                <img className='w-8 h-8 rounded-full object-cover' src={exp.logo} alt="" />
                                                <p className='font-bold cursor-pointer'><a target="_blank" href={exp.companyurl}>{exp.companyname}</a></p>
                                            </div>
                                            <p className='text-sm sm:text-lg'>{exp.duration }</p>
                                            <p className='text-sm sm:text-lg'>{exp.title}</p>
                                            <p className='text-sm sm:text-lg' >{exp.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }

            </div>
        </section>
    )
}

export default Experience