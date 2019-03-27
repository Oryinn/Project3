const User = require('../models/User.js')
const Show = require('../models/Show')

User.deleteMany().then(() => {
    const newUser = new User({
        name: 'user1',
        email: 'user1@gmail.com',
        password: '123',
        favoriteShows: []
    })
    return newUser.save()
}).then(() => {
    const newAdmin = new User({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: '123',
        favoriteShows: []
    })
    return newAdmin.save()
})

Show.deleteMany().then(() => {
    const firstSeedShow = new Show({
        name: 'Strange Times Tour',
        comedian: 'Joe Rogan',
        date: Date.now(),
        location: 'The Tabernacle, Atlanta GA',
        tickets: 'www.eventbrite.com',
    })
    return firstSeedShow.save()
        .then(() => {
            const bertShow = new Show({
                name: 'Body Shots Tour',
                comedian: 'Bert Kreischer',
                date: Date.now(),
                location: 'The Tabernacle, Atlanta GA',
                tickets: 'www.eventbrite.com',
            })
            return bertShow.save()
        })
})