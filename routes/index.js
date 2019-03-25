const express = require('express')
const router = express.Router()
const showController = require('../controllers/showController')

router.get('/', showController.index)
router.get('/shows/:showId', showController.show)
router.post('/shows', showController.create)

module.exports = router