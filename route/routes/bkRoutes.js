
const express = require('express')

// Creates our router
const router = express.Router()

const bkController = require('../controllers/bkController')



router.get('/', bkController.index)

router.get('/:index', bkController.show)
module.exports = router