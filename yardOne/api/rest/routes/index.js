'use strict'

module.exports = function (app) {
    const
    root = require('../controller/root')(app),
    log = app.get('log')
    app.route('/').get((req, res) => {
        log.info({status: true, connection: 'success'})
        res.send({success: true})
    })
    // app.route('/test').get(app.authMiddleware).get(app.overflow).get(root.root)
    // app.route('/test').get(app.overflow).get(root.root)
    app.route('/test').get(app.overflow).get(root.root)


}
