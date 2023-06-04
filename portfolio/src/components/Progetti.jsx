import React from 'react'
import { useInView } from 'react-intersection-observer';
import './Progetti.css'

const Progetti = ({project1, project2, project3}) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <section className='projects-section bg-no-repeat bg-cover min-h-screen w-full' id='progetti'>
      <div ref={myRef} className={myElementIsVisible ? 'container min-h-screen flex items-center mx-auto px-4 opacity-100 blur-0 duration-[1s] delay-[250ms]' : 'container min-h-screen flex items-center mx-auto px-4 opacity-0 blur-[5px] bg-transparent'}>
        <div className='w-full'>
          <h1 className='text-white text-5xl sm:text-6xl md:text-7xl text-center font-Marker pb-12 pt-20 xs:pt-48 md:pt-0 xl:pt-12'>I MIEI PROGETTI</h1>
          <div className='grid gap-6 grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 py-2'>
            {/* FIRST PROJECT */}
            <div className='max-w-[550px] mx-auto relative group'>
              <div className='absolute w-full h-full bg-[hsl(196,38%,17%)]/[.75] group-hover:opacity-100 opacity-0'>
                <div className='flex flex-col justify-between h-full w-full p-5'>
                  <div>
                    <h2 className='text-white text-4xl lg:text-5xl font-Anton'>BMW CLONE</h2>
                    <div className='flex gap-4 py-3'>
                      <i className="devicon-react-original colored text-3xl"></i>
                      <i className="devicon-tailwindcss-plain colored text-3xl"></i>
                    </div>
                  </div>
                  <div className='flex'>
                    <a href='https://bmw-landingpage-clone.netlify.app/' target='_blank'>
                      <button className='bg-white text-blue-500 hover:bg-gray-300 py-2 px-3 rounded-md mr-4'>LIVE DEMO</button>
                    </a>
                    <a href='https://github.com/DavideCruciani/BMW-LANDING-PAGE-CLONE' target='_blank'>
                      <button className='bg-blue-500 text-white hover:bg-blue-600 py-2 px-3 rounded-md'>CODE</button>
                    </a>
                  </div>
                </div>
              </div>
              <img src={project1} alt="BMW landing page project" />
            </div>
            {/* SECOND PROJECT */}
            <div className='max-w-[550px] mx-auto relative group'>
              <div className='absolute w-full h-full bg-[hsl(196,38%,17%)]/[.75] group-hover:opacity-100 opacity-0'>
                <div className='flex flex-col justify-between h-full w-full p-5'>
                  <div>
                    <h2 className='text-white text-4xl lg:text-5xl font-Anton'>FOODIEBOX</h2>
                    <div className='flex gap-4 py-3'>
                      <i className="devicon-react-original colored text-3xl"></i>
                      <i className="devicon-bootstrap-plain colored text-3xl"></i>
                    </div>
                  </div>
                  <div className='flex'>
                    <a href='https://foodiebox.netlify.app/' target='_blank'>
                      <button className='bg-white text-blue-500 hover:bg-gray-300 py-2 px-3 rounded-md mr-4'>LIVE DEMO</button>
                    </a>
                    <a href='https://github.com/DavideCruciani/Foodiebox' target='_blank'>
                      <button className='bg-blue-500 text-white hover:bg-blue-600 py-2 px-3 rounded-md'>CODE</button>
                    </a>
                  </div>
                </div>
              </div>
              <img src={project2} alt="Foodiebox website" />
            </div>
            {/* THIRD PROJECT */}
            <div className='max-w-[550px] mx-auto relative group'>
              <div className='absolute w-full h-full bg-[hsl(196,38%,17%)]/[.75] group-hover:opacity-100 opacity-0'>
                <div className='flex flex-col justify-between h-full w-full p-5'>
                  <div>
                    <h2 className='text-white text-4xl lg:text-5xl font-Anton'>SPACE TOURISM</h2>
                    <div className='flex gap-4 py-3'>
                      <i className="devicon-react-original colored text-3xl"></i>
                      <i className="devicon-tailwindcss-plain colored text-3xl"></i>
                    </div>
                  </div>
                  <div className='flex'>
                    <a href='https://space-tourism-dc.netlify.app/' target='_blank'>
                      <button className='bg-white text-blue-500 hover:bg-gray-300 py-2 px-3 rounded-md mr-4'>LIVE DEMO</button>
                    </a>
                    <a href='https://github.com/DavideCruciani/Space-tourism-multi-page-website' target='_blank'>
                      <button className='bg-blue-500 text-white hover:bg-blue-600 py-2 px-3 rounded-md'>CODE</button>
                    </a>
                  </div>
                </div>
              </div>
              <img src={project3} alt="Space Tourism website" />
            </div>
            {/* FOURTH PROJECT */}
            <div className='max-w-[550px] mx-auto relative'>
              <div className='absolute w-full h-full bg-[#1b333c]'>
                <div className='flex flex-col justify-between h-full w-full p-5'>
                  <div>
                    <h2 className='text-white text-4xl lg:text-5xl font-Anton'>WORK IN PROGRESS</h2>
                    <div className='flex gap-4 py-3'>
                      <p className='text-[#3B82F6] text-xl'>???????????</p>
                    </div>
                  </div>
                  <div className='flex'>
                      <button disabled className='bg-gray-500 text-blue-900 py-2 px-3 rounded-md mr-4'>LIVE DEMO</button>
                      <button disabled className='bg-blue-900 text-gray-500 py-2 px-3 rounded-md'>CODE</button>
                  </div>
                </div>
              </div>
              <img src={project1} alt="Progetto in arrivo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progetti