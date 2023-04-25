const mongoose = require('mongoose')
const DB_URL = "mongodb://localhost:27017/?readPreference=primary&ssl=false"
//const DB_URL = " mongodb://localhost:27017 "

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(DB_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }

    catch (error){
        console.error(error)
        process.exit(1);
    }
}

module.exports = connectDB;