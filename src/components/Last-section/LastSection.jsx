import React from 'react'
import './LastSection.css'
import Button from '../../shared/button/Button'
import LastImg from '../../assets/groupedPhone.png'

const LastSection = () => {
  return (
    <div>
        <div className='last_container'>
            <section className='last_title'>
                <h1>Download our App</h1>
                <p>With intuitive search features and a curated selection of properties tailored to your preferences, finding your dream home has never been easier. Join thousands of satisfied users who have unlocked the key to their ideal living space with just a tap.</p>
            </section>
            <div className='last_button'>
                <Button btnName='Download App'/>
            </div>
            <div className='last_img'>
                <img src={LastImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LastSection