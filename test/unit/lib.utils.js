const
chai = require('chai'),
{expect} = chai,
{trimChars, converToBoolean, gradeMapper, rangeNumberMap} = require('../../app/services/lib/utils')


describe('Trim chars convert to number', () => {
	it('should return only number', () => {
        expect(trimChars('2%')).to.equal(2)
        expect(trimChars('200%')).to.equal(200)
        expect(trimChars('$10%')).to.equal(10)
        expect(trimChars('10%')).to.equal(10)
        expect(trimChars('$1,300')).to.equal(1300)
        expect(trimChars('$6,920%')).to.equal(6920)
        expect(trimChars('$57,143')).to.equal(57143)
        expect(trimChars('600  (contact hours)')).to.equal(600)
        expect(trimChars('$test my number 0')).to.equal(0)
    })
})


describe('Convert to boolean', () => {
	it('should return only boolean', () => {
        expect(converToBoolean('true')).to.equal(true)
        expect(converToBoolean('True')).to.equal(true)
        expect(converToBoolean('required')).to.equal(true)
        expect(converToBoolean('Yes')).to.equal(true)
        expect(converToBoolean('1')).to.equal(true)

        expect(converToBoolean('nay')).to.equal(false)
        expect(converToBoolean('Considered but not required')).to.equal(false)
        expect(converToBoolean('Neither required nor recommended')).to.equal(false)
        expect(converToBoolean(0)).to.equal(false)
    })
})

describe('Grade to number mapper', () => {
	it('should return number from grade', () => {
        expect(gradeMapper('A plus')).to.equal(100)
        expect(gradeMapper('A+')).to.equal(100)

        expect(gradeMapper('A')).to.equal(95)
        expect(gradeMapper('a')).to.equal(95)

        expect(gradeMapper('A-')).to.equal(90)
        expect(gradeMapper('A minus')).to.equal(90)

        expect(gradeMapper('B+')).to.equal(85)
        expect(gradeMapper('B plus')).to.equal(85)

        expect(gradeMapper('B')).to.equal(80)
        expect(gradeMapper('b')).to.equal(80)

        expect(gradeMapper('B minus')).to.equal(75)
        expect(gradeMapper('B -')).to.equal(75)

        expect(gradeMapper('C+')).to.equal(70)
        expect(gradeMapper('C plus')).to.equal(70)

        expect(gradeMapper('C')).to.equal(65)
        expect(gradeMapper('c')).to.equal(65)

        expect(gradeMapper('C minus')).to.equal(60)
        expect(gradeMapper('c -')).to.equal(60)

        expect(gradeMapper('D+')).to.equal(55)
        expect(gradeMapper('D plus')).to.equal(55)

        expect(gradeMapper('D')).to.equal(50)
        expect(gradeMapper('d')).to.equal(50)

        expect(gradeMapper('D minus')).to.equal(45)
        expect(gradeMapper('d -')).to.equal(45)

        expect(gradeMapper('E+')).to.equal(40)
        expect(gradeMapper('E plus')).to.equal(40)

        expect(gradeMapper('E')).to.equal(35)
        expect(gradeMapper('e')).to.equal(35)

        expect(gradeMapper('E minus')).to.equal(30)
        expect(gradeMapper('E -')).to.equal(30)
    })
})


describe('Range string to number mapper', () => {
	it('should return number min and max', () => {
        expect(rangeNumberMap('970-1250')).to.eql({min: 970, max: 1250})
        expect(rangeNumberMap('24-29')).to.eql({min: 24, max: 29})
    })
})
