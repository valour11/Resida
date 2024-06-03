import React from 'react'
import './NotJustAnApp.css'
import Button from '../../shared/button/Button'
// import { FaArrowRightLong } from "react-icons/fa6";
// import justApp from '../../assets/not-just-an-app-img.png'

const NotJustAnApp = ({image, title, subTitle, body, imageStyle, button, textStyle}) => {
  return (
    <div className='section_container'>
      <div className={imageStyle}>
        <img src={image} alt="pic"/>
      </div>
      <div className={textStyle}>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p>{body} </p>
        <div className={button}>
          <Button btnName="Download App"/>
          {/* <FaArrowRightLong /> */}
        </div>
      </div>
    </div>
    // <div className='section_container'>
    //   <div className='justApp_img'>
    //     <img src={justApp} alt="pic"/>
    //   </div>
    //   <div className='justApp_text'>
    //     <h2>{title}</h2>
    //     <h3>{subTitle}</h3>
    //     <p>Resida aims to bridge the gap between potential tenants and <br /> available properties. This app is not just a tool; it's a solution for <br />individuals and families who are navigating the challenging terrain <br />of apartment hunting in a new or familiar city. </p>
    //   </div>
    // </div>
  )
}

export default NotJustAnApp