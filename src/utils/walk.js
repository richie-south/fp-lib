const curry = require('../curry')

/**
 * Simple array walk
 * @param {Function} _fn - returns new result or old
 * @param {Function} fn - function to change values
 * @param {Array||string} collection - somthing to fn over
 * @return {Array||string} _ - collection change by fn
 */
const walkArray = curry((_fn, fn, array) => {
  const arrayLength = array.length

  const walk = (result = [], index = 0) => {
    if(arrayLength <= index){
      return result
    }

    const element = array[index]

    return walk(
      _fn(fn(element), element, result), 
      index + 1
    )
  }
  return walk()
})

/**
 * Simple object walk
 * @param {Function} _fn - returns new result or old
 * @param {Function} fn - function to change values
 * @param {Object} collection - somthing to fn over
 * @return {Object} _ - collection change by fn
 */
const walkObject = curry((_fn, fn, object) => {
  const keys = Object.keys(object)
  const keysLength = keys.length

  const walk = (result = {}, index = 0) => {
    if(keysLength <= index){
      return result
    }
    
    const key = keys[index]
    const value = object[keys[index]]
    const evaluatedValue = fn(value)

    return walk(
      _fn(evaluatedValue, value, key, result),
      index + 1
    )
  }

  return walk()
})

module.exports = {
  walkArray,
  walkObject,
}


