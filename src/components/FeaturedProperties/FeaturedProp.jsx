import React from 'react'
import './FeaturedProps.css'
import image1 from '../../assets/featuredProp-img1.png'
import image2 from '../../assets/featuredProp-img2.png'
import image3 from '../../assets/featuredProp-img3.png'
import FeaturedCard from '../../components/Featured card/FeaturedCard'

const FeaturedProp = ({image1, image2, image3, }) => {
  return (
    <main className='card_container'>
        <div className='inner_container'>
            <section className='title'>
                <h1>Featured Properties</h1>
                <p>Explore our curated selection of premier properties, meticulously chosen to suit every lifestyle and budget. From luxurious penthouses </p>
                <p>to cozy family homes, our featured listings showcase the best of Lagos living.</p>
            </section>
            <section className='image_container'>
                <figure>
                    <img src={image1} alt="" />
                    <FeaturedCard
                    title="Lillian Pepple Estate"
                    type1="Duplexes"
                    type2="Bungalows"
                    type3="Self-Contains"
                    featuredText="From NGN1,500,000/year"/>
                </figure>
                <figure>
                    <img src={image2} alt="" />
                    <FeaturedCard
                    title="Horeb Accomodations"
                    type1="3 Bedroom Flats"
                    type2="Bungalows"
                    type3="Student's Accomodations"
                    featuredText="From NGN2,500,000/year"/>
                </figure>
                <figure>
                    <img src={image3} alt="" />
                    <FeaturedCard
                    title="Naanchin Homes"
                    type1="Mansions"
                    type2="Bungalows"
                    type3="Office Spaces"
                    featuredText="From NGN500,000/year"/>
                </figure>
            </section>
        </div>
    </main>
  )
}

export default FeaturedProp