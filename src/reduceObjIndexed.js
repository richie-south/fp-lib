const curry = require('./curry')
const { walkObject } = require('./utils/walk')


/**
 * Simple object reduce
 */
const objectReduce = walkObject(
  (fn, value, key, result, index) =>
    [fn(result, [key, value], index), false]
)

/**
 * Simple reduce
 * @param {Function} fn - function to change values
 * @param {Any} initialValue - initial value for fn
 * @param {Array||Object||string} collection - somthing to reduce over
 * @return {Any} _ - collection reduced by fn
 * @example
 *
 * const addToArray = (a, [key, value]) => a.concat(key, value)
 * const object = { x: 2, y: 4 }
 * const result = reduceObjIndexed(addToArray, [], object)
 */
const reduceObjIndexed = curry((fn, initialValue, collection) =>
  objectReduce(fn, collection, initialValue)
)

module.exports = reduceObjIndexed
