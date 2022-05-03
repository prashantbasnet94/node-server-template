'use strict'

module.exports = function(app) {
    function Home(app) {
        const
        self = this
    }
    Home.prototype.root = function(req, res, next) {
        res.send({success: true, message: 'backend says hi!'})
    }
    return new Home(app)
}
