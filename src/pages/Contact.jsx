import React from 'react'
import { useDarkMode } from '../contexts/DarkModeContext';

const Contact = () => {
  const { dark } = useDarkMode(); // Access the dark mode state

  return (
    <section id="contact" className='w-full flex flex-row justify-end items-center py-[100px] sm:px-8 px-4'>
    <div className="w-full sm:w-[50%]">
      <h2 className='w-full font-bodoni text-5xl sm:text-7xl mb-14 text-center sm:text-end'>Contact</h2>
      <div className="mail w-full">
        <span className='sm:text-xl text-lg font-aboreto'>MAIL ME</span>
        <form className='sm:mt-4 mt-2 flex flex-col sm:gap-6 gap-4' action="https://api.web3forms.com/submit" method="POST">
          <input className={`border ${dark ? "border-primary" : "border-secondary"} rounded-xl h-10 p-3 bg-transparent`} type="hidden" name="access_key" placeholder="Email" value="6bdad1f6-5edb-41e6-87c5-4abbc186a9e3" />
          <input className={`border ${dark ? "border-primary" : "border-secondary"}  rounded-xl h-10 p-3 bg-transparent`} type="text" name="name" placeholder="Name" required />
          <input className={`border ${dark ? "border-primary" : "border-secondary"}  rounded-xl h-10 p-3 bg-transparent`} type="email" name="email" placeholder="Email" required />
          <textarea className={`h-[100px] rounded-xl p-3 border ${dark ? "border-primary" : "border-secondary"} bg-transparent`} name="message" placeholder="Message" required></textarea>
          <button className={`w-full ${dark ? "bg-primary text-secondary" : "bg-secondary text-primary"} font-aboreto rounded-xl py-2`} type="submit" >Submit</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact