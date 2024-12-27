import React, { useState } from 'react'
import './Technicalform.css'
import Modal from 'react-modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Technicalform() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    order_id: '',
    issue_type: '',
    name: '',
    phone: '',
    email: '',
    website_url: '',
    message: ''
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      order_id: formdata.order_id,
      issue_type: formdata.issue_type,
      name: formdata.name,
      phone: formdata.phone,
      email: formdata.email,
      website_url: formdata.website_url,
      message: formdata.message,
    };
    const contacturl = import.meta.env.VITE_TECHSUPPORT_URL
    try {
      const response = await axios.post(contacturl, productData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.data === 1) {
        setModalMessage("We will contact you soon");
        setModalIsOpen(true);
        setTimeout(() => {
          setModalIsOpen(false);
          navigate('/');
        }, 2000);
      }
      else if (response.data === 0) {
        setModalMessage("Order id not found");
        setModalIsOpen(true);
        setTimeout(() => {
          setModalIsOpen(false);
        }, 2000);
      }
    } catch (error) {
      console.error("There was an error sending the data!", error);
    }
  };
  return (
    <div className='technical_contactpage' >
      <div id='technical_headingdiv'>
        <p id="technical_heading">
          Technical support
        </p>
      </div>
      <div class="technical_container" id='technical_contactme'>
        <h1 id='technical_header'>Fill Form</h1>
        <form id="technical_contact-form" onSubmit={handleSubmit}>
          <div class="technical_form-group" >
            <label className='technical_lable' for="order_id" >Order id:</label>
            <input className='technical_input' type="text" id="order_id" name="order_id" onChange={handleChange} required />
          </div>
          <div class="technical_form-group" >
            <label className='technical_lable' for="issue_type" >Issue type:</label>
            <input className='technical_input' placeholder='server // domain // email // website' type="text" id="issue_type" name="issue_type" onChange={handleChange} required />
          </div>
          <div class="technical_form-group" >
            <label className='technical_lable' for="name" >Name:</label>
            <input className='technical_input' type="text" id="name" name="name" onChange={handleChange} required />
          </div>
          <div class="technical_form-group" >
            <label className='technical_lable' for="phone" >Phone no:</label>
            <input className='technical_input' type="text" id="phone" name="phone" onChange={handleChange} required />
          </div>
          <div class="technical_form-group">
            <label className='technical_lable' for="email">Email:</label>
            <input className='technical_input' type="email" id="email" name="email" onChange={handleChange} required />
          </div>
          <div class="technical_form-group">
            <label className='technical_lable' for="website_url">Website url:</label>
            <input className='technical_input' type="website_url" id="website_url" name="website_url" onChange={handleChange} required />
          </div>
          <div class="technical_form-group">
            <label className='technical_lable' for="message">Message:</label>
            <textarea className='technical_input' id="message" name="message" rows="4" onChange={handleChange} required></textarea>
          </div>
          <button className='technical_buttoncontact' type="submit">Submit</button>
        </form>
        <label id='technical_email' className='technical_lable' for="name" >&#128231; <a id="technical_gmaildirect" href="mailto:gautambabariyacontact@gmail.com">gautambabariyacontact@gmail.com</a></label>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="technical_ReactModal__Content">
          <h2 className='technical_popuph2'>{modalMessage}</h2>
        </Modal>
      </div>
    </div>
  )
}

export default Technicalform
