import React from 'react'

const Footer = ({arrow}) => {
  return (
    <footer className='w-full h-32 bg-[#1C1C1C] relative'>
      <div className="container w-full h-full flex mx-auto p-4">
      <div className='w-full h-full flex flex-col md:flex-row justify-between items-center'>
        <div>
          <p className='text-white text-lg'>Website by <span className='font-Marker text-blue-500'>Davide Cruciani</span></p>
          <div className='flex gap-4'>
            <a href="https://github.com/DavideCruciani" target='_blank'>
              <i className="devicon-github-original text-3xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/davide-cruciani-7b696a270/" target='_blank'>
              <i className="devicon-linkedin-plain colored text-3xl"></i>
            </a>
          </div>
        </div>
        <p className="text-white">Education illustration by <a href="https://storyset.com/education" className="text-blue-500" target="_blank" rel="noopener">Storyset</a></p>
      </div>
      
      </div>
      <a href="#" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className='bg-blue-500 rounded-full p-2'>
          <img className='w-4' src={arrow} alt="up arrow" />
        </div>
      </a>
    </footer>
  )
}

export default Footer