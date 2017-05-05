const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const curry = require('../src/curry')

const add = (a, b, c) => a + b + c
const simple = a => a

describe('curry', () => {

  it('should return function', () => {
    const result = curry(add)
    
    assert.isFunction(result)
  })

  it('should return result of fn after all parameters have been supplied', () => {
    const expected = 3
    const result = curry(add)(1)(1)(1)

    expect(result).to.equal(expected)
  })

  it('pass parameers how ever you want', () => {
    const expected = 3
    const addC = curry(add)
    const resultOne = addC(1, 1 ,1)
    const resultTwo = addC(1, 1)(1)
    const resultThree = addC()(1, 1 ,1)
    
    expect(resultOne).to.equal(expected)
    expect(resultTwo).to.equal(expected)
    expect(resultThree).to.equal(expected)
  })

  it('should work on single param function', () => {
    const expected = 1
    const result = curry(simple)(1)

    expect(result).to.equal(expected)
  })

})