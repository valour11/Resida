import { useState } from 'react'
import './AppStyles.css'
import Header from './shared/Header/Header'
import Hero from './components/Hero-section/Hero'
import OurExperience from './components/ourExperience'
import SubHero from './components/sub-hero-section/subHero'
import NotJustAnApp from './components/NotJustAnApp/NotJustAnApp'
import DreamHome from './components/yourDreamHome/dreamHome'
// import FeaturedCard from './components/Featured card/FeaturedCard'
import justApp from './assets/not-just-an-app-img.png'
import GuideImage from './assets/comprehensive-img.png'
import FeaturedProp from './components/FeaturedProperties/FeaturedProp'
// import Button from './shared/button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <SubHero/>

      {/* not just an app section */}
      <NotJustAnApp 
      image= {justApp}
      title="Resida is Not Just an App"
      subTitle="We are an ecosystem with you at the center"
      body= "Resida aims to bridge the gap between potential tenants and available properties. This app is not just a tool; it's a solution for individuals and families who are navigating the challenging terrain of apartment hunting in a new or familiar city."
      imageStyle={"justApp_img img"}
      button={'justApp-button'}
      textStyle={'justApp_text'}
      />
      
      <OurExperience/>
      <DreamHome/>

      {/* comprehensive guide section */}
      <NotJustAnApp 
      image={GuideImage}
      title="Comprehensive"
      subTitle="Neighborhood Guides"
      body= "The 'Neighborhood Guides' in Resida are like your friendly local experts, giving you the inside scoop on the vibe, hotspots, and quirks of each area so you can find your perfect match effortlessly! 🏡✨"
      imageStyle={"guide_img img"}
      button={'guide-button'}
      textStyle={'guide_text'}
      />
      <FeaturedProp/>
      {/* <FeaturedCard/> */}
    </>
  )
}

export default App
