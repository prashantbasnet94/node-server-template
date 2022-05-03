let
    mongoose = require('mongoose'),
    {Schema} = mongoose,
    {Mixed} = Schema.Types


module.exports = function(conn) {

    const institutionLibrary = new Schema({
        UnitID: String,
        InstitutionName: String
    })
    institutionLibrary.index({
        'InstitutionName': 1
    }, {
        unique: false
    })
    conn.model('libraries', institutionLibrary)
}
