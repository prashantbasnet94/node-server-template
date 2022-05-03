let
express = require('express'),
app = express(),
config = require('../config/index'),
{graphqlHTTP} = require('express-graphql'),
userHandler = require('./middleware/authentication')(app),
log = require('./services/log/index')

app.authMiddleware = userHandler.ensureAuthentication
app.overflow = userHandler.overflow
log.info('test')
app.set('log', log)
app.set('config', config)
require('./services/lib/connectDb')(app)
require('./api/rest/routes/index')(app)
require('./api/rest/routes/oauth')(app)
require('./api/rest/routes/school')(app)

const
graphqlSchema = require('./api/gql/schema')(app),
graphqlResolver = require('./api/gql/resolver')(app)
app.use(
    '/graphql',
    graphqlHTTP({
      schema: graphqlSchema.constructSchema(),
      rootValue: graphqlResolver.constructResolver(),
      graphiql: true
    })
  )
app.listen(config.port)


