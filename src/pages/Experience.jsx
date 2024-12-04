import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Experience = () => {

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
        <section ref={containerRef} className='w-full h-[100vh] px-7 overflow-hidden'>
            <div className='h-full'>
                <div ref={(el) => (experienceRef.current[0] = el)} className='text-5xl sm:text-8xl lg:text-9xl font-bodoni text-end'>
                    <p>Experience</p>
                </div>

                <div  ref={(el) => (experienceRef.current[1] = el)} className='grid grid-cols-2 mt-12'>
                    <div className='flex justify-end mr-4'>
                        <p className=' w-1 h-full rounded-full bg-primary'></p>
                    </div>
                    <div className='flex flex-col justify-between gap-10 h-full font-aboreto text-2xl'>
                        <div className=' leading-relaxed'>
                            <p className='font-bold'><a href="https://www.quantanite.com/">quantanite</a></p>
                            <p className='text-sm sm:text-lg'>Jan 2021 - Aug 2021</p>
                            <p className='text-sm sm:text-lg'>Project Employee</p>
                            <p className='text-sm sm:text-lg' >(Full-Time)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience