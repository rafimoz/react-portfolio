import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const arts = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animateChars = (chars, reverse = false) => {
            const staggerOptions = {
                each: 0.35,
                from: reverse ? "start" : "end",
                ease: "linear",
            };

            gsap.fromTo(
                chars,
                {
                    fontWeight: 100,
                },
                {
                    fontWeight: 800,
                    duration: 1,
                    ease: "none",
                    stagger: staggerOptions,
                    scrollTrigger: {
                        trigger: chars[0]?.closest(".marquee-container"),
                        start: "50% bottom",
                        end: "top top",
                        scrub: true,
                    },
                }
            );
        };

        const splitText = new SplitType(".item h1", { types: "chars" });

        const marqueeContainers = document.querySelectorAll(".marquee-container");

        marqueeContainers.forEach((container, index) => {
            let start = "0%";
            let end = "-15%";

            if (index % 2 === 0) {
                start = "0%";
                end = "10%";
            }

            const marquee = container.querySelector(".marquee");
            const words = marquee.querySelectorAll(".item h1");

            gsap.fromTo(
                marquee,
                {
                    x: start,
                },
                {
                    x: end,
                    scrollTrigger: {
                        trigger: container,
                        start: "top bottom",
                        end: "150% top",
                        scrub: true,
                    },
                }
            );

            words.forEach((word) => {
                const chars = Array.from(word.querySelectorAll(".char"));
                if (chars.length) {
                    const reverse = index % 2 !== 0;
                    animateChars(chars, reverse);
                }
            });
        });
    }, []);


    return (
        <section className='w-full overflow-x-hidden'>

            <div className=' h-[150vh] flex flex-col justify-center'>

                <div className='marquee-container relative w-[150%] h-[200px] sm:h-[350px] flex mb-2 overflow-hidden'>
                    <div className='marquee w-full h-full absolute top-[50%] -left-[15%] -translate-y-[50%] flex gap-2' >
                        <div className=' item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-3_bw6s7h.jpg" alt="" /></div>
                        <div className='item flex-[1.5] flex justify-center items-center uppercase text-4xl sm:text-8xl font-bigshoulders'><h1>ALSO</h1></div>
                        <div className=' item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733521485/Screenshot_20241207-034318_ck5frr.png" alt="" /></div>
                        <div className='item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733521485/Screenshot_20241207-034358_okj5a0.jpg" alt="" /></div>
                        <div className='item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503024/art-7_nzy5sl.jpg" alt="" /></div>
                    </div>
                </div>

                <div className='marquee-container relative w-[150%] h-[200px] sm:h-[350px] flex mb-2 overflow-hidden'>
                    <div className=' marquee w-full h-full absolute top-[50%] left-0 -translate-y-[50%] flex gap-2'>
                        <div className='item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733521485/Screenshot_20241207-034358_okj5a0.jpg" alt="" /></div>
                        <div className='item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733521620/1733521522021_ngzfob.jpg" alt="" /></div>
                        <div className=' item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-2_rlmiib.jpg" alt="" /></div>
                        <div className='item flex-[1.5] flex justify-center items-center uppercase text-4xl sm:text-8xl font-bigshoulders'><h1>AN</h1></div>
                        <div className=' item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-2_rlmiib.jpg" alt="" /></div>
                    </div>
                </div>

                <div className='marquee-container relative w-[150%] h-[200px] sm:h-[350px] flex mb-2 overflow-hidden'>
                    <div className='marquee w-full h-full absolute top-[50%] -left-[15%] -translate-y-[50%] flex gap-2'>
                        <div className='item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-6_gsyoe8.jpg" alt="" /></div>
                        <div className='item flex-[1.5] flex justify-center items-center uppercase text-4xl sm:text-8xl font-bigshoulders'><h1>Artist</h1></div>
                        <div className='item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-5_xlkmug.jpg" alt="" /></div>
                        <div className=' item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-3_bw6s7h.jpg" alt="" /></div>
                        <div className=' item flex-1 flex justify-center items-center'><img className='w-full h-full object-cover' src="https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-3_bw6s7h.jpg" alt="" /></div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default arts