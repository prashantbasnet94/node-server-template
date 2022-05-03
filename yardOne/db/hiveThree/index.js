'use strict'

module.exports = function(conn) {
require('../sharedModels/prototype/institutionCharacter')(conn)
require('../sharedModels/prototype/institutionLibrary')(conn)

}
