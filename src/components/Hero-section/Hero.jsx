import React from 'react'
import './HeroStyle.css'
import hero from '../../assets/hero-section-img.png'
import Button from '../../shared/button/Button';

const Hero = () => {
  return (
    <div className='hero-main'>
      <div className='hero-bg'>
        <img src={hero} alt="hero-pics" />
      </div>
        <div className='text-container'>
            <h2 className='text'>
              Finding the perfect home has <br /> never been this easy</h2>
            <h2 className='sub-text'>Eliminate stressful house searches. we link you with the lagos finest and most affordable <br />
            residence <span>-zero agent fee, middle men payment and hassles</span></h2>
            <div className='buttons'>
              <div>
                <Button btnName="Download App" outline />
              </div>
              <div>
                <Button btnName="Learn More" outline />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Hero