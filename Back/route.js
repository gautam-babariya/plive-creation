const express = require('express');
const Contact = require('./model/contact');
const TechSupport = require('./model/techsupport');
const ClientData = require('./model/client_data');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.VITE_FROM_EMAIL,
        pass: process.env.VITE_FROM_EMAIL_PASSWORD,
    },
});

const sendNotification = async (data,sub) => {
    const mailOptions = {
        from: process.env.VITE_FROM_EMAIL,
        to: process.env.VITE_TO_EMAIL,
        subject: sub,
        text: `New data has been added: ${JSON.stringify(data)}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

router.get('/', (req, res) => {
    res.send('Welcome to Plive!');
});
router.post('/techsupport', async (req, res) => {
    const clientData = await ClientData.findOne({ order_id: req.body.order_id });
    if (!clientData) {
        return res.status(201).json(0);
    }
    try {
        const order_id = req.body.order_id;
        const issue_type = req.body.issue_type;
        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;
        const website_url = req.body.website_url;
        const message = req.body.message;
        const techSupport = new TechSupport({
            order_id: order_id,
            issue_type: issue_type,
            name: name,
            phone: phone,
            email: email,
            website_url: website_url,
            message: message
        });
        await techSupport.save().then((savedData) => {
            sendNotification(savedData,'technical support from plive');
        });
        res.status(201).json(1);
    } catch (error) {
        res.status(400).send(error);
    }
});
router.post('/contact', async (req, res) => {
    try {
        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;
        const message = req.body.message;
        const contact = new Contact({
            name: name,
            phone: phone,
            email: email,
            message: message
        });
        await contact.save().then((savedData) => {
            sendNotification(savedData,'contact from plive');
        });
        res.status(201).json(1);
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;