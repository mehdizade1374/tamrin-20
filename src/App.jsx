import { createContext, useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './assets/components/Header'
import { useContext } from 'react'
export const Color = createContext();

function App() {


 const[color , setColor]=useState('')


  return (
    <>
     
        <Color.Provider value={[color , setColor]}>
      <section >          
             <Header />
      </section>

      <section id="center" className={color}  >

          <h1>Get started</h1>
           
      </section>
      </Color.Provider>

    </>
  )
}

export default App
