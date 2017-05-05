/**
 * Simple compose
 * @param {Function} fn - first function to evaluate
 * @param {Array} fns - rest of functions
 * @return {Function} _ - function to take rest of args
 * @param {Array} args - initial params
 * @return {Any} _ - returns result compose
 * @example 
 * 
 * const addTwo = (a) => a + 2
 * const minusOne = (a) => a - 1
 * const result = _compose(addTwo, minusOne)(2)
 */
const _compose = (fn, ...fns) => (...args) => 
  fns
    .reduce((g, f) => f(g), fn(...args))

/**
 * @param {Array} fns - array of functions
 * @returns {Function} _compose* 
 * @example 
 * 
 * const addTwo = (a) => a + 2
 * const minusOne = (a) => a - 1
 * const result = compose(addTwo, minusOne)(2)
 */
const compose = (...fns) => 
  _compose(...fns.reverse())

module.exports = compose

