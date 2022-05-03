'use strict'

module.exports = function (app) {
    let
    self,
    Log = app.get('log'),
    log = Log.child({controller: 'Rest Api'})
    function School(app) {
        self = this
        self.hiveOne = app.get('hiveOne')
        self.hiveTwo = app.get('hiveTwo')
        self.uniQuery = require('../../../services/lib/university')(app)
    }
    School.prototype.findSchoolWithLargestPopulation = (req, res) => {
        const config = {}
        config.lengthOfResult = 30
        config.res = res
        return self.uniQuery.filterMostPopulatedUniversity(config)
    }
    return new School(app)
}
