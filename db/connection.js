require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log("Mongoose has connected to MONGODB")
})

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ', err)
    process.exit(-1)
})

module.exports = mongoose