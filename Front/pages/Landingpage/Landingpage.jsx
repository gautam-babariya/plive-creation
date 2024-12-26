import React from 'react'
import Hero from '../../components/Heropage/Hero'
import Aboutus from '../../components/Aboutus/Aboutus'
import Services from '../../components/Services/Services'
import Pricing from '../../components/Pricing/Pricing'
import Samples from '../../components/Samples/Samples'
import Contactus from '../../components/Contactus/Contactus'
import Footer from '../../components/Footer/Footer'

function Landingpage() {
  return (
    <>
        <Hero />
        <Aboutus />
        <Services />
        <Pricing />
        <Samples />
        <Contactus />
        <Footer />
    </>
  )
}

export default Landingpage
