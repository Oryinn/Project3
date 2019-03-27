const Show = require('../models/Show')

const showController = {
    index: (req, res) => {
        Show.find()
        .then(shows => {
            res.json(shows)
        })
        .catch(err => console.log(err))
    },
    show: (req, res) => {
        const showId = req.params.showId
        Show.findById(showId)
        .then((show => {
            res.json(show)
        }))
    },
    create: (req, res) => {
        const newShow = req.body
        Show.create(newShow)
        .then((show) => {
            res.json(show)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    },
    update: (req, res) => {
       const showId = req.params.showId
       const updatedShow = req.body
       Show.findByIdAndUpdate(showId, updatedShow, {new: true})
       .then((savedShow) => {
           res.json(savedShow)
       })
    },
    delete: (req, res) => {
        const showId = req.params.showId
        Show.findByIdAndRemove(showId)
        .then(() => {
            res.json({
                msg: 'Successfully Deleted'
            })
        })
    }
}

module.exports = showController