const express = require('express')
const router = express.Router()
const showController = require('../controllers/showController')
const userController = require('../controllers/userController')

router.get('/shows', showController.index)
router.post('/shows', showController.create)
router.get('/shows/:showId', showController.show)
router.put('/shows/:showId', showController.update)
router.delete('/shows/:showId', showController.delete)

router.get('/users', userController.index)
router.post('/users', userController.create)
router.get('/users/:userId', userController.show)
router.put('/users/:userId', userController.update)
router.delete('/users/:userId', userController.delete)

module.exports = router