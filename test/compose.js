const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const compose = require('../src/compose')

const timeTwo = (a) => a * 2
const minusOne = (a) => a - 1
const addTwo = (a) => a + 2

describe('compose', () => {

  it('should return function', () => {
    const result = compose(timeTwo, minusOne)
    
    assert.isFunction(result)
  })

  it('should run left to right', () => {
    const expected = 1
    const result = compose(addTwo, minusOne)(0)

    expect(result).to.equal(expected)
  })

  it('should run compose functions and compue value', () => {
    const expected = 5
    const result = compose(addTwo, minusOne, timeTwo)(2)

    expect(result).to.equal(expected)
  })

  it('should work with one function', () => {
    const expected = 4
    const result = compose(addTwo)(2)
    
    expect(result).to.equal(expected)
  })
  
})