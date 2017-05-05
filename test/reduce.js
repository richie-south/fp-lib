const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const reduce = require('../src/reduce')

const merge = (a, b) => a + b
const addToArray = (a, v) => a.concat(v)
const addColon = (a, v) => a + (v + ':')

describe('reduce', () => {

  it('should work with arrays', () => {
    const expected = 10
    const testArray = [1, 2, 3, 4]
    const result = reduce(merge, 0, testArray)

    expect(result).to.deep.equal(expected)
  })

  it('should work with objects', () => {
    const expected = [2, 4]
    const testObject = { x: 2, y: 4 }
    const result = reduce(addToArray, [], testObject)

    expect(result).to.deep.equal(expected)
  })

  it('should work with strings', () => {
    const expected = 'a:b:c:'
    const testString = 'abc'
    const result = reduce(addColon, '', testString)

    expect(result).to.deep.equal(expected)
  })

  it('should be curry:ed', () => {
    const expected = 35
    const testArray = [10, 20, 5]
    const applyInitial = reduce(merge)
    const applyArray = applyInitial(0)
    const result = applyArray(testArray)

    assert.isFunction(applyInitial)
    assert.isFunction(applyArray)
    expect(result).to.deep.equal(expected)
  })

})