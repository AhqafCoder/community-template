import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Joinus from './components/Joinus' 
import Contact from './components/Contact'  
import FloatingReview from "./components/FloatingReview";
import WhyChooseUs from "./components/WhyChooseUs";
import EventPage from "./components/EventPage";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar /> 
      <FloatingReview />
      <Hero />
      <Joinus />
      <EventPage />
      <WhyChooseUs />

      <Contact />
      <Footer />  

   
    </>
  )
}

export default App
