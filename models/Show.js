const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Show = new Schema ({
    name: String,
    comedian: String,
    date: Date,
    Location: String,
    tickets: String,

})

module.exports = mongoose.model('Show', Show)