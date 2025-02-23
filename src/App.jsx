import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Joinus from './components/Joinus' 
import Contact from './components/Contact' 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar /> 
  
      <Hero />
      <Joinus />
      
      <Contact />
      <Footer />  

   
    </>
  )
}

export default App
