const express = require('express')
const router = express.Router()

router.get('/', showController.index)

module.exports = router