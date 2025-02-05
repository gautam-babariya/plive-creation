import React from 'react'
import './Ordercompletepage.css'
import { useLocation } from 'react-router-dom';


function Ordercompletepage() {
    const location = useLocation();
    const { orderId, serviceName, Amount } = location.state || {};
    return (
        <div className="order-complete-container">
            <h1 className="order-complete-title">Thank You for Your Order!</h1>
            <p className="order-complete-message">Your payment has been successfully processed</p>
            <p className="order-complete-message">Please ensure you securely <strong>save your Order ID</strong> for future reference and support inquiries after completing the payment."</p>

            <div className="order-summary">
                <h2 className="order-summary-title">Order Summary</h2>
                <p className="order-summary-item">
                    <strong>Order ID:</strong> <span className="highlight">{orderId}</span>
                </p>
                <p className="order-summary-item">
                    <strong>Service Purchased:</strong> {serviceName}
                </p>
                <p className="order-summary-item">
                    <strong>Total Amount:</strong> {Amount}
                </p>
            </div>

            <div className="next-steps">
                <h2 className="next-steps-title">Next Steps</h2>
                <p className="next-steps-message">
                    You will receive a confirmation email shortly, and our team will reach out to you via phone call for further processing of your order within 24 hours.
                </p>
                <p className="next-steps-message">
                    If you have any questions or need assistance, please feel free to contact us:
                </p>
                <ul className="contact-info">
                    <li><strong>Email:</strong> plivecreation@gmail.com</li>
                    <li><strong>Phone:</strong> +91 9157528788</li>
                </ul>
                <p className="next-steps-message">We aim to respond to all inquiries within 24 hours.</p>
            </div>

            <footer className="order-complete-footer">
                <p>Thank You for Choosing Us!</p>
                <p>We look forward to serving you!</p>
            </footer>
        </div>
    )
}

export default Ordercompletepage
