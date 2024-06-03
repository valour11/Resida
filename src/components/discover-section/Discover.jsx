import React from 'react'
import './Discover.css'
import Button from '../../shared/button/Button'
import dicoverbg from '../../assets/discoverBg_img.png'

const Discover = () => {
  return (
    <div className='discover_container'>
        
            <div className='bg_image'>
                <img src={dicoverbg} alt="" />
            </div>
            <div className='discover_text'>
                <div className='discover_inner_container'>
                    <h1>Discover a place you'll </h1>
                    <h1>love to live</h1>
                    {/* <p>Save properties, create alerts and keep track of the enquiries you send to agents</p> */}
                <   div className='discover_button'>
                    <Button btnName="Download our App" outline />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Discover