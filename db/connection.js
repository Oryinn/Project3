require('dotenv').config()
const mongoose = require('mongoose')

if(process.env.MONGODB_URI) {
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
} else {
    mongoose.connect('mongodb://localhost/Project3')
}
mongoose.connection.once('open', () => {
    console.log("Mongoose has connected to MONGODB")
})

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ', err)
    process.exit(-1)
})

module.exports = mongoose