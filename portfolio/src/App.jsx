/* COMPONENTI */
import Navbar from "./components/Navbar"
/* IMMAGINI */
import logo from "./assets/logo.png"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Progetti from "./components/Progetti"
import Contattami from "./components/Contattami"
import Footer from "./components/Footer"

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
