/* eslint-disable no-console */
const logger = require('./logger')
const app = require('./app')
const config = require('../../config/index')
const port = app.get('port') || config.port2
const server = app.listen(port)
process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
)
server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host') || 'localhost', config.port2)
)
