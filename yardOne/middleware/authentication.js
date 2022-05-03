'use strict'

module.exports = function(app) {
    let self
    function Auth(app) {
        // self.auth = app.get('auth')
        // self.log = app.get('log')
    }

    Auth.prototype.ensureAuthentication = function (req, res, next) {
        //  next()
        // if (req.isAuthenticated()) {
        //     return next()
        // }
        // res.send({success: false, error: 'User is not authenticated'})
    }
    Auth.prototype.overflow = function (req, res, next) {
        next()
        // if (req.user.overflow) {
        //     self.log.error({type: 'login', message: 'checked in verfied account'})
        //     // send a message to hack1
        //     // start booting files and assoicated loads

        // }
        // if (req.isAuthenticated()) {
        //     return next()
        // }
        // res.send({success: false, error: 'User is not authenticated'})
    }
    Auth.prototype.isSuperAdmin = function (req, res, next) {
        next()
        // if (req.user.overflow) {
        //     self.log.error({type: 'login', message: 'checked in verfied account'})
        //     // send a message to hack1
        //     // start booting files and assoicated loads

        // }
        // if (req.isAuthenticated()) {
        //     return next()
        // }
        // res.send({success: false, error: 'User is not authenticated'})
    }
    return new Auth(app)
}
