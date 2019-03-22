const express = require('express')
const router = express.Router()

router.get('/', showController.index)
// router.get('/shows/:showId', showController.show)
// router.post('/shows', showController.create)

module.exports = router