import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Count from './components/Count/Count'






function App() {
  

  const greeting = "Bienveni@s a THUNDER TIRES"

  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje={greeting}/>

    </>
  )
}

export default App
