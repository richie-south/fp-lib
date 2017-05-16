const curry = require('./curry')
const map = require('./map')
const reduce = require('./reduce')

/**
 * Simple ap
 * @param {Array} fns - array of functions
 * @param {Array} values - array of values
 * @return {Array} _ - Array of values applyed with fns
 * @example 
 * 
 * const addTwo = a => a + 2
 * const minusOne = a => a - 1
 * const result = ap([addTwo, minusOne], [1, 2, 3]) // >> [3, 4, 5, 0, 1, 2]
 */
const ap = curry((fns, values) =>
  reduce((result, f) =>
    result.concat(
      map(f, values)
    ),
    [],
    fns
  )
)

module.exports = ap
