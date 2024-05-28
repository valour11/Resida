import { useState } from 'react'
import Header from './shared/Header/Header'
import Hero from './components/Hero-section/Hero'
// import OurExperience from './components/ourExperience'
import SubHero from './components/sub-hero-section/subHero'
import NotJustAnApp from './components/NotJustAnApp/NotJustAnApp'
// import FeaturedCard from './components/Featured card/FeaturedCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <SubHero/>
      <NotJustAnApp/>
      {/* <FeaturedCard/> */}
      {/* <OurExperience/> */}
    </>
  )
}

export default App
