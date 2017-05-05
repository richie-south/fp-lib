const curry = require('./curry')
const { isArray, isString } = require('./isType')

/**
 * Simple array map
 * @param {Function} fn - function to change values
 * @param {Array} array - array to map over
 * @return {Array} _ - array values applyed with fn
 * @example 
 * 
 * const addOne = a => a + 1
 * const array = [1, 2, 3, 4]
 * const result = arrayMap(addOne, array)
 */
const arrayMap = curry((fn, array) => {
  const arrayLength = array.length

  const _map = (result = [], index = 0) => {
    if(arrayLength <= index){
      return result
    }

    const element = array[index]

    return _map(
      result.concat(fn(element)), 
      index + 1
    )
  }

  return _map()
})

/**
 * Simple object map
 * @param {Function} fn - function to change values
 * @param {Object} object - object to map over
 * @return {Object} _ - object values applyed with fn
 * @example 
 * 
 * const addOne = a => a + 1
 * const object = { x: 1, y: 2 }
 * const result = objectMap(addOne, object)
 */
const objectMap = curry((fn, object) => {
  const keys = Object.keys(object)
  const keysLength = keys.length

  const _map = (result = {}, index = 0) => {
    if(keysLength <= index){
      return result
    }
    
    const key = keys[index]
    const value = object[keys[index]]

    return _map(
      Object.assign({}, result, {
        [key]: fn(value),
      }),
      index + 1
    )
  }

  return _map()
})

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
    arrayMap(fn, collection) : 
    objectMap(fn, collection)
)

module.exports = map
