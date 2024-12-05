import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[50vh] flex flex-col justify-end border-t px-7 border-primary/30'>
            <div className='w-full h-full flex justify-between items-center font-aboreto'>
                <div className='flex flex-col gap-3'>
                    <p>Social Links</p>
                    <div className='flex flex-col mt-4 text-sm'>
                        <a className='hover:font-semibold' href="">Instagram</a>
                        <a className='hover:font-semibold' href="">facebook</a>
                        <a className='hover:font-semibold' href="">linkdin</a>
                        <a className='hover:font-semibold' href="">github</a>
                    </div>
                </div>
                <div className='flex flex-col gap-2 text-end'>
                    <p>Pages</p>
                    <div className='flex flex-col mt-4 text-sm'>
                        <a className='hover:font-semibold' href="#home">Home</a>
                        <a className='hover:font-semibold' href="#about">About</a>
                        <a className='hover:font-semibold' href="">Works</a>
                        <a className='hover:font-semibold' href="">Services</a>
                    </div>
                </div>
            </div>
            <div className='w-full text-center py-2 border-t border-primary/30'>
                <p>All copyrights reserved @ Rafi Mozumder</p>
            </div>
        </div>
    )
}

export default Footer