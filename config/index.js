const
env = 'development'

var config = {
    development: {
      env: env,
      crypto: {
        V1: {}
      },
      port: 4000,
      port2: 4001,
      port3: 4001,
      mongouri: {
        key: 'message that decrypts following uri',
        hiveOne: 'U2FsdGVkX185diKf5kgp3yTsLspZOXFmFwaEc2GlmJR+ilZ7rY3/CMG4i5Hu49i6Ixd74EpeDEZx3fP1epRPgw==',
        hiveTwo: 'U2FsdGVkX19yj7W7ThpdQcCkc30/o40fukDpqe8Zh0r7q9eKrMirEEgEfY0RNV838nKKlWzKarTpOnTo9dtiHzU39FAbtwbFZF+fn6mpWh4bgp0h4/rhqhMqR+5qV2aaTs6bL4o7cMb6zTZ9ujOETQ==',
        hiveThree: 'U2FsdGVkX18YX6SZ/w9dUSlDrY2tpssreV8pzLdKZVCVQckaGm3KMVdi5o1EJUZzPP1+JyXRUSG9nnUJflL7mwc4o1zpQcR8uMoz0E7enzrJdtKkTpTeAanDOvucMmNRwis6+40SWEoKN22zHdpDOMGIbDaVktMjMKWG9KKYQGs='
      }
    },
    test: {
      crypto: {
        V1: { }
      },
      port: 4000,
      mongouri: ''
    },
    production: {
      crypto: {
        V1: {}
      },
      port: 3000
    }
  }
  module.exports = config[env]
