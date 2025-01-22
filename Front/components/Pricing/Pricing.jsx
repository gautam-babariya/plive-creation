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
                        <div class="pricing_card card">
                            <div class="card-body pricing_cardbody">
                                <h5 class="card-title pricing_cardtitle">Base plan<br></br>
                                    <p className='pricing_money'>₹ 1999</p></h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item pricing_items">1 pages in website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">1 Year Free Domain Name<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Free Hosting on vercel<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Free SSL Certificates<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">SEO Friendly Website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Responsive Website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Dynamic Website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Social Media Integration<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">100GB per month Bandwidth<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">24/7 Technical Support<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Free 3 months maintenance<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Delivered within 3-7 days<img src={check} alt="check" className="pricing_checkimg" /></li>
                            </ul>
                            <div className='pricing_buttondiv'>
                                <button onClick={() => (window.location.href = 'tel:9157528788')} className="pricing_button">Call now</button>
                            </div>
                        </div>
                    </div>
                    {/* standard  */}
                    <div className="pricing_container">
                        <div class="pricing_card card">
                            <div class="card-body pricing_cardbody">
                                <h5 class="card-title pricing_cardtitle">Standard plan<br></br><p id='pricing_popular'>(most popular)</p>
                                    <p className='pricing_money'>₹ 4999</p></h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item pricing_items">5 pages in website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">1 Year Free Domain Name<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">1 Year Free Hosting<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Free SSL Certificates<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Unlimited Email Accounts<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">SEO Friendly Website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Responsive Website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Dynamic Website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Social Media Integration<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Unlimited Bandwidth<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">24/7 Technical Support<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Free 6 months maintenance<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Delivered within 3-7 days<img src={check} alt="check" className="pricing_checkimg" /></li>
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
                                <h5 class="card-title pricing_cardtitle">Custom plan<br></br>
                                    <p className='pricing_money'>₹ ????</p></h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item pricing_items">Pages: According to Requirement<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">1 Year Free Domain Name<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">1 Year Free Hosting<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Free SSL Certificates<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Unlimited Email Accounts<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">SEO Friendly Website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Responsive Website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Dynamic Website<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Social Media Integration<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Unlimited Bandwidth<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">24/7 Technical Support<img src={check} alt="check" className="pricing_checkimg" /></li>
                                <li class="list-group-item pricing_items">Free 6 months maintenance<img src={check} alt="check" className="pricing_checkimg" /></li>
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
