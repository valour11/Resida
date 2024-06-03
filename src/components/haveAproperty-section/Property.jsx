import React from 'react'
import './Property.css'
import PropertyImage from '../../assets/property_img.png'
import circleImage from '../../assets/propertyCircles_img.png'
import Button from '../../shared/button/Button'

const Property = () => {
  return (
    <div className='property_container'>
        <div className='property_inner_container'>
            <div className='text_container'>
                <div className='circle_image'>
                    <img src={circleImage} alt="pics" />
                </div>
                <div className='property_text'>
                    <h2>Do you have a property?</h2>
                <div className='property_span'><span>Provide accommodation here in Lagos</span></div>
                <p>Own a property in Lagos? Join our platform to effortlessly list your accommodations and connect with eager tenants seeking their perfect home in the vibrant city of Lagos.</p>
                </div>
                <div className='property_button'>
                    <Button btnName="Download our App" outline />
                </div>
            </div>
            <div className='property_img_container'>
                <img src={PropertyImage} alt="pics" />
            </div>
        </div>
    </div>
  )
}

export default Property