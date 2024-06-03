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
    // <main className='card_container'>
    //     <div className='inner_container'>
    //         <section className='title'>
    //             <h1>Featured Properties</h1>
    //             <p>Explore our curated selection of premier properties, meticulously chosen to suit every lifestyle and budget. From luxurious penthouses </p>
    //             <p>to cozy family homes, our featured listings showcase the best of Lagos living.</p>
    //         </section>
    //         <section className='image_container'>
    //             <figure>
    //                 <img src={image1} alt="" />
    //                     <div className='img_title'>
    //                         <h3>Lillian Pepple Estate</h3>
    //                         <IoIosHeart /> 
    //                     </div>
    //                     <div className='housing_types'>
    //                         <span>Dulexes</span>
    //                         <span>Bungalows</span>
    //                         <span>Self-contains</span>
    //                     </div>
    //                     <p className='featured_text'>From NGN1,500,000/year</p>
    //             </figure>
    //             <img src={image2} alt="" />
    //             <img src={image3} alt="" />
            
    //         </section>
    //     </div>
    // </main>
  )
}

export default FeaturedCard