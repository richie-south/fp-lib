const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const filter = require('../src/filter')

const largerThanTwo = a => a > 2
const isA = a => a === 'a'

describe('filter', () => {

  it('should work with arrays', () => {
    const expected = [3, 4]
    const testArray = [1, 2, 3, 4]
    const result = filter(largerThanTwo, testArray)

    expect(result).to.deep.equal(expected)
  })

  it('should work with objects', () => {
    const expected = { y: 5 }
    const testObject = { x: 1, y: 5 }
    const result = filter(largerThanTwo, testObject)

    expect(result).to.deep.equal(expected)
  })

  it('should work with strings', () => {
    const expected = ['a']
    const testString = 'abc'
    const result = filter(isA, testString)

    expect(result).to.deep.equal(expected)
  })

  it('should be curry:ed', () => {
    const expected = [3, 4]
    const testArray = [1, 3, 4, 2]
    const applyOne = filter(largerThanTwo)
    const result = applyOne(testArray)

    assert.isFunction(applyOne)
    expect(result).to.deep.equal(expected)
  })

})