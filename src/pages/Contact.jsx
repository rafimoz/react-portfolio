import React from 'react'
import { useDarkMode } from '../contexts/DarkModeContext';

const Contact = () => {
  const { dark } = useDarkMode(); // Access the dark mode state

  return (
    <section id="contact" className='w-full flex flex-row justify-end items-center py-[100px] px-7'>
    <div className="w-full sm:w-[50%]">
      <h2 className='w-full font-bodoni text-4xl sm:text-8xl lg:text-9xl mb-14 text-end'>Contact</h2>
      <div className="mail w-full">
        <span className='text-xl font-aboreto'>MAIL ME</span>
        <form className='mt-4 flex flex-col gap-6' action="https://api.web3forms.com/submit" method="POST">
          <input className={`border ${dark ? "border-primary" : "border-secondary"} rounded-lg h-10 p-3 bg-transparent`} type="hidden" name="access_key" placeholder="Email" value="6bdad1f6-5edb-41e6-87c5-4abbc186a9e3" />
          <input className={`border ${dark ? "border-primary" : "border-secondary"}  rounded-lg h-10 p-3 bg-transparent`} type="text" name="name" placeholder="Name" required />
          <input className={`border ${dark ? "border-primary" : "border-secondary"}  rounded-lg h-10 p-3 bg-transparent`} type="email" name="email" placeholder="Email" required />
          <textarea className={`h-[100px] rounded-lg p-3 border ${dark ? "border-primary" : "border-secondary"} bg-transparent`} name="message" placeholder="Message" required></textarea>
          <button className={`w-full ${dark ? "bg-primary text-secondary" : "bg-secondary text-primary"} font-aboreto rounded-lg py-2`} type="submit" >Submit</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact