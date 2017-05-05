const curry = require('../curry')

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

const walkObject = curry((_fn, fn, object) => {
  const keys = Object.keys(object)
  const keysLength = keys.length

  const walk = (result = {}, index = 0) => {
    if(keysLength <= index){
      return result
    }
    
    const key = keys[index]
    const value = object[keys[index]]
    const evaluated = fn(value)

    return walk(
      _fn(evaluated, value, key, result),
      index + 1
    )
  }

  return walk()
})

module.exports = {
  walkArray,
  walkObject,
}


