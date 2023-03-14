
const express = require('express')

// Creates our router
const router = express.Router()

const jackinboxController = require('../controllers/jackinboxController')



router.get('/', jackinboxController.index)

router.get('/:index', jackinboxController.show)
module.exports = router