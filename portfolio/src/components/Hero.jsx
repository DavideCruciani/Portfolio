import { useInView } from 'react-intersection-observer';
import {FiArrowDown} from 'react-icons/fi'
import './Hero.css'

const Hero = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <section className='hero-section bg-no-repeat bg-cover bg-bottom bg-blue-500 w-full h-screen flex'>
      <div ref={myRef} className={myElementIsVisible ? 'container mx-auto px-4 text-center opacity-100 blur-0 duration-[1s] delay-[250ms]' : 'container mx-auto px-4 text-center opacity-0 blur-[5px] bg-transparent'}>
        <h3 className='text-white font-Marker text-2xl xs:text-4xl sm:text-5xl mt-32 mb-4'>Davide Cruciani</h3>
        <h1 className='text-white font-Anton text-6xl xs:text-8xl sm:text-9xl'>Frontend Developer</h1>
        <a href="#skills" className='bg-white inline-block rounded-full p-1 sm:p-3 mt-12 xl:animate-bounce'>
          <FiArrowDown size={30} color='#3B82F6'/>
        </a>
      </div>
    </section>
  )
}

export default Hero