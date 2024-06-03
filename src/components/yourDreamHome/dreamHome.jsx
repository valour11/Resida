import React from 'react'
import './dreamHomeStyles.css'
import dreambg from '../../assets/your-dreamhome-bg.png'
import dreamImg from '../../assets/your-dreamhome-img.png'
import NotJustAnApp from '../../components/NotJustAnApp/NotJustAnApp'
import Button from '../../shared/button/Button'

const DreamHome = ({title, subTitle}) => {
  return (
    <div>
        <div className='background-img'>
            <img src={dreambg} alt="background" />
        </div>
        <div className='dream_container'>
            <div className='dream_img'>
                <img src={dreamImg} alt="pic"/>
            </div>
            <div className='dream_text'>
                <h2>Your dream home is only a <br />few clicks away <br />
                    <span>- Find your space now!</span></h2>
                    <div>
                    <Button btnName="Download our App" outline />
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default DreamHome