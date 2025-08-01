import React, { useEffect, useRef } from 'react'
import { useDarkMode } from "../contexts/DarkModeContext";
import { gsap } from 'gsap';

const Footer = () => {
    const { dark } = useDarkMode(); // Access the dark mode state
    const textRef1 = useRef(null);

    useEffect(() => {
        const marquee = textRef1.current;

        let animation = gsap.fromTo(
            marquee,
            { x: 0 },
            {
                x: () => -marquee.offsetWidth / 2,
                duration: 20,
                ease: "linear",
                repeat: -1,
            }
        );

        return () => animation.kill(); // Cleanup on unmount
    }, []);



    return (
        <div className={`w-full  flex flex-col justify-end overflow-hidden`}>
            <div className='w-full  h-[70vh] flex flex-col items-center justify-center gap-9'>
                <div className='text-center w-full items-center flex flex-col gap-4'>
                    <h2 className='font-aboreto md:text-4xl text-xl'>Project in mind?</h2>
                    <div className="overflow-hidden w-full whitespace-nowrap">
                        <div className="flex gap-0 w-max" ref={textRef1}>
                            {[...Array(3)].map((_, i) => (
                                <h1
                                    key={i}
                                    className="font-aboreto text-5xl md:text-9xl"
                                >
                                    - let's make your Website shine! &nbsp;
                                </h1>
                            ))}
                        </div>
                    </div>



                    <h2 className='w-[300px] sm:w-[700px] font-aboreto md:text-xl text-sm'>Where design meets development: Seamless digital solutions</h2>
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

            <div className={`w-full h-[30vh] flex justify-between items-center font-aboreto border-t sm:px-8 px-4 ${dark ? "border-primary/30 " : "border-secondary/30"}`}>
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
                <p className={`sm:text-lg text-sm ${dark ? "text-primary/60" : "text-secondary/60"}`}>All copyrights reserved @ Rafi Mozumder</p>
            </div>
        </div>
    )
}

export default Footer