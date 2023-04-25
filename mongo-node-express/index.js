const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser =  require('body-parser');
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const DB_URL = "mongodb://localhost:27017/?readPreference=primary&ssl=false"

const CarWashingBookings = require('./routes/api/carwashbookings');
const Users = require('./routes/api/users')
const MAX_AGE = 1000 * 60 * 60 * 3;

connectDB();

const app = express();



//storing sessions 

const mongoDBstore = new MongoDBStore({
    uri: DB_URL,
    collection: "sessions"
    
})



//connecting to react app
app.use(express.json())
app.use(express.urlencoded({extended: false})) 
app.use(cors({
    origin: 'http://localhost:3000', //location of the react app being connected to
    credentials: true
}))

//session details

app.use(session({
    name: "carwash",
    secret: "carwash123",
    resave: true,
    saveUninitialized: false,
    store: mongoDBstore,
    cookie:{
        maxAge: MAX_AGE,
        sameSite: true,
        secure: false
    }
}))

//Database collections to use that are in the models subdirectory
app.use("/api/users", Users);
app.use("/api/carwashbookings", CarWashingBookings);

app.listen(4000, ()=>{
    console.log('Server has started')
})