const curry = require('./curry')
const { walkArray, walkObject } = require('./utils/walk')
const { isArray, isString } = require('./isType')

/**
 * Simple array map
 */
const arrayMap = walkArray(
  (fn, element, result, index) =>
    [result.concat(fn(element, index)), false]
)

/**
 * Simple object map
 */
const objectMap = walkObject(
  (fn, value, key, result, index) =>
    [Object.assign({}, result, { [key]: fn(value, index) }), false]
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
const map = curry(
  (fn, collection) =>
    isArray(collection) || isString(collection)
      ? arrayMap(fn, collection, [])
      : objectMap(fn, collection, {})
)

module.exports = map
