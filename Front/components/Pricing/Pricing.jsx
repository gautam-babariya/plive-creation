import React from 'react'
import './Pricing.css'
import '../../public/css/variable.css'
import check from '../../public/assets/Pricing/check.png'


function Pricing() {
    return (
        <div id='pricing'>
            <div className="pricing_maindiv">
                <div className="pricing_header">
                    <p id='pricing_headline'>Pricing</p>
                </div>
                <div className="pricing_carddiv">
                    {/* base  */}
                    <div className="pricing_container">
                        <div className="pricing_card card">
                            <div className="card-body pricing_cardbody">
                                <h5 className="card-title pricing_cardtitle">
                                    Business Plan<br />
                                    <p className='pricing_money'>₹5,999</p>
                                </h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item pricing_items">
                                    5 Pages in Website <img src={check} alt="check" className="pricing_checkimg" />
                                </li>
                                <li className="list-group-item pricing_items">
                                    1-year free hosting <img src={check} alt="check" className="pricing_checkimg" />
                                </li>
                                <li className="list-group-item pricing_items">
                                    Custom Design <img src={check} alt="check" className="pricing_checkimg" />
                                </li>
                                <li className="list-group-item pricing_items">
                                    Contact Form with WhatsApp Chat<img src={check} alt="check" className="pricing_checkimg" />
                                </li>
                                <li className="list-group-item pricing_items">
                                    Basic SEO <img src={check} alt="check" className="pricing_checkimg" />
                                </li>
                                <li className="list-group-item pricing_items">
                                    Mobile & Tablet Responsive Design <img src={check} alt="check" className="pricing_checkimg" />
                                </li>
                                <li className="list-group-item pricing_items">
                                    Free SSL Certificates <img src={check} alt="check" className="pricing_checkimg" />
                                </li>
                                <li className="list-group-item pricing_items">
                                    24/7 Technical Support <img src={check} alt="check" className="pricing_checkimg" />
                                </li>
                                <li className="list-group-item pricing_items">
                                    Free 1 Month Maintenance <img src={check} alt="check" className="pricing_checkimg" />
                                </li>
                                <li className="list-group-item pricing_items">
                                    Delivered within 7 days <img src={check} alt="check" className="pricing_checkimg" />
                                </li>
                            </ul>
                            <div className='pricing_buttondiv'>
                                <button onClick={() => (window.location.href = 'tel:9157528788')} className="pricing_button">
                                    Call Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* standard  */}
                    <div className="pricing_container">
                        <div class="pricing_card card">
                            <div class="card-body pricing_cardbody">
                                <h5 class="card-title pricing_cardtitle">Basic Ecommerce<br></br><p id='pricing_popular'>(most popular)</p>
                                    <p className='pricing_money'>₹11,999</p></h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item pricing_items">10 pages in website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">1-year free hosting<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Unlimited Products<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Shopping Cart + Checkout System<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Free SSL Certificates<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Payment gateway<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Product Search & Filter
                                    <img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Basic SEO<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Mobile Responsive Design<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Admin panel<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Social Media Integration<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">24/7 Technical Support<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Free 1 month maintenance<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Delivered within 14 days<img src={check} alt="check" className="pricing_checkimg" /></li>
                            </ul>
                            <div className='pricing_buttondiv'>
                                <button onClick={() => (window.location.href = 'tel:9157528788')} className="pricing_button">Call now</button>
                            </div>
                        </div>
                    </div>
                    {/* custom  */}
                    <div className="pricing_container">
                        <div class="pricing_card card">
                            <div class="card-body pricing_cardbody">
                                <h5 class="card-title pricing_cardtitle">Advance Ecommerce<br></br>
                                    <p className='pricing_money'>₹14,999</p></h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item pricing_items">20 pages in website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">1-year free hosting<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">All features in basic ecommerce<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Advanced Filters<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Order Tracking<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Reviews & Ratings System<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Delivered within 17 days<img src={check} alt="check" className="pricing_checkimg" /></li>
                            </ul>
                            <div className='pricing_buttondiv'>
                                <button onClick={() => (window.location.href = 'tel:9157528788')} className="pricing_button">Call now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
