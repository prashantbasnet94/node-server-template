'use strict'

module.exports = function(conn) {
require('../models/user')(conn)
require('../models/school')(conn)
}
