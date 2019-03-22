const Show = require('../models/Show')

const showController = {
    index: (req, res) => {
        Show.find()
        .then(shows => {
            res.json(shows)
        })
        .catch(err => console.log(err))
    }
}

module.exports = showController