import React from 'react'
import { useInView } from 'react-intersection-observer';
import './Skills.css'

const Skills = ({illustrazione}) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <section className='skills-section bg-no-repeat bg-cover w-full h-screen' id='skills'>
      <div className='container h-full flex items-center mx-auto px-4'>
        
        <div className='w-full hidden xl:inline-block'>
          <img ref={myRef} className={myElementIsVisible ? 'scale scale-x-[-1] w-full opacity-100 blur-0 duration-[1s]' : 'scale scale-x-[-1] w-full opacity-0 blur-[5px] bg-transparent'} src={illustrazione} alt="Un ragazzo che studia" />
        </div>

        <div className='w-full'>
          <h1 ref={myRef} className={myElementIsVisible ? 'text-white text-5xl sm:text-6xl md:text-7xl text-center font-Marker py-12 opacity-100 blur-0 duration-[2s]' : 'text-white text-5xl sm:text-6xl md:text-7xl text-center font-Marker py-12 opacity-0 blur-[5px] bg-transparent'}>LE MIE SKILLS</h1>
          <div className='w-full grid gap-3 md:gap-6 grid-rows-4 grid-cols-2 md:grid-rows-3 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-4 font-Marker'>
            <div ref={myRef} className={myElementIsVisible ? 'text-center opacity-100 blur-0 duration-[1s] delay-[150ms]' : 'text-center opacity-0 blur-[5px] duration-[1s] bg-transparent'}>
              <i className="devicon-html5-plain colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>HTML5</p>
            </div>
            <div ref={myRef} className={myElementIsVisible ? 'text-center opacity-100 blur-0 duration-[1s] delay-[.3s]' : 'text-center opacity-0 blur-[5px] duration-[1s] bg-transparent'}>
              <i className="devicon-css3-plain colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>CSS3</p>
            </div>
            <div ref={myRef} className={myElementIsVisible ? 'text-center opacity-100 blur-0 duration-[1s] delay-[0.45s]' : 'text-center opacity-0 blur-[5px] duration-[1s] bg-transparent'}>
              <i className="devicon-javascript-plain colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>JAVASCRIPT</p>
            </div>
            <div ref={myRef} className={myElementIsVisible ? 'text-center opacity-100 blur-0 duration-[1s] delay-[.6s]' : 'text-center opacity-0 blur-[5px] duration-[1s] bg-transparent'}>
              <i className="devicon-react-original colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>REACT</p>
            </div>
            <div ref={myRef} className={myElementIsVisible ? 'text-center opacity-100 blur-0 duration-[1s] delay-[.75s]' : 'text-center opacity-0 blur-[5px] duration-[1s] bg-transparent'}>
              <i className="devicon-typescript-plain colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>TYPESCRIPT</p>
            </div>
            <div ref={myRef} className={myElementIsVisible ? 'text-center opacity-100 blur-0 duration-[1s] delay-[.9s]' : 'text-center opacity-0 blur-[5px] duration-[1s] bg-transparent'}>
              <i className="devicon-github-original colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>GITHUB</p>
            </div>
            <div ref={myRef} className={myElementIsVisible ? 'text-center opacity-100 blur-0 duration-[1s] delay-[1.05s]' : 'text-center opacity-0 blur-[5px] duration-[1s] bg-transparent'}>
              <i className="devicon-bootstrap-plain colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>BOOTSTRAP</p>
            </div>
            <div ref={myRef} className={myElementIsVisible ? 'text-center opacity-100 blur-0 duration-[1s] delay-[1.2s]' : 'text-center opacity-0 blur-[5px] duration-[1s] bg-transparent'}>
              <i className="devicon-tailwindcss-plain colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>TAILWIND</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Skills