

const
{buildSchema} = require('graphql'),
school = require('./school')


module.exports = function (app) {
    let
    types = [],
    queries = [],
    mutations = [],
    schemas = [school]
    function MySchema(app) {

    }
    MySchema.prototype.constructSchema = () => {
        schemas.forEach(schema => {
            types.push(schema.types)
            queries.push(schema.queries)
            mutations.push(schema.mutations)
        })
        return buildSchema(`
            ${types.join('\n')}
            
            type rootQuery{
                ${queries.join('\n')}
            }
            type rootMutation{
                ${mutations.join('\n')}
            }
            schema{
                query:rootQuery
                mutation: rootMutation
            }
        `)
    }
    return new MySchema(app)
}
