import React, { useEffect, useState } from 'react'
import './Contactus.css'
import '../../public/css/variable.css'
import Modal from 'react-modal';
import axios from 'axios';


function Contactus() {
    console.log(import.meta.env.VITE_CONTACT_URL);
    const [formdata, setFormdata] = useState({
        name: '',
        phone: '',
        email: '',
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
            name: formdata.name,
            phone: formdata.phone,
            email: formdata.email,
            message: formdata.message,
        };
        const contacturl = 'plivecreation-api.vercel.app/contact';
        try {
            const response = await axios.post(contacturl, productData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.data === 1) {
                setModalMessage("Thank you for submit. We will contact you soon");
                setModalIsOpen(true);
                setTimeout(() => {
                    setModalIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 2000);
            }
        } catch (error) {
            console.error("There was an error sending the data!", error);
        }
    };
    return (
        <div className='contact_contactpage' id='contact' >
            <div id='contact_headingdiv'>
                <p id="contact_heading">
                    Contact us
                </p>
            </div>
            <div class="contact_container" id='contact_contactme'>
                <h1 id='contact_header'>Type query</h1>
                <form id="contact_contact-form" onSubmit={handleSubmit}>
                    <div class="contact_form-group" >
                        <label className='contact_lable' for="name" >Name:</label>
                        <input className='contact_input' type="text" id="name" name="name" onChange={handleChange} required />
                    </div>
                    <div class="contact_form-group" >
                        <label className='contact_lable' for="phone" >Phone no:</label>
                        <input className='contact_input' type="text" id="phone" name="phone" onChange={handleChange} required />
                    </div>
                    <div class="contact_form-group">
                        <label className='contact_lable' for="email">Email:</label>
                        <input className='contact_input' type="email" id="email" name="email" onChange={handleChange} required />
                    </div>
                    <div class="contact_form-group">
                        <label className='contact_lable' for="message">Message:</label>
                        <textarea className='contact_input' id="message" name="message" rows="4" onChange={handleChange} required></textarea>
                    </div>
                    <button className='contact_buttoncontact' type="submit">Submit</button>
                </form>
                <label id='contact_email' className='contact_lable' for="name" >&#128231; <a id="contact_gmaildirect" href="mailto:gautambabariyacontact@gmail.com">gautambabariyacontact@gmail.com</a></label>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="contact_ReactModal__Content">
                    <h2 className='contact_popuph2'>{modalMessage}</h2>
                </Modal>
            </div>
        </div>
    )
}

export default Contactus
