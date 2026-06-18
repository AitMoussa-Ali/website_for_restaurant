import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Commander from './components/Commander'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Specialites from './components/Specialites'
import Signatures from './components/Signatures'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grain bg-coal-900 min-h-screen">
      <Navbar />
      <Hero />
      <Signatures />
      <Menu />
      <Specialites />
      <Commander />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
