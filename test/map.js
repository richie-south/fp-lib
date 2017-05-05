const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const map = require('../src/map')

const addOne = a => a + 1

describe('map', () => {

  it('should work with arrays', () => {
    const expected = [2, 3, 4, 5]
    const testArray = [1, 2, 3, 4]
    const result = map(addOne, testArray)

    expect(result).to.deep.equal(expected)
  })

  it('should work with objects', () => {
    const expected = { x: 3, y: 5}
    const testObject = { x: 2, y: 4 }
    const result = map(addOne, testObject)

    expect(result).to.deep.equal(expected)
  })

  it('should work with strings', () => {
    const expected = [ 'a1', 'b1', 'c1' ]
    const testString = 'abc'
    const result = map(addOne, testString)

    expect(result).to.deep.equal(expected)
  })

  it('should be curry:ed', () => {
    const expected = [2, 3, 4, 5]
    const testArray = [1, 2, 3, 4]
    const applyOne = map(addOne)
    const result = applyOne(testArray)

    assert.isFunction(applyOne)
    expect(result).to.deep.equal(expected)
  })

})