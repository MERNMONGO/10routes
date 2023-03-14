
const express = require('express')

// Creates our router
const router = express.Router()

const shakeshackController = require('../controllers/shakeshackController')



router.get('/', shakeshackController.index)

router.get('/:index', shakeshackController.show)
module.exports = router