const shakeshack = require('../models/shakeshack')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = (req, res) => {
    // Looks in the views folder for "fruits/Index" and passes { fruits } data to the view (kind of like a server props object)
    res.render('shakeshack/Index', { shakeshack })
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = (req, res) => {
    console.log(shakeshack[req.params.index])
    res.render('shakeshack/Show', { shakeshack: shakeshack[req.params.index] })
}