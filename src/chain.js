const reduce = require('./reduce')
const curry = require('./curry')

/**
 * Simple chain
 * @param {Function} fn - function to change values
 * @param {Array} array - somthing to fn over
 * @return {Array} _ - collection applyed with fn
 * @example 
 * 
 * const duplicate = n => [n, n]
 * const array = [1, 2]
 * const reuslt = chain(duplicate, array)
 */
const chain = curry((fn, array) => 
  reduce(
    (prev, x) => prev.concat(fn(x)),
    [],
    array
  )
)

module.exports = chain