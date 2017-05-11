const curry = require('./curry')
const { walkArray } = require('./utils/walk')

/**
 * Simple array chain
 */
const arrayChain = walkArray((fn, element, result, index) =>
  [result.concat(fn(element, index)), false]
)

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
const chain = curry((fn, collection) => arrayChain(fn, collection, []))

module.exports = chain