const {prototype} = require('mocha')
const q = require('q')
module.exports = function(app) {
    let
    self,
    Log = app.get('log'),
    log = Log.child({controller: 'gql-resolver'})
    function SchoolResolver (app) {
        self = this
        self.db = {}
        self.db.hiveOne = app.get('hiveOne')
        self.db.hiveOne.schoolModel = self.db.hiveOne.model('School')
        self.db.hiveThree = app.get('hiveThree')
        self.db.hiveThree.institutionCharacter = self.db.hiveThree.model('institutioncharacters')
        self.schoolDbSeeder = require('../../../services/seeder/school')(app)
    }
    SchoolResolver.prototype.resolver = () => {
            let myResolver = {
                getSchoolInfo: param => {
                    try {
                        const args = param.name
                        return q.all([
                            self.db.hiveOne.schoolModel.findOne({'elevatorInfo.name': args}).lean()
                        ])
                        .spread(data => {
                            return data
                        })

                    } catch (e) {
                        log.error(e)
                    }
                },
                mergeProtoTypeDb: () => {
                    //calling service to load from db that was used for prototype
                    return self.schoolDbSeeder.loadAllFromPrototypeDb()
                }
            }
            return myResolver
    }
    return new SchoolResolver(app)
}
