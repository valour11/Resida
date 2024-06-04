import React from 'react'
import './Property.css'
// import PropertyImage from '../../assets/property_img.png'
import circleImage from '../../assets/propertyCircles_img.png'
import Button from '../../shared/button/Button'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";


const Property = ({image, text, subtext, button, circleImg, subtext1, circleImageStyles, ImageStyles, buttonsStyles, textstyles}) => {
  return (
    <div className='property_container'>
        <div className='property_inner_container'>
            <div className='text_container'>
                <div className={circleImageStyles}>
                    <img src={circleImg} alt="pics" />
                </div>
                <div className={textstyles}>
                    <h2>{text}</h2>
                <div className='property_span'><span>{subtext1}</span></div>
                <p>{subtext}</p>
                </div>
                <div className={button}>
                    <Button btnName="Download our App" outline />
                </div>
                <div className={buttonsStyles}>
                    <div className='button_items'>
                        <FaApple /> |
                        <div>
                            <p>Download on the</p>
                            <p>Apple Store</p>
                        </div>
                    </div>
                    <div className='button_items'>
                        <FaGooglePlay /> |
                        <div>
                            <p>Get it On</p>
                            <p>Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ImageStyles}>
                <img src={image} alt="pics" />
            </div>
        </div>
    </div>
  )
}

export default Property