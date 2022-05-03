let
    mongoose = require('mongoose'),
    {Schema} = mongoose,
    {Mixed} = Schema.Types


module.exports = function(conn) {

    const schoolNiche = new Schema({
        Institute_Name: Mixed,
        Position: Mixed,
        Rating: Mixed,
        Reviews: Mixed
    })
    schoolNiche.index({
        'Institute_Name': 1
    }, {
        unique: false
    })
    conn.model('College_Details', schoolNiche)
}
