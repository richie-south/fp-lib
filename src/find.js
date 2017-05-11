const curry = require('./curry')
const { walkArray, walkObject } = require('./utils/walk')
const { isArray, isString } = require('./isType')

/**
 * Simple array find
 */
const arrayFind = walkArray(
  (fn, element, result, index) =>
    fn(element, index) ?
      [element, true] :
      [result, false]
)

/**
 * Simple object find
 */
const objectFind = walkObject(
  (fn, value, key, result, index) =>
    fn(value, key, index) ?
      [{ [key]: value }, true] :
      [result, false]
)

/**
 * Simple reduce
 * @param {Function} fn - function to evaluate values
 * @param {Array||Object||string} collection - somthing to find item in
 * @return {Any} _ - value found by fn
 * @example 
 * 
 * const isOne = a => a === 1
 * const array = [2, 1, 5, 4]
 * const one = reduce(isOne, array)
 */
const find = curry(
  (fn, collection, initial = undefined) =>
    isArray(collection) || isString(collection)
      ? arrayFind(fn, collection, initial)
      : objectFind(fn, collection, initial)
)


module.exports = find
