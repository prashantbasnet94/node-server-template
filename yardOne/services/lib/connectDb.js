
module.exports = app => {

    const
        mongoose = require('mongoose'),
        Log = app.get('log'),
        log = Log.child({from: 'connectDb'}),
        config = app.get('config'),
        crypto = require('crypto-js'),
        bytesOne = crypto.AES.decrypt(config.mongouri.hiveOne, config.mongouri.key),
        bytesTwo = crypto.AES.decrypt(config.mongouri.hiveTwo, config.mongouri.key),
        bytesThree = crypto.AES.decrypt(config.mongouri.hiveThree, config.mongouri.key),
        connectionOne = bytesOne.toString(crypto.enc.Utf8),
        connectionTwo = bytesTwo.toString(crypto.enc.Utf8),
        connectionThree = bytesThree.toString(crypto.enc.Utf8)

        console.log('0000000000', config.mongouri.key)

    var hiveOne = mongoose.createConnection(
        connectionOne
    )

    hiveOne.on('connected', function () {
        log.info('CONNECTED TO HIVE ONE DB: ' + connectionOne)
    })

    hiveOne.on('reconnected', function () {
        log.info('RE-CONNECTED TO HIVE ONE DB: ' + connectionOne)
    })

    hiveOne.on('disconnected', function () {
        log.info('DISCONNECTED TO HIVE ONE DB: ' + connectionOne)
    })
    app.set('hiveOne', hiveOne)
    require('../../db/hiveOne')(hiveOne)

    var hiveTwo = mongoose.createConnection(
        connectionTwo
    )
    hiveTwo.on('connected', function () {
        log.info('CONNECTED TO HIVE TWO DB: ' + connectionTwo)
    })

    hiveTwo.on('reconnected', function () {
        log.info('RE-CONNECTED TO HIVE TWO DB: ' + connectionTwo)
    })

    hiveTwo.on('disconnected', function () {
        log.info('DISCONNECTED TO HIVE TWO DB: ' + connectionTwo)
    })
    app.set('hiveTwo', hiveTwo)
    require('../../db/hiveTwo')(hiveTwo)


    var hiveThree = mongoose.createConnection(
        connectionThree
    )
    hiveThree.on('connected', function () {
        log.info('CONNECTED TO HIVE THREE DB: ' + connectionThree)
    })

    hiveThree.on('reconnected', function () {
        log.info('RE-CONNECTED TO HIVE THREE DB: ' + connectionThree)
    })

    hiveThree.on('disconnected', function () {
        log.info('DISCONNECTED TO HIVE THREE DB: ' + connectionThree)
    })
    app.set('hiveThree', hiveThree)
    require('../../db/hiveThree')(hiveThree)
    return app
}
