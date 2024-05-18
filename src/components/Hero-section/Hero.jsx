import React from 'react'
import './HeroStyle.css'
import hero from '../../assets/hero-section-img.png'
import Button from '../../shared/button/Button';

const Hero = () => {
  return (
    <div className='hero-main'>
        <img src={hero} alt="hero-pics" />
        <div>
          <h2 className='text'>
            Finding the perfect home has <br /> never been this easy</h2>
          <h2 className='sub-text'>Eliminate stressful house searches. we link you with the lagos finest and most affordable <br />
          residence <span>-zero agent fee, middle men payment and hassles</span></h2>
        </div>
        <div className='buttons'>
          <Button btnName="Download App" outline />
          <Button btnName="Learn More" outline />
        </div>
    </div>
  )
}

export default Hero