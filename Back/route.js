const express = require('express');
const Contact = require('./model/contact');
const TechSupport = require('./model/techsupport');
const ClientData = require('./model/client_data');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');


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
        const botToken = process.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = process.env.VITE_TELEGRAM_CHAT_ID;
        const techSupport = new TechSupport({
            order_id: order_id,
            issue_type: issue_type,
            name: name,
            phone: phone,
            email: email,
            website_url: website_url,
            message: message
        });
        await techSupport.save();

        const telegramMessage = `New Tech Support Request:\n\nOrder ID: ${order_id}\nIssue Type: ${issue_type}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nWebsite: ${website_url}\nMessage: ${message}`;

        await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatId,
            text: telegramMessage
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
        const botToken = process.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = process.env.VITE_TELEGRAM_CHAT_ID;

        const contact = new Contact({
            name: name,
            phone: phone,
            email: email,
            message: message
        });
        await contact.save();

        const telegramMessage = `New Contact Submission:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;

        await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatId,
            text: telegramMessage
        });

        res.status(201).json(1);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;