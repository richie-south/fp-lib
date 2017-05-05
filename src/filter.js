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
 * Simple map
 * @param {Function} fn - function to change values
 * @param {Array||Object||string} collection - somthing to map over
 * @return {Array||Object||string} _ - collection applyed with fn
 * @example 
 * 
 * const addOne = a => a + 1
 * const array = [1, 2, 3, 4]
 * const result = map(addOne, array)
 */
const map = curry((fn, collection) =>
  isArray(collection) || 
  isString(collection) ?
    arrayFilter(fn, collection) : 
    objectFilter(fn, collection)
)

module.exports = map
