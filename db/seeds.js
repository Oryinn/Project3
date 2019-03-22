const User = require('../models/User.js')
const Show = require('../models/Show')

User.deleteMany().then(() => {
    const newUser = new User({
        name: 'user1',
        email: 'user1@gmail.com',
        password: '123'
    })
    return newUser.save()
}).then(() => {
    const newAdmin = new User({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: '123'
    })
    return newAdmin.save()
})

Show.deleteMany().then(() => {
    const firstSeedShow = new Show({
        name: 'Strange Times Tour',
        comedian: 'Joe Rogan',
        date: Date.now(),
        Location: 'The Tabernacle, Atlanta GA',
        tickets: 'www.eventbrite.com',
    })
    return firstSeedShow.save()
})