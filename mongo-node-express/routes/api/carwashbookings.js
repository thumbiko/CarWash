const express = require('express')
const router = express.Router()
const CarWashBooking = require('../../models/CarWashBooking')

//CRUD Functionality

//adding car wash booking
router.post("/add", async (req, res)=>{

    const {wheelPolish, fullValet, carpet, amount } = req.body;
    console.log(req.session)
    const newCarWashBooking = new CarWashBooking({

        userId: req.session.user.id,
        wheelPolish: wheelPolish,
        fullValet: fullValet,
        carpet: carpet,
        amount: amount
    })
    await newCarWashBooking.save()
    res.status(200).send({successful: 'Sucessfully created cash wash booking'})
})

//getting list of car wash bookings
router.get("/bookings", async (req, res) =>{
    const bookings = await CarWashBooking.find({}).where('userId').equals(req.session.user.id);
    res.status(200).send({bookings: bookings})
})


//deleting car wash booking
router.delete("/delete/:id", async (req, res)=>{
    const carWashBookingId = req.params.id;
    await CarWashBooking.findByIdAndDelete(carWashBookingId);
    res.status(200).send({successful: 'Deleted car wash booking'})
})


module.exports = router;