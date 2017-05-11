const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const find = require('../src/find')

const isOne = a => a === 1
const isIdOne = a => isOne(a.id)
const isC = c => c === 'c'

describe('find', () => {
  it('should find specific item in array', () => {
    const expected = { id: 1 }
    const testArray = [{ id: 1 }, { id: 1, prop: 2 }, { id: 1 }]
    const result = find(isIdOne, testArray)

    expect(result).to.deep.equal(expected)
  })

  it('should return undefined if no value found', () => {
    const expected = undefined
    const testArray = [{ id: 3 }, { id: 2, prop: 2 }, { id: 10 }]
    const result = find(isIdOne, testArray)
    expect(result).to.deep.equal(expected)
  })

  it('should return initial value if applyed', () => {
    const expected = { id: 55 }
    const testArray = [{ id: 3 }, { id: 2, prop: 2 }, { id: 10 }]
    const result = find(isIdOne, testArray, { id: 55 })
    expect(result).to.deep.equal(expected)
  })

  it('should find specific item in none nested object', () => {
    const expected = { a: 1 }
    const testObject = { x: 2, y: 4, a: 1, b: 1 }
    const result = find(isOne, testObject)
    expect(result).to.deep.equal(expected)
  })

  it('should work with strings', () => {
    const expected = 'c'
    const testString = 'abcdefg'
    const result = find(isC, testString)

    expect(result).to.equal(expected)
  })

  it('should be curry:ed', () => {
    const expected = 1
    const testArray = [2, 1, 3, 4]
    const findOne = find(isOne)
    const result = findOne(testArray)

    assert.isFunction(findOne)
    expect(result).to.deep.equal(expected)
  })
})
