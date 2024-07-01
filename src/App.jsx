import { useState } from 'react'

import './App.css'
import HomePageLayout from './layouts/homePage/HomePageLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePageLayout/>
    </>
  )
}

export default App
