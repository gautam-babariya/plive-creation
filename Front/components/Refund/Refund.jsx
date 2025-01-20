import React from 'react';
import './Refund.css';

function Refund() {
    return (
        <div className="refund_cancellation_body">
            <h1 className="refund_cancellation_title">Refund & Cancellation Policy</h1>
            <p className="refund_cancellation_intro">Last updated: January 20, 2025</p>
            <p className="refund_cancellation_description">
                This Refund & Cancellation Policy outlines the terms and conditions regarding refunds and cancellations for our services.
            </p>
            <h2 className="refund_cancellation_section_title">Refund Policy</h2>
            <p className="refund_cancellation_policy">
                We strive to provide the best services to our customers. Our refund policy is as follows:
            </p>
            <h3 className="refund_cancellation_subtitle">Full Refund</h3>
            <p className="refund_cancellation_full_refund">
                - A full refund will be issued if the project has not started or if the delivered service is incorrect.
            </p>
            <h3 className="refund_cancellation_subtitle">Partial Refund</h3>
            <p className="refund_cancellation_partial_refund">
                - If work has started and the client wishes to cancel, a refund of 75% of the payment will be issued.
            </p>
            <h3 className="refund_cancellation_subtitle">No Refund</h3>
            <p className="refund_cancellation_no_refund">
                - No refund will be issued once the project is completed and delivered.
            </p>
            <h3 className="refund_cancellation_subtitle">Advance Payment</h3>
            <p className="refund_cancellation_advance_payment">
                - A 50% advance payment is required to start the service. 
                - Clients can cancel their project within the first 2 days for a full refund of the advance payment.
                - After 2 days, the advance payment will not be refundable.
            </p>
            <h2 className="refund_cancellation_section_title">Cancellation Policy</h2>
            <p className="refund_cancellation_cancellation_policy">
                You may cancel your subscription at any time. Cancellations will take effect at the end of the current billing cycle.
            </p>
            <h2 className="refund_cancellation_section_title">Contact Us</h2>
            <p className="refund_cancellation_contact_info">
                If you have any questions regarding our Refund & Cancellation Policy, please contact us at:
            </p>
            <ul className="refund_cancellation_contact_list">
                <li className="refund_cancellation_contact_item">Email: plivecreation@gmail.com</li>
            </ul>
        </div>
    );
}

export default Refund;