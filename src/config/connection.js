const mongoose = require('mongoose')
const uri = process.env.MONGO_URI

const dbConnection = async() => {
    try{
        const conn = await mongoose.connect(uri)
        console.log(`MongoDB database successfully connected: ${conn.connection.host}`)
    }catch(err){
        console.error(`Failed to connect to the database`, err.message)
    }
}

module.exports = dbConnection