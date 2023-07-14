/* COMPONENTI */
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Progetti from "./components/Progetti"
import Contattami from "./components/Contattami"
import Footer from "./components/Footer"
/* IMMAGINI */
import logo from "./assets/logo.png"
import illustrazione from './assets/Studying.svg'
import screenBMW from './assets/projects/Homepage-BMW.jpg'
import screenHooBank from './assets/projects/HooBank.png'
import screenSpaceTourism from './assets/projects/Space-tourism.jpg'
import screenTracker from './assets/projects/geolocator.png'
import arrow from './assets/up-arrow.svg'


function App() {
  return (
    <>
    <Navbar logo={logo}/>
    <Hero />
    <Skills illustrazione={illustrazione}/>
    <Progetti project1={screenBMW} project2={screenHooBank} project3={screenSpaceTourism} project4={screenTracker}/>
    <Contattami />
    <Footer arrow={arrow}/>
    </>
  )
}

export default App
