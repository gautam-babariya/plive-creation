import React from 'react'
import './Services.css'
import webdev from '../../public/assets/Services/webdevelopment.png'
import ecommerce from '../../public/assets/Services/ecommerce.png'
import support from '../../public/assets/Services/24-hours.png'
import '../../public/css/variable.css'


function Services() {
    return (
        <div className='services_maindiv' id='services'>
            <div id='services_headingdiv'>
                <p id="services_heading">
                    Services
                </p>
            </div>
            <div className='services_divofcards'>
                <div class="services_closediv card">
                    <div className="services_img">
                        <img src={webdev} class="card-img-top" alt="..." />
                    </div>
                    <div class="services_text card-body">
                        <p class="card-text">Web Development</p>
                    </div>
                </div>
                <div class="services_closediv card">
                    <div className="services_img">
                        <img src={ecommerce} class="card-img-top" alt="..." />
                    </div>
                    <div class="services_text card-body">
                        <p class="card-text">E-commerce</p>
                    </div>
                </div>
                <div class="services_closediv card">
                    <div className="services_img">
                        <img src={support} class="card-img-top" alt="..." />
                    </div>
                    <div class="services_text card-body">
                        <p class="card-text">24*7 support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
