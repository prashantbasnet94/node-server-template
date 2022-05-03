'require strict'

module.exports = function (app) {
    let schoolHandler = require('../controller/school')(app)
    app.route('/largestPopSchool').get(schoolHandler.findSchoolWithLargestPopulation)
}
