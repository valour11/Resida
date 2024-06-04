import React from 'react'
import './FooterStyle.css'
import socialIcons from '../../assets/footer_social_icons.png' 
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer_container'>
      <section className='section1_container'>
        <div className='section1a'>
          <h1>Resida</h1>
          <p>Follow us on the all social platforms</p>
          <div className='social_icons'>
            <img src={socialIcons} alt="icons" />
          </div>
        </div>
        <div className='services'>
          <div>
            <p>Product</p>
            <p>Pricing</p>
            <p>Case studies</p>
            <p>Reviews</p>
            <p>Update</p>
          </div>
          <div>
            <p>Company</p>
            <p>Contact us</p>
            <p>Careers</p>
            <p>Culture</p>
            <p>Blog</p>
          </div>
          <div>
            <p>Support</p>
            <p>Help center</p>
            <p>Service status</p>
            <p>Report a bug</p>
            <p>Chat Support</p>
          </div>
          <div>
            <p>Legal</p>
            <p>Privacy policy</p>
            <p>User Terms of use</p>
            <p>Payments & pricing policy</p>
            <p>Cookies & Data Privacy</p>
          </div>
        </div>
      </section>
      <div className='contact_address'>
        <p>
        <MdOutlineEmail /> contact@resida.com
        <IoCallOutline /> +234 7043456740
        <MdOutlineLocationOn /> 794 Mcallister St San Francisco, 94102
        </p>
      </div>
      <div className='tick_line'></div>
      <div className='copyright'>
        <p>Copyright <MdCopyright />
          2024 Pora Academy</p>
        <p>All Rights Reserved | <a href="">Terms and Conditions | Privacy Policy</a></p>
      </div>
    </div>
  )
}

export default Footer