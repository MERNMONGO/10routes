
const express = require('express')

// Creates our router
const router = express.Router()

const quiznosController = require('../controllers/quiznosController')



router.get('/', quiznosController.index)

router.get('/:index', quiznosController.show)
module.exports = router