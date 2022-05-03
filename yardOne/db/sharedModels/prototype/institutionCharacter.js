
let
    mongoose = require('mongoose'),
    {Schema} = mongoose,
    {Mixed} = Schema.Types


module.exports = function(conn) {

    const institutioncharacter = new Schema({
        UnitID: Number,
        InstitutionName: String
    })
    institutioncharacter.index({
        'InstitutionName': 1
    }, {
        unique: false
    })
    conn.model('institutioncharacters', institutioncharacter)
}
