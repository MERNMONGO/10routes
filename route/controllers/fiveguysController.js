const fiveguys = require('../models/fiveguys')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = (req, res) => {
    // Looks in the views folder for "fruits/Index" and passes { fruits } data to the view (kind of like a server props object)
    res.render('fiveguys/Index', { fiveguys })
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = (req, res) => {
    res.render('fiveguys/Show', { fiveguys: fiveguys[req.params.index] })
}