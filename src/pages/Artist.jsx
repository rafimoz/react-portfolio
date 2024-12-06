import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Artist = () => {
    const artRef = useRef([]);
    const containerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger)


    useEffect(() => {
        // Animate individual elements in/out view
        const tl = gsap.timeline({ paused: true });
        artRef.current.forEach((ref, index) => {
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
    <section ref={containerRef} className='w-full'>
        <div className='flex flex-col items-center px-6 mt-14 h-full'>
            <div className='w-full text-center font-allura text-5xl sm:text-8xl lg:text-9xl'>
                <p>Also an Artist</p>
            </div>

            <div className='mt-3 w-full flex flex-row justify-center gap-3 overflow-hidden'>
                <div className='flex flex-col justify-start gap-3 w-[50%]'>
                <img ref={(el) => (artRef.current[1] = el)} className='object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-3_bw6s7h.jpg" alt="" />
                <img ref={(el) => (artRef.current[3] = el)} className='object-cover' src="src\assets\art-2.jpg" alt="" />
                    <img ref={(el) => (artRef.current[5] = el)} className='object-cover' src="src\assets\art-3.jpg" alt="" />
                    <img ref={(el) => (artRef.current[7] = el)} className='object-cover' src="src\assets\art-4.jpg" alt="" />
                    <img ref={(el) => (artRef.current[9] = el)} className='object-cover' src="src\assets\art-5.jpg" alt="" />
                </div>

                <div className='flex flex-col justify-start gap-3 w-[50%]'>
                    <img ref={(el) => (artRef.current[2] = el)} className='object-cover'  src="src\assets\art-8.jpg" alt="" />
                    <img ref={(el) => (artRef.current[4] = el)} className='object-cover'  src="src\assets\art-9.jpg" alt="" />
                    <img ref={(el) => (artRef.current[6] = el)} className='object-cover'  src="src\assets\art-10.jpg" alt="" />
                    <img ref={(el) => (artRef.current[8] = el)} className='object-cover'  src="src\assets\art-11.jpg" alt="" />
                    <img ref={(el) => (artRef.current[10] = el)} className='object-cover'  src="src\assets\art-12.jpg" alt="" />
                    <img ref={(el) => (artRef.current[12] = el)} className='object-cover'  src="src\assets\art-13.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Artist