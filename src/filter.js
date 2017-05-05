const curry = require('./curry')
const { walkArray, walkObject } = require('./utils/walk')
const { isArray, isString } = require('./isType')

/**
 * Simple array filter
 */
const arrayFilter = walkArray(
  (r, e, c) => r ? c.concat(e) : c
)


/**
 * Simple object filter
 */
const objectFilter = walkObject(
  (r, v, k, c) => r ? Object.assign({}, c, {[k]: v}) : c
)

/**
 * Simple filter
 * @param {Function} fn - function to change values
 * @param {Array||Object||string} collection - somthing to filter over
 * @return {Array||Object||string} _ - collection filtered with fn
 * @example 
 * 
 * const largerThanOne = a => a > 1
 * const array = [1, 2, 3, 4, 0]
 * const result = filter(addOne, array)
 */
const filter = curry((fn, collection) =>
  isArray(collection) || 
  isString(collection) ?
    arrayFilter(fn, collection) : 
    objectFilter(fn, collection)
)

module.exports = filter
