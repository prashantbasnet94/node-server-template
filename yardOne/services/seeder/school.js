/* eslint-disable quotes */
/* eslint-disable camelcase */
const e = require('express')
const
    {map} = require('ramda'),
    q = require('q')
module.exports = function (app) {
    let
    self,
    Log = app.get('log'),
    log = Log.child({sedder: 'School'})
    function Seeder(app) {
        //sammple service type
        self = this
        self.hiveOne = app.get('hiveOne')
        self.hiveTwo = app.get('hiveTwo')
        self.mediate = {}
        // self.schoolSeeder = require('../../services/seeder/school')(app)

    }
    Seeder.prototype.sampleServiceFunction = () => {
        try {
            return q.all([self.prototype.institutionCharacter.find({}).lean(), self.prototype.library.find({}).lean()])
            .spread((allUniCharcter, allUniLibrary) => {
                log.info({message: `total ${allUniCharcter.length} records found`})
                let
                charcterQueries = map(o => {
                    let
                        config = {log},
                        urls = self.mediate.prototype.loadSchoolUrlsFromPrototype(o, config),
                        constuctMyObj = {
                            'elevatorInfo.urls': urls
                        },
                        filter = {'elevatorInfo.name': o['InstitutionName']},
                        update = constuctMyObj
                    return q(self.schoolModel.findOneAndUpdate(filter, update, {returnOriginal: false}).lean().exec())
                })(allUniCharcter),
                libraryQueries = map(o => {
                    let
                        config = {log},
                        library = self.mediate.prototype.loadLibraryInfoFromPrototype(o, config),
                        constuctMyObj = {
                            'library': library
                        },
                        filter = {'elevatorInfo.name': o['InstitutionName']},
                        update = constuctMyObj
                    return q(self.schoolModel.findOneAndUpdate(filter, update, {returnOriginal: false}).lean().exec())
                })(allUniLibrary)
                console.log('getting in q.all', charcterQueries.length)
                return q.all([charcterQueries, libraryQueries])
                .spread((characterRecords, libraryRecords) => {
                    console.log('spreading at all ----', characterRecords.length, libraryRecords.length)
                    const result = {}
                    result.totalCharacterRecords = characterRecords.length
                    result.totalLibraryRecords = libraryRecords.length
                    return ({status: true, result})
                }).fail(err => {
                   log.info(err)
                })
            })
        } catch (err) {
            log.err(e)
        }
    }
    return new Seeder(app)
}
