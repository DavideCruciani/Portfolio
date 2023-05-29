import React from 'react'
import './Navbar.css'

const Navbar = ({logo}) => {
  return (
    <nav className='w-full h-20 bg-transparent fixed top-0 left-0 right-0 flex justify-between py-5 px-20'>
      <div className='h-full'>
        <a href="#">
          <img className='h-full animate-spin' src={logo} alt="Logo" />
        </a>
      </div>
      <div className='flex items-center'>
        <ul className='flex gap-8 text-white font-Anton ul-list'>
          <li><a className='hover:text-gray-400' href="#">Home</a></li>
          <li><a className='hover:text-gray-400' href="#skills">Skills</a></li>
          <li><a className='hover:text-gray-400' href="#progetti">Progetti</a></li>
          <li><a className='hover:text-gray-400' href="#contattami">Contattami</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar