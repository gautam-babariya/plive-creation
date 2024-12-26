import React, { useEffect, useState } from 'react'
import '../../public/css/variable.css'
import './Hero.css'
import { Link } from 'react-router-dom';
import attractimg from '../../public/assets/Hero/attractimg3.png'
import logo from '../../public/assets/Hero/logo.png'


function Hero() {
  const [activeLink, setActiveLink] = useState(1);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className='hero_maindiv' id='home'>
        {/* navbar div */}
        <div className='hero_navbar'>
          <nav class="hero_navboot navbar navbar-expand-lg bg-body-tertiary ">
            <div class="hero_divinnav container-fluid">
              <div className='hero_divoflogo'>
              <img id='hero_logo' src={logo} alt='logo' />
              </div>
              <button id='hero_navbutton' class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="hero_navlinkdiv collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link
                      className={`hero_navlinks nav-link ${activeLink === 1 ? 'active' : ''}`}
                      to="#"
                      onClick={() => {
                        handleClick(1); // Set the active link state
                        scrollToSection('home'); // Smooth scroll to the section
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      className={`hero_navlinks nav-link ${activeLink === 2 ? 'active' : ''}`}
                      to="#"
                      onClick={() => {
                        handleClick(2); // Set the active link state
                        scrollToSection('about_maindiv'); // Smooth scroll to the section
                      }}
                    >
                      About
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      className={`hero_navlinks nav-link ${activeLink === 3 ? 'active' : ''}`}
                      to="#"
                      onClick={() => {
                        handleClick(3); // Set the active link state
                        scrollToSection('services'); // Smooth scroll to the section
                      }}
                    >
                      Services
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      className={`hero_navlinks nav-link ${activeLink === 4 ? 'active' : ''}`}
                      to="#"
                      onClick={() => {
                        handleClick(4); // Set the active link state
                        scrollToSection('pricing'); // Smooth scroll to the section
                      }}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      className={`hero_navlinks nav-link ${activeLink === 5 ? 'active' : ''}`}
                      to="#"
                      onClick={() => {
                        handleClick(5); // Set the active link state
                        scrollToSection('samples'); // Smooth scroll to the section
                      }}
                    >
                      Demo
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      className={`hero_navlinks nav-link ${activeLink === 6 ? 'active' : ''}`}
                      to="#"
                      onClick={() => {
                        handleClick(6); // Set the active link state
                        scrollToSection('contact'); // Smooth scroll to the section
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      className={`hero_navlinks nav-link ${activeLink === 7 ? 'active' : ''}`}
                      to="/technicalsupport"
                      onClick={() => {
                        handleClick(7);
                      }}
                    >
                      Technical support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* herodisplay div  */}
        <div className='hero_display'>
          <div className='hero_attractimgdiv first'>
            <div id="hero_closedivattractimg">
              <img id="hero_attractimg" src={attractimg} alt='image' />
            </div>
          </div>
          <div className='hero_nametagline'>
            <div id='hero_title'>
              <div id='hero_adjusttitle'>
                <strong id='hero_titlech'>P</strong>live
              </div>
            </div>
            <div id='hero_tagline'>"Where Creativity Meets Your Online Identity"</div>
          </div>
          <div className='hero_attractimgdiv second'>
            <div id="hero_closedivattractimg">
              <img id="hero_attractimg" src={attractimg} alt='image' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
