import React from 'react'
import './ContactBody.css'
import { MdOutlineEmail, MdCall, MdOutlineLocationOn } from "react-icons/md";

const ContactBody = () => {
  return (
    <div className='body_container'>
        <section className='title_section'>
          <h1>Contact Us</h1>
          <p>Any question or remarks? Just write us a message!</p>
        </section>
        <section className='main_body_container'>
          <div className='contact_info'>
            <div>
            <h1>Contact Information</h1>
            <p>Say something to start a live chart!</p>
            </div>
            <div className='contact_socials'>
              <div>
                <MdOutlineEmail /> gideonabel87@gmail.com
              </div>
              <div>
              <MdCall /> +234 7043456740
              </div>
              <div>
              <MdOutlineLocationOn /> 794 Mcallister St San Francisco, 94102
              </div>
            </div>
          </div>
          <div className='form_container'>
            <form action="">
              <fieldset className='fieldset1'>
                <span>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id='first_name' />
                </span>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id='last_name' placeholder='Idoko'/>
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' />
                <label htmlFor="number">Phone Number</label>
                <input type="number" id='number' />
              </fieldset>
              <fieldset>
                <legend>Select Subject</legend>
                <input type="radio" id='inquiry' name='subject'/>
                <label htmlFor="inquiry">General Inquiry</label>
                <input type="radio" id='payment' name='subject'/>
                <label htmlFor="payment">Payment and Fees</label>
                <input type="radio" id='technical' name='subject'/>
                <label htmlFor="technical">Technical</label>
                <input type="radio" id='other' name='subject'/>
                <label htmlFor="other">Other</label>
              </fieldset>
              <fieldset>
                <textarea name="message" id="message"></textarea>
              </fieldset>
            </form>
          </div>
        </section>
    </div>
  )
}

export default ContactBody