import React from 'react'
import './OurExperienceStyle.css'
// import our_exp_img_1.png from './assets/'

const OurExperience = () => {
    return (
        <div className='our_exp_container'>
            <div className='boxes_container'>
                <div className='box1'>
                    {/* <img src={image} alt="" /> */}
                    </div>
                <div className='box2'>hello</div>
                <div className='box3'>hello</div>
            </div>
            <div className='texts'>
                {`Our Exeperience guarantees ${<br/>}
                Unmatched Proficiency and
                Excellence`}
            </div>
        </div>
    )
}

export default OurExperience;