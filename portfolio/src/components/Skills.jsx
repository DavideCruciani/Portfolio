import React from 'react'

const Skills = ({illustrazione}) => {
  return (
    <section className='bg-[url(src/assets/section2.svg)] bg-no-repeat bg-cover w-full h-screen' id='skills'>
      <div className='container h-full flex items-center mx-auto px-4'>
        
        <div className='w-full hidden xl:inline-block'>
          <img className='scale scale-x-[-1] w-full' src={illustrazione} alt="Un ragazzo che studia" />
        </div>

        <div className='w-full'>
          <h1 className='text-white text-5xl sm:text-6xl md:text-7xl text-center font-Marker py-12'>LE MIE SKILLS</h1>
          <div className='w-full grid gap-3 md:gap-6 grid-rows-4 grid-cols-2 md:grid-rows-3 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-4 font-Marker'>
            <div className='text-center hover:scale-[1.1]'>
              <i className="devicon-html5-plain colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>HTML5</p>
            </div>
            <div className='text-center hover:scale-[1.1]'>
              <i className="devicon-css3-plain colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>CSS3</p>
            </div>
            <div className='text-center hover:scale-[1.1]'>
              <i className="devicon-javascript-plain colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>JAVASCRIPT</p>
            </div>
            <div className='text-center hover:scale-[1.1]'>
              <i className="devicon-react-original colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>REACT</p>
            </div>
            <div className='text-center hover:scale-[1.1]'>
              <i className="devicon-typescript-plain colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>TYPESCRIPT</p>
            </div>
            <div className='text-center hover:scale-[1.1]'>
              <i className="devicon-github-original colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>GITHUB</p>
            </div>
            <div className='text-center hover:scale-[1.1]'>
              <i className="devicon-bootstrap-plain colored text-7xl sm:text-8xl md:text-9xl"></i>
              <p className='text-white md:text-lg font-bold mt-3'>BOOTSTRAP</p>
            </div>
            <div className='text-center hover:scale-[1.1]'>
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