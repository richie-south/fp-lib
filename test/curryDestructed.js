const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const curryDestructed = require('../src/curryDestructed')

describe('curryDestructed', () => {

  it('should return function', () => {
    const testFn = ({a}) => a

    const result = curryDestructed(testFn)
    assert.isFunction(result)
  })

  it('should return result of fn after all parameters have been supplied', () => {
    const expected = 3
    const testFn = ({ b, a }) => a + b
    const result = curryDestructed(testFn)({ a: 1 })({ b: 2 })

    expect(result).to.equal(expected)
  })

  it('pass parameers how ever you want', () => {
    const expected = 2
    const testFn = ({ a, b}) => a + b

    const addC = curryDestructed(testFn)
    const resultOne = addC({ a: 1, b: 1})
    const resultTwo = addC({ b: 1 })({ a: 1})
    const resultThree = addC()({ b: 1, a: 1})
    
    expect(resultOne).to.equal(expected)
    expect(resultTwo).to.equal(expected)
    expect(resultThree).to.equal(expected)
  })

  it('should work on single param function', () => {
    const expected = 2
    const testFn = ({ a }) => a + 1

    const result = curryDestructed(testFn)({a: 1})

    expect(result).to.equal(expected)
  })

})