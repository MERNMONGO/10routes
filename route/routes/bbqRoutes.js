
const express = require('express')

// Creates our router
const router = express.Router()

const bbqController = require('../controllers/bbqController')



router.get('/', bbqController.index)

router.get('/:index', bbqController.show)
module.exports = router