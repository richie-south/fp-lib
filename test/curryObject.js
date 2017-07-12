const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const curryObject = require('../src/curryObject')

const add = (object) => object.a + object.b
const simple = (object) => object.a + 1
const complex = (object, a) => object.a + a

const arrayTemplate = [
  'a',
  'b',
  'c',
]

const template = {
  a: 0,
  b: 0,
}

const simpleTemplate = {
  a: 0,
}

describe('curryObject', () => {

  it('should return function', () => {
    const result = curryObject(template, add)

    assert.isFunction(result)
  })

  it('should return result of fn after all parameters have been supplied', () => {
    const expected = 3
    const result = curryObject(template, add)({ a: 1 })({ b: 2 })

    expect(result).to.equal(expected)
  })

  it('pass parameers how ever you want', () => {
    const expected = 2
    const addC = curryObject(template, add)
    const resultOne = addC({ a: 1, b: 1})
    const resultTwo = addC({ b: 1 })({ a: 1})
    const resultThree = addC()({ b: 1, a: 1})
    
    expect(resultOne).to.equal(expected)
    expect(resultTwo).to.equal(expected)
    expect(resultThree).to.equal(expected)
  })

  it('should work with template array', () => {
    const expected = 2
    const addC = curryObject(arrayTemplate, add)
    const resultOne = addC({ a: 1, b: 1, c: 2})
    const resultTwo = addC({ b: 1 })({ a: 1})({c: 1})
    const resultThree = addC()({ b: 1, a: 1, c: 1})
    
    expect(resultOne).to.equal(expected)
    expect(resultTwo).to.equal(expected)
    expect(resultThree).to.equal(expected)
  })

  it('should work on single param function', () => {
    const expected = 2
    const result = curryObject(simpleTemplate, simple)({a: 1})

    expect(result).to.equal(expected)
  })

  it('should work with multible params', () => {
    const expected = 2
    const result = curryObject(simpleTemplate, complex)({a: 1})(1)

    expect(result).to.equal(expected)
  })

  it('should be curried', () => {
    const expected = 2
    const withTemplate = curryObject(template)
    const addC = withTemplate(add)
    const resultOne = addC({ a: 1, b: 1})
    const resultTwo = addC({ b: 1 })({ a: 1})
    const resultThree = addC()({ b: 1, a: 1})
    
    expect(resultOne).to.equal(expected)
    expect(resultTwo).to.equal(expected)
    expect(resultThree).to.equal(expected)
  })
})