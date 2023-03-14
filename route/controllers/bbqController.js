const bbq = require('../models/bbq')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = (req, res) => {
    // Looks in the views folder for "fruits/Index" and passes { fruits } data to the view (kind of like a server props object)
    res.render('bbq/Index', { bbq })
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = (req, res) => {
    res.render('bbq/Show', { bbq: bbq[req.params.index] })
}