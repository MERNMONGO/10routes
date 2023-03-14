
const express = require('express')

// Creates our router
const router = express.Router()

const arbysController = require('../controllers/arbysController')



router.get('/', arbysController.index)

router.get('/:index', arbysController.show)
module.exports = router