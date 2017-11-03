const chai = require('chai')
const expect = chai.expect

const reduceObjIndexed = require('../src/reduceObjIndexed')

const addToArray = (a, [key, value]) => a.concat(key, value)

describe('reduceObjIndexed', () => {

  it('should give key value', () => {
    const expected = ['x', 2, 'y', 4]
    const testObject = { x: 2, y: 4 }
    const result = reduceObjIndexed(addToArray, [], testObject)

    expect(result).to.deep.equal(expected)
  })
})
