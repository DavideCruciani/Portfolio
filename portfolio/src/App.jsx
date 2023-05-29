/* COMPONENTI */
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Progetti from "./components/Progetti"
import Contattami from "./components/Contattami"
import Footer from "./components/Footer"
/* IMMAGINI */
import logo from "./assets/logo.png"


function App() {
  return (
    <>
    <Navbar logo={logo}/>
    <Hero />
    <Skills />
    <Progetti />
    <Contattami />
    <Footer />
    </>
  )
}

export default App
