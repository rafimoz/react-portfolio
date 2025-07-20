import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Titles = () => {
    const titleRefs = useRef([]);
    const containerRef = useRef(null);
    const tl = useRef(gsap.timeline({ paused: true }));

    useGSAP(() => {
        titleRefs.current.forEach((ref, index) => {
            tl.current.fromTo(ref,
                {
                    x: index % 2 === 0 ? 1000 : -1000
                },
                {
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    delay: index * 0.2
                },
                index * 0.2
            );
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        tl.current.play();
                    } else {
                        tl.current.reverse();
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 10% of the element is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <section ref={containerRef} className='w-full flex justify-center items-center'>
            <div className='w-full text-center my-56  text-5xl sm:text-8xl overflow-hidden '>
                <div>
                    <p className='font-allura cursor-default'>A</p>
                </div>
                <div className='font-aboreto'>
                    <div className='hover:scale-105 hover:tracking-wide transition-all cursor-default'>
                        <p ref={el => titleRefs.current[0] = el}>"DESIGNER</p>
                    </div>
                    <div className='hover:scale-105 hover:tracking-wide transition-all cursor-default'>
                        <p ref={el => titleRefs.current[1] = el}>DEVELOPER</p>
                    </div>
                    <div className='hover:scale-105 hover:tracking-wide transition-all cursor-default'>
                        <p ref={el => titleRefs.current[2] = el}>ARTIST</p>
                    </div>
                    <div className='hover:scale-105 hover:tracking-wide transition-all cursor-default'>
                        <p ref={el => titleRefs.current[3] = el}>THINKER"</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Titles