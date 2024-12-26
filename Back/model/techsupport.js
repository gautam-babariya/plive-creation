const mongoose = require('mongoose');

const techSupportSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true
    },
    issue_type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website_url: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const TechSupport = mongoose.model('TechSupport', techSupportSchema);

module.exports = TechSupport;