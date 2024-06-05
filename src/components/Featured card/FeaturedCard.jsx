import React from 'react'
import './FeaturedCard.css'
import { IoIosHeart } from "react-icons/io";

const FeaturedCard = ({title, featuredText, type1, type2, type3}) => {
  return (
    <div>
        <div className='img_title'>
            <h3>{title}</h3>
            <IoIosHeart /> 
        </div>
        <div className='housing_types'>
            <span>{type1}</span>
            <span>{type2}</span>
            <span>{type3}</span>
        </div>
        <p className='featured_text'>{featuredText}</p>
    </div>
    
  )
}

export default FeaturedCard