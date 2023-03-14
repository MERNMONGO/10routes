
const express = require('express')

// Creates our router
const router = express.Router()

const subwayController = require('../controllers/subwayController')



router.get('/', subwayController.index)

router.get('/:index', subwayController.show)

module.exports = router