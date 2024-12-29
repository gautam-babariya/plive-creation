import React from 'react'
import './Landingpage.css'
import Hero from '../../components/Heropage/Hero'
import Aboutus from '../../components/Aboutus/Aboutus'
import Services from '../../components/Services/Services'
import Pricing from '../../components/Pricing/Pricing'
import Samples from '../../components/Samples/Samples'
import Contactus from '../../components/Contactus/Contactus'
import Footer from '../../components/Footer/Footer'

function Landingpage() {
  const phoneNumber = "919157528788"; // Replace with your number
  const message = "Hello, can I get more information about your services?"; 
  const encodedMessage = encodeURIComponent(message); // Encode the message for the URL
  return (
    <>
      <div>
        <Hero />
        <Aboutus />
        <Services />
        <Pricing />
        <Samples />
        <Contactus />
        <Footer />
        <a href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`} target="_blank" class="landing_whatsapp-icon">
          <img id='landing_whatsappiconimg' src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>
      </div>
    </>
  )
}

export default Landingpage
