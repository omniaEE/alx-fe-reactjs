import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProfile/>
    
    </>
  )
}

export default App
