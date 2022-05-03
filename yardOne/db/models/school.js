let
    mongoose = require('mongoose'),
    {Schema} = mongoose,
    {Array, Boolean, Dates, Mixed, ObjectId, String} = Schema.Types


module.exports = function(conn) {

    const School = new Schema({
        active: Boolean,
        address: {
            city: String,
            county: String,
            zipCode: String,
            lat: Number,
            lng: Number
        },
        applicants: Mixed,
        banned: Boolean,
        dates: Mixed,
        deactivated: Boolean,
        documents: Mixed,
        email: String,
        elevatorInfo: Mixed

    })
    School.index({
        'elevatorInfo.name': 1
    }, {
        unique: false
    })
    conn.model('School', School)
}
