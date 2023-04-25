const mongoose = require('mongoose')

const CarWashBookingSchema =  new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    wheelPolish : {
        type: String,
        required: true
    },

    fullValet: {
        type: String,
        required: true
    },

    carpet: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('CarWashBooking', CarWashBookingSchema)