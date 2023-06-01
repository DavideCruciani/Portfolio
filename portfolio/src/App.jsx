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


function App() {
  return (
    <>
    <Navbar logo={logo}/>
    <Hero />
    <Skills illustrazione={illustrazione}/>
    <Progetti />
    <Contattami />
    <Footer />
    </>
  )
}

export default App
