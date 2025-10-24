import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Home'
import './Contact'
import './About'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
       <Home />
       <Contact />
       <About />

   </>
     
  )
}

export default App
