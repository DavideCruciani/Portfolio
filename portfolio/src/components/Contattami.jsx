import React from 'react'
import { useInView } from 'react-intersection-observer';
import './Contattami.css'

const Contattami = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <section className='contact-section bg-no-repeat bg-cover w-full h-screen' id='contattami'>
      <div ref={myRef} className={myElementIsVisible ? 'container h-full flex items-center mx-auto px-4 opacity-100 blur-0 duration-[1s] delay-[250ms]' : 'container h-full flex items-center mx-auto px-4 opacity-0 blur-[5px] bg-transparent'}>
          <form className='flex flex-col gap-3 mx-auto max-w-[600px] w-full' action="https://getform.io/f/8de1651c-4bc5-4435-9f7b-cc69853be0f6" method='POST'>
            <h1 className='text-white text-5xl sm:text-6xl md:text-7xl text-center font-Marker'>Contattami</h1>
            <p className='text-white text-lg mb-8'>// Compila questo modulo o contattami a questa email - <span className='font-bold italic text-[#3B82F6]'>cruciani240203@gmail.com</span></p>
            <input className='p-2 rounded-md' type="text" name="name" placeholder='Nome' required />
            <input className='p-2 rounded-md' type="email" name="email" placeholder='Email' required />
            <textarea className='p-2 rounded-md resize-none' name="message" cols="30" rows="10" placeholder='Messaggio' required></textarea>
            <button className='bg-[#3B82F6] text-white py-2 font-Marker rounded-md active:bg-[#5e5e5e]' type="submit">INVIA</button>
          </form>
        
      </div>
    </section>
  )
}

export default Contattami