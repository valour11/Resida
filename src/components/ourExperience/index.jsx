import React from 'react'
import './OurExperienceStyle.css'
import oe_image1 from '../../assets/our_exp_img_1.png'
import oe_image2 from '../../assets/our_exp_img_2.png'
import oe_image3 from '../../assets/our_exp-img_3.png'

const OurExperience = () => {
    return (
        <div className='our_exp_container'>
            <div className='boxes_container'>
                <div className='box1'>
                    <img src={oe_image1} alt="pics" />
                </div>
                <div className='box2'>
                    <img src={oe_image2} alt="pics" />
                </div>
                <div className='box3'>
                    <img src={oe_image3} alt="" />
                </div>
            </div>
            <div className='oe_texts'>
                Our Exeperience guarantees <br />
                Unmatched Proficiency and <br />
                Excellence
            </div>
        </div>
    )
}

export default OurExperience;