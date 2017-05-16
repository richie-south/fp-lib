const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const pipe = require('../src/compose').pipe

const timeTwo = a => a * 2
const minusOne = a => a - 1
const addTwo = a => a + 2

describe('pipe', () => {

  it('should return function', () => {
    const result = pipe(timeTwo, minusOne)

    assert.isFunction(result)
  })

  it('should run left to right', () => {
    const expected = 3
    const result = pipe(timeTwo, minusOne)(2)

    expect(result).to.equal(expected)
  })

  it('should run functions and compue value', () => {
    const expected = 6
    const result = pipe(addTwo, minusOne, timeTwo)(2)

    expect(result).to.equal(expected)
  })

  it('should work with one function', () => {
    const expected = 4
    const result = pipe(addTwo)(2)

    expect(result).to.equal(expected)
  })

})