
const express = require('express')

// Creates our router
const router = express.Router()

const mcdController = require('../controllers/mcdController')



router.get('/', mcdController.index)

router.get('/:index', mcdController.show)
module.exports = router