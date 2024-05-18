import { useState } from 'react'
import Header from './shared/Header/Header'
import Hero from '../components/Hero-section/Hero'
// import OurExperience from './components/ourExperience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      {/* <OurExperience/> */}
    </>
  )
}

export default App
