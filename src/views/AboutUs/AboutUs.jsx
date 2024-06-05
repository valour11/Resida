import React from 'react'
// import AboutUsBody from '../../components/AbouUs page/AboutUsBody'
import Header from '../../shared/Header/Header'
import circleImage from '../../assets/propertyCircles_img.png'
import whoWeAreImage from '../../assets/whoWeAre_img.png'
import Property from '../../components/haveAproperty-section/Property'
import theManImg from '../../assets/the_man_img.png'
// import FeaturedProp from '../../components/FeaturedProperties/FeaturedProp'
import OurTeam from '../../components/AbouUs page/OurTeam'


const AboutUs = () => {
  return (
    <>
    <Header/>

    {/* who we are section */}
    <Property
      circleImg={circleImage}
      circleImageStyles={'whowe_are_circle_image'}
      text="Who we are!"
      subtext="Resida encompasses the innovative minds shaping the future of urban living. From visionary developers to meticulous designers, each member brings a unique blend of creativity and expertise to the table. Together, we're revolutionizing the way people experience and engage with their living spaces, crafting an app that seamlessly integrates convenience, comfort and community. Get ready to meet your new partners in progress, driving Resida to new heights of success and satisfaction."
      image={whoWeAreImage}
      ImageStyles={'whowe_are_img_container'}
      button={'whowe_are_button'}
      buttonsStyles={'property_buttons_container'}
      textstyles={'whowe_are_text'}
      weTag={'whowe_are-tag'}
      />

    {/* The Man at the helm */}
    <Property
      circleImg={circleImage}
      circleImageStyles={'theman_are_circle_image'}
      text="The Man at the Helm!"
      subtext1="Ushaseer Tembe"
      subtext="Ushaseer Tembe stands as a beacon of inspiration, guiding his team with unwavering vision and wisdom in the realm of product management. His leadership transcends mere direction, embodying the essence of a mentor who nurtures and empowers those under his wing, fostering growth and excellence at every turn. With a towering presence akin to that of a giant in the field, Ushaseer's expertise and dedication set the standard, illuminating pathways to innovation and success for all who follow in his footsteps."
      image={theManImg}
      ImageStyles={'theman_are_img_container'}
      button={'theman_are_button'}
      buttonsStyles={'theman_buttons_container'}
      textstyles={'theman_are_text'}
      weTag={'theman_are-tag'}
      />

        {/* meet our team */}

        <OurTeam/>
        {/* <FeaturedProp/> */}
    {/* <AboutUsBody/> */}
    </>
  )
}

export default AboutUs