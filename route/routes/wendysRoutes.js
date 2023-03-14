
const express = require('express')

// Creates our router
const router = express.Router()

const wendysController = require('../controllers/wendysController')



router.get('/', wendysController.index)

router.get('/:index', wendysController.show)

module.exports = router