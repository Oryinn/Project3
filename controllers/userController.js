const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find()
        .then(users => {
            res.json(users)
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
        User.create(newUser)
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
       User.findByIdAndUpdate(userId, updatedUser, {new: true})
       .then((savedUser) => {
           res.json(savedUser)
       })
    },
    delete: (req, res) => {
        const userId = req.params.id
        User.findByIdAndRemove(userId)
        .then(() => {
            res.json({
                msg: 'Successfully Deleted'
            })
        })
    }
}

module.exports = userController