import React from 'react'
import './Footer.css'
import '../../public/css/variable.css'
import insta from '../../public/assets/Footer/instagram.png'
import linkedin from '../../public/assets/Footer/linkedin.png'
import { Link } from 'react-router-dom';
import logo from '../../public/assets/Footer/logo-background.png'



function Footer() {
    const email = "plivecreation@gmail.com";
    const subject = "Inquiry About Plive Creation Services";
    const body = `Hello Plive Creation,
    I am interested in your services. Can you provide me more information?`;

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='footer_maindiv'>
            <div id='footer_infologo'>
                <div id='footer_logo'>
                    <img id='footer_logoimg' src={logo} alt='logo' />
                </div>
                <div id='footer_info'>
                    <p id='footer_tagline' style={{ marginBottom: "5rem" }}>"Affordable, creative, and quality websites for everyone"</p>
                    <a id='footer_gmailforcontact' href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>plivecreation@gmail.com</a>
                </div>
            </div>
            <div id='footer_quicklinkdiv'>
                <h3 id='footer_quicktitle'>Quick Links</h3>
                <ul>
                    <li class="nav-item">
                        <Link
                            className='footer_navlinks'
                            to="#"
                            onClick={() => {
                                scrollToSection('home');
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            className='footer_navlinks'
                            to="#"
                            onClick={() => {
                                scrollToSection('about_maindiv');
                            }}
                        >
                            About
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            className='footer_navlinks'
                            to="#"
                            onClick={() => {
                                scrollToSection('pricing');
                            }}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            className='footer_navlinks'
                            to="#"
                            onClick={() => {
                                scrollToSection('contact');
                            }}
                        >
                            Contact us
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            className='footer_navlinks'
                            to="/technicalsupport"
                        >
                            Technical support
                        </Link>
                    </li>
                </ul>
            </div>
            <div id='footer_socialmedia'>
                <h1 id='footer_socialtitle'>Follow Us</h1>
                <div id='footer_socialmedia_icons'>
                    <Link
                        className='footer_navlinks'
                        to="https://www.instagram.com/plivecreation?igsh=bnVpeGlrZDJyNTc=" target='_blank'>
                        <div id='footer_instagram'>
                            <img id='footer_instaimg' src={insta} alt='instagram' />
                        </div>
                    </Link>
                    <Link
                        className='footer_navlinks'
                        to="https://www.linkedin.com/in/plivecreation" target='_blank'>
                        <div id='footer_linkedin'>
                            <img id='footer_linkedinimg' src={linkedin} alt='linkedin' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
