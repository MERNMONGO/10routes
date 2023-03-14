const bk = require('../models/bk')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = (req, res) => {
    // Looks in the views folder for "fruits/Index" and passes { fruits } data to the view (kind of like a server props object)
    res.render('bk/Index', { bk })
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = (req, res) => {
    res.render('bk/Show', { bk: bk[req.params.index] })
}