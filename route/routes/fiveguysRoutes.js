
const express = require('express')

// Creates our router
const router = express.Router()

const fiveguysController = require('../controllers/fiveguysController')



router.get('/', fiveguysController.index)

router.get('/:index', fiveguysController.show)
module.exports = router