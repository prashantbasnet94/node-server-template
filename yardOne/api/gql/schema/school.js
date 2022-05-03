
module.exports = {
    types: `
        type Address {
            city: String
        }
       
        type ElevatorInfo {
            address: Address
            city: String
            name: String
            ownTyple: String
        }
        type School {
            elevatorInfo: ElevatorInfo
        }
        type PrototypeMerge {
            totalCharacterRecords: Float
            totalLibraryRecords: Float
        }
        type Success {
            status: Boolean
            result: PrototypeMerge
        }
        `,
    queries: 'getSchoolInfo(name: String): School',

    mutations: 'mergeProtoTypeDb: Success '
}


