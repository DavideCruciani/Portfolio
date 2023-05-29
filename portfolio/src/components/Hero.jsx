import React from 'react'

const Hero = () => {
  return (
    <section className='bg-[url(src/assets/mountains.svg)] bg-no-repeat bg-cover bg-bottom bg-blue-500 w-full h-screen flex'>
      <div className='container mx-auto px-4 text-center'>
        <h3 className='text-white font-Anton text-5xl mt-32 mb-4'>Davide Cruciani</h3>
        <h1 className='text-white font-Anton text-9xl'>Frontend Developer</h1>
      </div>
    </section>
  )
}

export default Hero