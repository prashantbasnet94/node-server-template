'use strict'

const
bunyan = require('bunyan'),
path = require('path'),
logPath = path.normalize(__dirname + '/../../../log'),
config = require('../../../config/index')

// level to config logging for dev, test, prod
var logLevel = ['trace', 'info', 'info']

// how to configure logging streams for dev, test, prod
var stdoutCfg = ['info', 'error', 'none']
var fileCfg = ['trace', 'trace', 'trace'] //'info']; set prod to trace for now


var logConfig = function(env) {
    var cfg = {
      name: 'yardOne',
      streams: [],
      serializers: bunyan.stdSerializers
    }

    var envIndex = 0
    var level = stdoutCfg.info
    //  prints in the screeen
    if (level !== 'none') {
      cfg.streams.push({
        level: level,
        stream: process.stdout
      })
    }

    level = fileCfg[envIndex]
    //  saves in the file in log dir
    if (level !== 'none') {
      cfg.streams.push({
        level: level,
        path: path.join(logPath, 'appNode-server-' + env + '.log')
      })
    }
    return cfg
  }
var log = bunyan.createLogger(logConfig(config.env))
if (config.env === 'development') {
  let createChild = log.child.bind(log)
  log.child = function(options, simple) {
    let childLogger = createChild(options, simple)
    // console.log('created child')
    return childLogger
  }
}

log.level('trace')

module.exports = log
