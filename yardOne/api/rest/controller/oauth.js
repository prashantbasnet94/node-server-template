'use strict'

const q = require('q')
module.exports = function (app) {
    let log
    function Oauth(app) {
        const
            self = this
            log = app.get('log')
        // should follow something like this
        // self.userModel = app.get('sharedModel').model('User')
    }
    Oauth.prototype.google = (req, res, next) => {

        try {
            // res.send()
            res.send({success: true, message: 'backend says hi!'})

            next()
        } catch (e) {
            log.err(e)
        }
    }
    return new Oauth(app)
}
