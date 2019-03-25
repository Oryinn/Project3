const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find()
        .then(shows => {
            res.json(shows)
        })
        .catch(err => console.log(err))
    },
    show: (req, res) => {
        const userId = req.params.id
        User.findById(userId)
        .then((user => {
            res.json(user)
        }))
    },
    create: (req, res) => {
        const newUser = req.body
        Show.create(newUser)
        .then((user) => {
            res.json(user)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    },
    update: (req, res) => {
       const userId = req.params.id
       const updatedUser = req.body
       Show.findByIdAndUpdate(userId, updatedUser, {new: true})
       .then((savedUser) => {
           res.json(savedUser)
       })
    },
    delete: (req, res) => {
        const userId = req.params.id
        Show.findByIdAndRemove(userId)
        .then(() => {
            res.json({
                msg: 'Successfully Deleted'
            })
        })
    }
}

module.exports = userController