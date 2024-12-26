const mongoose = require('mongoose');

const clientDataSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const ClientData = mongoose.model('ClientData', clientDataSchema);

module.exports = ClientData;