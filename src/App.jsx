import { useState } from 'react'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
