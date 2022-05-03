// const
//  mongoose = require('mongoose')
//  logger = require('./logger'),
//  config = require('../../app/config/index')
// module.exports = function (app) {
//   mongoose.connect(
//     'mongodb://127.0.0.1:27017/vibes_unisala_mvp'
//   ).catch(err => {
//     logger.error(err)
//     process.exit(1)
//   })
//   app.set('mongooseClient', mongoose)
// }


module.exports = app => {

  const
      mongoose = require('mongoose'),
    //   Log = app.get('log'),
    //   log = Log.child({from: 'connectDb'}),
      config = require('../../config/index'),
      crypto = require('crypto-js'),
      bytesOne = crypto.AES.decrypt(config.mongouri.hiveOne, config.mongouri.key),
      connectionOne = bytesOne.toString(crypto.enc.Utf8)

  var hiveOne = mongoose.createConnection(
      connectionOne
  )

  hiveOne.on('connected', function () {
      console.log('YARD TWO ::::: CONNECTED TO HIVE ONE DB: ' + connectionOne)
  })

  hiveOne.on('reconnected', function () {
      console.log('YARD TWO ::::: RE-CONNECTED TO HIVE ONE DB: ' + connectionOne)
  })

  hiveOne.on('disconnected', function () {
      console.log('YARD TWO ::::: DISCONNECTED TO HIVE ONE DB: ' + connectionOne)
  })
  app.set('mongooseClient', hiveOne)
//   require('../../db/hiveOne')(hiveOne)

  // var hiveTwo = mongoose.createConnection(
  //     connectionTwo
  // )
  // hiveTwo.on('connected', function () {
  //     console.log('CONNECTED to DB: ' + connectionTwo)
  // })

  // hiveTwo.on('reconnected', function () {
  //     console.log('RE-CONNECTED to DB: ' + connectionTwo)
  // })

  // hiveTwo.on('disconnected', function () {
  //     console.log('DISCONNECTED to DB: ' + connectionTwo)
  // })
  // app.set('hiveTwo', hiveTwo)
  // require('../../db/hiveTwo')(hiveTwo)


  // var hiveThree = mongoose.createConnection(
  //     connectionThree
  // )
  // hiveThree.on('connected', function () {
  //     console.log('CONNECTED to DB: ' + connectionThree)
  // })

  // hiveThree.on('reconnected', function () {
  //     console.log('RE-CONNECTED to DB: ' + connectionThree)
  // })

  // hiveThree.on('disconnected', function () {
  //     console.log('DISCONNECTED to DB: ' + connectionThree)
  // })
  // app.set('hiveThree', hiveThree)
  // require('../../db/hiveThree')(hiveThree)
  return app
}
