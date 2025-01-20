import React from 'react';
import './Termcondition.css';

function Termcondition() {
    return (
        <div className="terms_conditions_body">
            <h1 className="terms_conditions_title">Terms and Conditions</h1>
            <p className="terms_conditions_intro">Last updated: January 20, 2025</p>
            <p className="terms_conditions_description">
                These Terms and Conditions govern your use of our services. By accessing or using our services, you agree to comply with these terms.
            </p>

            <h2 className="terms_conditions_section_title">1. Introduction</h2>
            <p className="terms_conditions_intro_text">
                Welcome to Plive Creation. We are committed to providing you with the best experience possible. Please read these terms carefully before using our services.
            </p>

            <h2 className="terms_conditions_section_title">2. Services Offered</h2>
            <p className="terms_conditions_services_text">
                We offer a variety of services including but not limited to:
            </p>
            <ul className="terms_conditions_services_list">
                <li className="terms_conditions_service_item">Web Development</li>
                <li className="terms_conditions_service_item">Mobile App Development</li>
                <li className="terms_conditions_service_item">Digital Marketing</li>
                <li className="terms_conditions_service_item">Consultation Services</li>
            </ul>

            <h2 className="terms_conditions_section_title">3. User Responsibility</h2>
            <p className="terms_conditions_user_responsibility_text">
                As a user of our services, you agree to:
            </p>
            <ul className="terms_conditions_user_responsibility_list">
                <li className="terms_conditions_user_responsibility_item">Provide accurate and complete information.</li>
                <li className="terms_conditions_user_responsibility_item">Use the services in compliance with applicable laws.</li>
                <li className="terms_conditions_user_responsibility_item">Not engage in any activity that may harm our services or other users.</li>
            </ul>

            <h2 className="terms_conditions_section_title">4. Payment Terms</h2>
            <p className="terms_conditions_payment_terms_text">
                A 50% advance payment is required to start the service. The remaining 50% is due upon project completion and delivery. We accept various payment methods including credit cards, UPI, and bank transfers.
            </p>

            <h2 className="terms_conditions_section_title">5. Refund and Cancellation</h2>
            <p className="terms_conditions_refund_cancellation_text">
                Please refer to our Refund & Cancellation Policy for detailed information regarding refunds and cancellations.
            </p>

            <h2 className="terms_conditions_section_title">6. Contact</h2>
            <p className="terms_conditions_contact_text">
                If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <ul className="terms_conditions_contact_list">
                <li className="terms_conditions_contact_item">Email: plivecreation@gmail.com</li>
            </ul>
        </div>
    );
}

export default Termcondition;