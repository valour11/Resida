import React from 'react'
import './NotJustAnApp.css'
import justApp from '../../assets/not-just-an-app-img.png'

const NotJustAnApp = () => {
  return (
    <div className='section_container'>
      <div className='justApp_img'>
        <img src={justApp} alt="pic" />
      </div>
      <div className='justApp_text'>
        <h2>Resida is Not Just an App</h2>
        <h3>We are an ecosystem with you at the center</h3>
        <p>Resida aims to bridge the gap between potential tenants and <br /> available properties. This app is not just a tool; it's a solution for <br />individuals and families who are navigating the challenging terrain <br />of apartment hunting in a new or familiar city. </p>
      </div>
    </div>
  )
}

export default NotJustAnApp