import React, { useEffect, useRef } from 'react'
import { useDarkMode } from "../contexts/DarkModeContext";
import { gsap } from 'gsap';

const Footer = () => {
    const { dark } = useDarkMode(); // Access the dark mode state
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);

    useEffect(() => {
        const textElement1 = textRef1.current;
        const textElement2 = textRef2.current;

        gsap.set(textElement2, { xPercent: 100 }); // Set initial position of second text

        const tl = gsap.timeline({ repeat: -1 });

        tl.to([textElement1, textElement2], {
            xPercent: "-=100",
            duration: 20,
            ease: "linear",
        });

    }, []);

    return (
        <div className={`w-full flex flex-col justify-end overflow-hidden`}>
            <div className='w-full h-[70vh] flex flex-col items-center justify-center gap-9'>
                <div className='text-center items-center flex flex-col gap-4'>
                    <h2 className='font-aboreto text-xl'>Project in mind?</h2>
                    <div className='overflow-hidden whitespace-nowrap relative'>
                        <h1 ref={textRef1} className='font-aboreto text-5xl sm:text-8xl inline-block'>
                            let's make your Website shine! &nbsp;
                        </h1>
                        <h1 ref={textRef2} className='font-aboreto text-5xl sm:text-8xl inline-block absolute top-0 left-0'>
                            let's make your Website shine! &nbsp;
                        </h1>
                    </div>
                    <h2 className='w-[300px] sm:w-[700px] font-aboreto text-sm sm:text-xl'>Where design meets development: Seamless digital solutions</h2>
                </div>
                <div>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mozumder.rafi1@gmail.com&su=Looking%20for%20a%20Web%20Developer%20or%20Designer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={`font-aboreto p-2 rounded-lg text-xs ${dark ? "bg-primary text-secondary hover:bg-primary/80" : "bg-secondary text-primary hover:bg-secondary/80"}`}>
                            GET IN TOUCH
                        </button>
                    </a>

                </div>
            </div>

            <div className={`w-full h-[30vh] flex justify-between items-center font-aboreto border-t px-7 ${dark ? "border-primary/30 " : "border-secondary/30"}`}>
                <div className='flex flex-col gap-3'>
                    <p>Social Links</p>
                    <div className='flex flex-col mt-4 text-sm'>
                        <a className='hover:font-semibold' href="https://www.instagram.com/raafi.jpeg/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a className='hover:font-semibold' href="https://www.facebook.com/ami.rafimozumder" target="_blank" rel="noopener noreferrer">facebook</a>
                        <a className='hover:font-semibold' href="https://www.linkedin.com/in/rafi-mozumder/" target="_blank" rel="noopener noreferrer">linkedin</a>
                        <a className='hover:font-semibold' href="https://github.com/rafimoz" target="_blank" rel="noopener noreferrer">github</a>
                    </div>
                </div>
                <div className='flex flex-col gap-2 text-end'>
                    <p>Pages</p>
                    <div className='flex flex-col mt-4 text-sm'>
                        <a className='hover:font-semibold' href="#home">Home</a>
                        <a className='hover:font-semibold' href="#about">About</a>
                        <a className='hover:font-semibold' href="#work">Works</a>
                        <a className='hover:font-semibold' href="#contact">Contact</a>
                    </div>
                </div>
            </div>
            <div className={`w-full text-center py-2 border-t ${dark ? "border-primary/30" : "border-secondary/30"}`}>
                <p>All copyrights reserved @ Rafi Mozumder</p>
            </div>
        </div>
    )
}

export default Footer