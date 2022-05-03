const
    {assoc, map, filter} = require('ramda')
    const findMissingSchools = config => {
            const
                {fullListFromDb, currentList} = config,
                allUni = map(eachUni => {
                    const
                        name = assoc('name', eachUni.elevatorInfo.name, {})
                        return assoc('unitId', eachUni.unitId, name)
                })(fullListFromDb),
                processedAllUni = filter(o => o.name)(allUni),
                currentNames = map(o => o.Institute_Name)(currentList),
                result = filter(o => !currentNames.includes(o.name))(processedAllUni)
            return result || []
        },
        trimChars = o => {
            if (o && typeof o !== 'number') {
                let trimmed = o.replace(/\D/g, '')
                return parseInt(trimmed)
            }
            return NaN
        },
        converToBoolean = o => {
            if (o || o === 0) {
                const
                    possibleTrue = [true, 'True', 'true', 'Yes', 'yes', 'required', 'Required', 'true', true, 1, '1'],
                    possibleFalse = [false, 'false', 'No', 'no', 'Considered but not required', 'Neither required nor recommended', '0', 'false', 'nay', false, 0],
                    result = possibleTrue.includes(o) ? true : (possibleFalse.includes(o) ? false : 'not included in list')
                return result
            }
            return NaN
        },
        gradeMapper = o => {
            if (o) {
                const
                    myMapper = {
                        aPlus: ['A+', 'a+', 'A plus'],
                        a: ['A', 'a'],
                        aMinus: ['A-', 'A minus', 'A Minus', 'a minus'],
                        bPlus: ['B+', 'b+', 'B plus'],
                        b: ['B', 'b'],
                        bMinus: ['B-', 'B minus', 'B Minus', 'B -'],
                        cPlus: ['C+', 'c+', 'C plus'],
                        c: ['C', 'c'],
                        cMinus: ['c-', 'C-', 'C Minus', 'C minus', 'c minus', 'c -'],
                        dPlus: ['D+', 'd+', 'D plus'],
                        d: ['D', 'd'],
                        dMinus: ['D-', 'd -', 'D -', 'D Minus', 'd minus', 'D minus'],
                        ePlus: ['E+', 'E+', 'E plus'],
                        e: ['E', 'e'],
                        eMinus: ['E-', 'd -', 'E -', 'E Minus', 'E minus', 'E minus']
                    },
                    {aPlus, a, aMinus, bPlus, b, bMinus, cPlus, c, cMinus, dPlus, d, dMinus, ePlus, e, eMinus} = myMapper,
                    execptions = ['unavailable', null, 'underfined', undefined]

                if (aPlus.includes(o)) {
                    return 100
                } else if (a.includes(o)) {
                    return 95
                } else if (aMinus.includes(o)) {
                    return 90
                } else if (bPlus.includes(o)) {
                    return 85
                } else if (b.includes(o)) {
                    return 80
                } else if (bMinus.includes(o)) {
                    return 75
                } else if (cPlus.includes(o)) {
                    return 70
                } else if (c.includes(o)) {
                    return 65
                } else if (cMinus.includes(o)) {
                    return 60
                } else if (dPlus.includes(o)) {
                    return 55
                } else if (d.includes(o)) {
                    return 50
                } else if (dMinus.includes(o)) {
                    return 45
                } else if (ePlus.includes(o)) {
                    return 40
                } else if (e.includes(o)) {
                    return 35
                } else if (eMinus.includes(o)) {
                    return 30
                } else if (execptions.includes(o)) {
                    return null
                }
            }
            return NaN
        },
        rangeNumberMap = o => {
            if (o) {
                let
                    [min, max] = o.split('-')
                min = trimChars(min)
                max = trimChars(max)
                return {min, max}
            }
        }

module.exports = {
    findMissingSchools,
    converToBoolean,
    gradeMapper,
    rangeNumberMap,
    trimChars
}
