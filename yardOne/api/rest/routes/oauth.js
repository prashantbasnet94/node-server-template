'use strict'

module.exports = function (app) {
    const oauthHandler = require('../controller/oauth')(app)
    app.route('/auth/google').post(oauthHandler.google)
}
