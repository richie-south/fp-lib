const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const chain = require('../src/chain')

const duplicate = n => [n, n]
const remove = () => []

describe('chain', () => {

  it('should return duplicated value array', () => {
    const expected = [1, 1, 2, 2, 3, 3]
    const testArray = [1, 2, 3]
    
    const result = chain(duplicate, testArray)

    expect(result).to.deep.equal(expected)
  })

  it('should remove all items in array', () => {
    const expected = []
    const testArray = [1, 2, 3]
    const result = chain(remove, testArray)

    expect(result).to.deep.equal(expected)
  })

  it('should be curry:ed', () => {
    const expected = [1, 1]
    const testArray = [1]
    const duplicateValues = chain(duplicate)
    const result = duplicateValues(testArray)

    assert.isFunction(duplicateValues)
    expect(result).to.deep.equal(expected)
  })

})