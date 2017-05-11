const curry = require('../curry')

/**
 * Simple array walk
 * @param {Function} _fn - returns new result or old
 * @param {Function} fn - function to change values
 * @param {Array||string} collection - somthing to fn over
 * @param {Any} initial - initial value for fn
 * @return {Array||string} _ - collection change by fn
 */
const walkArray = curry((_fn, fn, array, initial) => {
  const arrayLength = array.length

  const walk = (result, index = 0) => {
    if (arrayLength <= index) {
      return result
    }

    const element = array[index]
    const [value, doEarlyreturn] = _fn(fn, element, result, index)

    return doEarlyreturn ? value : walk(value, index + 1)
  }
  return walk(initial)
})

/**
 * Simple object walk
 * @param {Function} _fn - returns new result or old
 * @param {Function} fn - function to change values
 * @param {Object} collection - somthing to fn over
 * @param {Any} initial - initial value for fn
 * @return {Object} _ - collection change by fn
 */
const walkObject = curry((_fn, fn, object, initial) => {
  const keys = Object.keys(object)
  const keysLength = keys.length

  const walk = (result, index = 0) => {
    if (keysLength <= index) {
      return result
    }

    const key = keys[index]
    const value = object[keys[index]]
    const [_value, doEarlyreturn] = _fn(fn, value, key, result, index)

    return doEarlyreturn ? _value : walk(_value, index + 1)
  }

  return walk(initial)
})

module.exports = {
  walkArray,
  walkObject,
}


