import React, { useState } from 'react';
import './Productpage.css';
import logo from '../../public/assets/Hero/logo-background.png';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const products = [
    {
        id: '1', plan: 'Base Plan', price: '₹1999', dec: `
        Are you looking to establish an online presence with a professional, fast, and visually stunning website? 
        Our <strong>One-Page Website Development Package</strong> is the perfect solution for individuals, small businesses, portfolio,
        and startups who want to showcase their brand or services with maximum efficiency and style.<br/><br/>
        
        <strong>What You’ll Get with This Package:</strong><br/>
        - <strong>1 Page Fully Customized Website:</strong> A modern, user-friendly, and professionally designed single-page website tailored to your unique needs.<br/>
        - <strong>1 Year Free Domain Name:</strong> Get your website live without additional domain name costs for the first year! (.com, .in, .org)<br/>
        - <strong>Free Hosting on Vercel:</strong> Your website will be hosted on the lightning-fast and reliable Vercel platform.<br/>
        - <strong>Free SSL Certificates:</strong> Ensure secure browsing with free SSL encryption.<br/>
        - <strong>SEO-Friendly Website:</strong> Built with SEO best practices to rank higher on search engines.<br/>
        - <strong>Responsive Design:</strong> Your website will look amazing across all devices.<br/>
        - <strong>Dynamic Features:</strong> Add interactive elements for a stand-out site.<br/>
        - <strong>Social Media Integration:</strong> Seamlessly link to your social platforms.<br/>
        - <strong>100GB Monthly Bandwidth:</strong> Enjoy smooth and uninterrupted access.<br/>
        - <strong>24/7 Technical Support:</strong> Dedicated support whenever you need it.<br/>
        - <strong>Free 3-Month Maintenance:</strong> Keep your site updated and functional.<br/>
        - <strong>Quick Delivery:</strong> Delivered in as little as 3-7 days.<br/><br/>
    
        <em>Start your digital journey today! Contact us to get started with your one-page website.</em>
      `, terms: `- Once the work is complete or the product is delivered after full payment, <strong>no refunds</strong> will be provided.<br/>
    - A <strong>75% refund</strong> will be granted if you choose to cancel after the work has started.<br/>
    - A <strong>100% refund</strong> will be issued if an incorrect service is purchased due to a misunderstanding.
  ` },
    {
        id: '2', plan: 'Standard Plan', price: '₹4999', dec: `
    Are you ready to take your online presence to the next level? Our <strong>5 Pages Website Development Package</strong> is the ideal choice for businesses, professionals, and organizations looking for a robust, feature-packed website tailored to their needs.<br/><br/>

    <strong>What You’ll Get with This Package:</strong><br/>
    - <strong>5 Fully Customized Pages:</strong> Professionally designed web pages tailored to showcase your brand, services, and content with precision and style.<br/>
    - <strong>1 Year Free Domain Name:</strong> Launch your website without worrying about domain registration costs for the first year!<br/>
    - <strong>1 Year Free Hosting:</strong> Enjoy reliable and high-performance hosting for an entire year.<br/>
    - <strong>Free SSL Certificates:</strong> Ensure a secure and trustworthy experience for your visitors with free SSL encryption.<br/>
    - <strong>Unlimited Email Accounts:</strong> Create professional email accounts linked to your domain, offering credibility and convenience.<br/>
    - <strong>SEO-Friendly Website:</strong> Built with search engine optimization in mind to help your website rank higher and attract more visitors.<br/>
    - <strong>Responsive Design:</strong> Your website will look stunning and perform seamlessly on all devices, from desktops to smartphones.<br/>
    - <strong>Dynamic Features:</strong> Engage your audience with interactive and user-friendly elements.<br/>
    - <strong>Social Media Integration:</strong> Seamlessly connect your social media accounts to enhance your online presence.<br/>
    - <strong>Unlimited Bandwidth:</strong> No limits on traffic, ensuring your website remains accessible regardless of the number of visitors.<br/>
    - <strong>24/7 Technical Support:</strong> Our dedicated support team is available around the clock to address any issues or concerns.<br/>
    - <strong>Free 6-Month Maintenance:</strong> Peace of mind with complimentary updates and support for six months.<br/>
    - <strong>Quick Delivery:</strong> Your website will be ready and delivered within 3-7 days.<br/><br/>

    <strong>Why Choose Us?</strong><br/>
    With a commitment to quality, customer satisfaction, and timely delivery, we ensure that your 5-page website exceeds expectations. Let us help you create a platform that resonates with your audience and drives your goals.<br/><br/>
  `, terms: `- Once the work is complete or the product is delivered after full payment, <strong>no refunds</strong> will be provided.<br/>
  - A <strong>75% refund</strong> will be granted if you choose to cancel after the work has started.<br/>
  - A <strong>100% refund</strong> will be issued if an incorrect service is purchased due to a misunderstanding.
` }
];

const Productpage = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    const navigate = useNavigate();

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = import.meta.env.VITE_RAZOR_SCRIPT;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isLoaded = await loadRazorpay();
        if (!isLoaded) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }
        try {
            const course_id = product.plan; // Amount in INR
            const { data } = await axios.post(import.meta.env.VITE_BACKEND_ORDER_URL, { course_id });
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                order_id: data.order.id,
                amount: data.order.amount,
                currency: data.order.currency,
                ...data.order,
                handler: async function (response) {
                    const option2 = {
                        order_id: response.razorpay_order_id,
                        payment_id: response.razorpay_payment_id,
                        signature: response.razorpay_signature,
                    };
                    axios.post(import.meta.env.VITE_BACKEND_VERIFY_URL, option2).then((res) => {
                        if (res?.data?.success) {
                            console.log("Navigation Data:", { orderId: data.order.id, serviceName: product.plan, Amount: data.order.amount });
                            
                            navigate('/ordercomplete', {
                                state: { orderId: data.order.id, serviceName: product.plan, Amount: data.order.amount/100 },
                            });
                        }
                        else {
                            alert('Payment failed');
                        }
                    }
                    );

                },
                prefill: {
                    name: name,
                    email: email,
                    contact: phone,
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error(error);
            alert('Failed to initiate payment.');
        }
    };

    if (!product) {
        return <h2>Product not found</h2>; // Handle case where product is not found
    }
    return (
        <>
            <div className='product_maindiv'>
                <div className='product_des'>
                    <div className='product_logo'>
                        <img className='product_imglogo' src={logo} alt='plive_logo' />
                        <p className='product_agencyname'>Plive Creation</p>
                    </div>
                    <div className='product_tag'>
                        <div className='product_tagline'>{product.plan}</div>
                        <div className='product_taglinedesc' dangerouslySetInnerHTML={{ __html: product.dec }}>
                        </div>
                    </div>
                    <div className='product_contact'>
                        <div className='product_email'>
                            <p className='product_contactinfo'> Contact us
                            </p>
                            <p className='product_emailid'> Email: plivecreation@gmail.com </p>
                            <p className='product_phone'>Phone: +91 9157528788</p>
                        </div>
                    </div>
                    <div className='product_terms'>
                        <p className='product_termsinfo'>Terms and Conditions</p>
                        <p className='product_termsdesc' dangerouslySetInnerHTML={{ __html: product.terms }}></p>
                        <a className='product_termslin' href='/terms-and-conditions'>Terms and Conditions</a>
                    </div>
                </div>

                <div className="purchase-form">
                    <h2 className="form-title">{product.plan}</h2>
                    <div className="price">{product.price}</div> {/* Fixed price */}

                    <form onSubmit={handleSubmit} className="form">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="form-input"
                        />
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-input"
                        />
                        <label htmlFor="phone" className="form-label">Phone:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="form-input"
                        />
                        <input type="submit" value="Buy" className="form-button" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Productpage;