import React, { useState } from 'react'
import './Navbar.css'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = ({logo}) => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='w-full max-w-[2400px] mx-auto h-20 bg-transparent fixed top-0 left-0 right-0 flex justify-between py-5 px-4 md:px-12 xl:px-20 z-[900]'>
      <div className='h-full'>
        <a href="#">
          <img className='h-full' src={logo} alt="Logo" />
        </a>
      </div>
      <div className='flex items-center'>
        <ul className='hidden xl:flex gap-8 text-white font-Anton ul-list uppercase text-lg'>
          <li><a className='hover:text-gray-200' href="#">Home</a></li>
          <li><a className='hover:text-gray-200' href="#skills">Skills</a></li>
          <li><a className='hover:text-gray-200' href="#progetti">Progetti</a></li>
          <li><a className='hover:text-gray-200' href="#contattami">Contattami</a></li>
        </ul>
      </div>
      <div className='xl:hidden z-[999]' onClick={handleNav}>
        {nav ? <AiOutlineClose className='cursor-pointer' size={30} color='white'/> : <AiOutlineMenu className='cursor-pointer' size={30} color='white'/>}
      </div>
      <div className={nav ? 'fixed xl:hidden right-0 top-0 text-center p-4 w-1/2 h-full items-center custom-blur ease-in-out duration-300' : 'fixed xl:hidden top-0 text-center p-4 w-1/2 h-full items-center custom-blur right-[-100%] ease-in-out duration-300'}>
        <ul className='flex flex-col gap-12 py-20 h-full w-full text-white font-Anton ul-list uppercase text-2xl'>
          <li><a className='hover:text-gray-200' href="#">Home</a></li>
          <li><a className='hover:text-gray-200' href="#skills">Skills</a></li>
          <li><a className='hover:text-gray-200' href="#progetti">Progetti</a></li>
          <li><a className='hover:text-gray-200' href="#contattami">Contattami</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar