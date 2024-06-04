import React from 'react'
import './subHero.css'
import Button from '../../shared/button/Button'

const SubHero = () => {
  return (
    <div className='subHero_container'>
      <div className='subHero_inner_container'>
        <div>
          <h2>Resida nullifies the hassles of agents</h2>
          <p>Save properties, create alerts and keep track of the enquiries you send to agents</p>
        </div>
        <div className='button'>
        <Button btnName="Download our App" outline />
        </div>
      </div>
    </div>
  )
}

export default SubHero