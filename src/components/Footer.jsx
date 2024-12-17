import React from 'react'
import { useDarkMode } from "../contexts/DarkModeContext";


const Footer = () => {
    const { dark } = useDarkMode(); // Access the dark mode state
    
    return (
        <div className={`w-full h-[50vh] flex flex-col justify-end border-t px-7  ${dark ? "border-primary/30" : "border-secondary/30"}`}>
            <div className='w-full h-full flex justify-between items-center font-aboreto'>
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
                        <a className='hover:font-semibold' href="">Services</a>
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