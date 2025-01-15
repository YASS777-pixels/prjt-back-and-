const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://yassinerrais06:Gkc5RP3Dv2EDVaqO@cluster0.4vmyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB