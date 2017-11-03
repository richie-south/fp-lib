const curry = require('./curry')
const { isArray, isString } = require('./isType')
const { walkArray, walkObject } = require('./utils/walk')

/**
 * Simple array reduce
 */
const arrayReduce = walkArray(
  (fn, element, result, index) =>
    [fn(result, element, index), false]
)

/**
 * Simple object reduce
 */
const objectReduce = walkObject(
  (fn, value, key, result, index) =>
    [fn(result, value, index), false]
)

/**
 * Simple reduce
 * @param {Function} fn - function to change values
 * @param {Any} initialValue - initial value for fn
 * @param {Array||Object||string} collection - somthing to reduce over
 * @return {Any} _ - collection reduced by fn
 * @example
 *
 * const merge = (a, b) => a + b
 * const array = [1, 2, 3, 4]
 * const result = reduce(merge, 0, array)
 */
const reduce = curry((fn, initialValue, collection) =>
  isArray(collection) ||
    isString(collection) ?
    arrayReduce(fn, collection, initialValue) :
    objectReduce(fn, collection, initialValue)
)

module.exports = reduce
