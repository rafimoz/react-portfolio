import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[60vh] flex flex-col justify-end border-t px-7 border-primary/30'>
        <div className='w-full h-full mt-7 flex justify-between font-aboreto'>
            <div className='flex flex-col gap-2'>
                <p>Social Links</p>
                <a href="">IG</a>
                <a href="">FB</a>
                <a href="">LINK</a>
                <a href="">GT</a>
            </div>
            <div className='flex flex-col gap-2'>
                <p>Pages</p>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="">LINK</a>
                <a href="">GT</a>
            </div>
        </div>
        <div className='w-full text-center border-t border-primary/20'>
            <p>All copyrights reserved @ Rafi Mozumder</p>
        </div>
    </div>
  )
}

export default Footer