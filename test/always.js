const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const always = require('../src/always')

describe('always', () => {

  it('should always return same value', () => {
    const expected = 10
    const testValue = 10
    
    const getTen = always(testValue)

    expect(getTen()).to.deep.equal(expected)
    expect(getTen()).to.deep.equal(expected)
    expect(always(testValue)([])).to.deep.equal(expected)
    expect(always(testValue)(11)).to.deep.equal(expected)
  })

})