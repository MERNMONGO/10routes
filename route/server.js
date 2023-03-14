// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 



// Load our fruit routes
const mcdRoutes = require('./routes/mcdRoutes')
const bkRoutes = require('./routes/bkRoutes')
const subwayRoutes = require('./routes/subwayRoutes')
const arbysRoutes = require('./routes/arbysRoutes')
const quiznosRoutes = require('./routes/quiznosRoutes')
const jackinboxRoutes = require('./routes/jackinboxRoutes')
const wendysRoutes = require('./routes/wendysRoutes')
const fiveguysRoutes = require('./routes/fiveguysRoutes')
const bbqRoutes = require('./routes/bbqRoutes')
const shakeshackRoutes = require('./routes/shakeshackRoutes')
// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Load the method-override middleware
const methodOverride = require('method-override')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// a middleware that formats the form data (currently a string that looks like query params) into a object we can use
app.use(express.urlencoded({ extended: true }))

// hack into our form and give it more HTTP methods (like DELETE and PUT)
app.use(methodOverride('_method'))

// Connect our routes to our express app
app.use('/mcd', mcdRoutes)
app.use('/bk', bkRoutes)
app.use('/subway', subwayRoutes)
app.use('/arbys', arbysRoutes)
app.use('/quiznos', quiznosRoutes)
app.use('/jackinbox', jackinboxRoutes)
app.use('/shakeshack', shakeshackRoutes)
app.use('/wendys', wendysRoutes)
app.use('/fiveguys', fiveguysRoutes)
app.use('/bbq', bbqRoutes)


// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})