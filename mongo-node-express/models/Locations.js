const mongoose = require('mongoose')

const LocationsSchema =  new mongoose.Schema({
    City: {
        type: String,
        required: true
    },

    PostCode: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model('Locations', LocationsSchema)