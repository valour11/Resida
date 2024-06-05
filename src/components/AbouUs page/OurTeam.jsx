import React from 'react'
import './ourTeam.css'

const OurTeam = () => {
  return (
    <div>
        <div className='team_container'>
            <section className='team_title'>
                <h1>Meet our Team</h1>
                <p>The men and women that has worked tirelessly to bring Resida to life</p>
            </section>
            <section className='team_img_container'>
              <div>
                <figure></figure>
                  <figcaption>
                    <h2>Gideon Abel</h2>
                    <p>Frontend Developer</p>
                  </figcaption>
              </div>
              <div>
                <figure></figure>
                  <figcaption>
                    <h2>Simon Gabriel</h2>
                    <p>Designer</p>
                  </figcaption>
              </div>
              <div>
                <figure></figure>
                  <figcaption>
                    <h2>Geoarge White</h2>
                    <p>UI/Ux</p>
                  </figcaption>
              </div>
              <div>
                <figure></figure>
                  <figcaption>
                    <h2>Mercy John</h2>
                    <p>Marketing</p>
                  </figcaption>
              </div>
            </section>
        </div>
    </div>
  )
}

export default OurTeam