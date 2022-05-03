const {add, comparator, flatten, map, range, reduce, pipe, sort, take} = require('ramda'),
q = require('q')
module.exports = function(app) {
    let
    self,
    log = app.get('log')
    function UniLibrary() {
        self = this
        self.db = app.get('hiveOne')
        self.schoolModel = self.db.model('School')
    }

    UniLibrary.prototype.filterMostPopulatedUniversity = function(config) {
        const {lengthOfResult, res} = config
        return q(self.schoolModel.find({}))
        .then(data => {
            let
            byCurrentEnrollment = comparator((a, b) => b.currentEnrollment < a.currentEnrollment),
            newData = pipe(
                map(o => {
                    let
                    a = o && o.applicants && o.applicants.fallEnrollment && o.applicants.fallEnrollment.total && o.applicants.fallEnrollment.total.totalEnrolled && Object.values(o.applicants.fallEnrollment.total.totalEnrolled),
                    b = {}
                    b.name = o && o.elevatorInfo && o.elevatorInfo.name
                    b.values = a
                    return b
                }),
                reduce((acc, item) => {
                    let newObj = {}
                    newObj.name = item.name
                    newObj.currentEnrollment = add(...(item.values))
                    if (newObj.currentEnrollment > 0) {
                     acc.push(newObj)
                    }
                    return acc
                 }, []),
                 sort(byCurrentEnrollment),
                 take(lengthOfResult)
            )(data)
            return res.send({success: true, newData})
        })
    .fail(err => {
        log.error(err)
    })
    }

    return new UniLibrary(app)
}
