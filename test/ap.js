const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const ap = require('../src/ap')

const addTwo = v => v + 2
const multiplyByTwo = v => v * 2
const concatHello = v => 'Hello '.concat(v)

describe('ap', () => {

  it('should addTwo and multibply values', () => {
    const expected = [3, 6, 8, 2, 8, 12]
    const testArray = [1, 4, 6]

    const result = ap([addTwo, multiplyByTwo], testArray)

    expect(result).to.deep.equal(expected)
  })

  it('should concat hello to strings', () => {
    const expected = ['Hello world', 'Hello Jonas']
    const testArray = ['world', 'Jonas']

    const result = ap([concatHello], testArray)

    expect(result).to.deep.equal(expected)
  })

  it('should be curry:ed', () => {
    const expected = [3, 4]
    const testArray = [1, 2]

    const applyOne = ap([addTwo])
    const result = applyOne(testArray)

    assert.isFunction(applyOne)
    expect(result).to.deep.equal(expected)
  })

})