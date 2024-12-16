import { useState } from 'react'
import './App.css'
import HomeLayout from './pages/HomeLayout'
import Navbar from './components/core/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <HomeLayout/>
   </>
  )
}

export default App
