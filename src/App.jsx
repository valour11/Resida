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
import Property from './components/haveAproperty-section/Property'
import Discover from './components/discover-section/Discover'
import officeSpaceImage from './assets/officeSpace_img.png'
// import Button from './shared/button/Button'
import PropertyImage from './assets/property_img.png'
import downloadAppImage from './assets/download_img.png'
import circleImage from './assets/propertyCircles_img.png'
import Footer from './shared/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <SubHero
      headingText="Resida nullifies the hassles of agents"
      />

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

      {/* property section */}
      <Property
      circleImg={circleImage}
      circleImageStyles={'circle_image'}
      text="Do you have a property?"
      subtext1="Provide accommodation here in Lagos"
      subtext="Own a property in Lagos? Join our platform to effortlessly list your accommodations and connect with eager tenants seeking their perfect home in the vibrant city of Lagos."
      image={PropertyImage}
      ImageStyles={'property_img_container'}
      button={'property_button'}
      buttonsStyles={'property_buttons_container'}
      textstyles={'property_text'}

      />


      <Discover/>

      {/* office space section */}
      <NotJustAnApp 
      image= {officeSpaceImage}
      title="Need an office space?"
      body= "Seeking office space in Lagos? Look no further! Our accommodations offer tailored solutions to meet your workspace needs, ensuring productivity and comfort in the heart of Lagos"
      imageStyle={"justApp_img img"}
      button={'justApp-button'}
      textStyle={'justApp_text'}
      />

      {/* Download our App section */}
      <Property
      circleImg={circleImage}
      circleImageStyles={'download_circle_image'}
      text="Download our App"
      subtext="With intuitive search features and a curated selection of properties tailored to your preferences, finding your dream home has never been easier. Join thousands of satisfied users who have unlocked the key to their ideal living space with just a tap."
      image={downloadAppImage}
      ImageStyles={'download_img_container'}
      button={'download_button'}
      buttonsStyles={'download_buttons_container'}
      textstyles={'download_text'}
      />

      <Footer/>
    </>
  )
}

export default App
