import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Hero from './Components/Hero'
import './App.css'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <div className='md:ml-24 md:mr-24 md:mt-10 ml-2 mr-1.5 mt-6'>
    <Hero />
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    </div>
 
    
    </>
  )
}

export default App
