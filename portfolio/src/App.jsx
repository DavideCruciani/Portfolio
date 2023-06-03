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
import screenBMW from './assets/projects/Homepage-BMW.png'
import screenFoodiebox from './assets/projects/Foodiebox.png'
import screenSpaceTourism from './assets/projects/Space-tourism.png'


function App() {
  return (
    <>
    <Navbar logo={logo}/>
    <Hero />
    <Skills illustrazione={illustrazione}/>
    <Progetti project1={screenBMW} project2={screenFoodiebox} project3={screenSpaceTourism} />
    <Contattami />
    <Footer />
    </>
  )
}

export default App
