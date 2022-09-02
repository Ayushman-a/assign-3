const mongoose = require('mongoose')

const address = new mongoose.Schema({
    addressLine: String,
    city: String,
    state: String,
    zip: String,
    country: String
})

const addressData = mongoose.model('addressData', address);
module.exports = addressData 