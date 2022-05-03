
module.exports = function (app) {
    let
    self = {}

    function MyResolver (app) {
        self.schoolResolver = require('./school')(app)

    }
    MyResolver.prototype.constructResolver = () => {
        let schoolResolver = self.schoolResolver.resolver()
        return {...schoolResolver}
    }
    return new MyResolver(app)
}
