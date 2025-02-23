import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
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
