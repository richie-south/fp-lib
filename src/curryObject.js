const { isArray } = require('./isType')
const { walkObject, walkArray } = require('./utils/walk')
const curry = require('./curry')

/**
 * Matches array tamplate with target keys
 * @param {Array} tamplate - object of keys to fufill
 * @param {Object} target - object to match keys with
 * @returns {boolean} _ - full match or not
 */
const matchObject = (template, target) => 
  walkObject((_, __, key) => 
    !target.hasOwnProperty(key) 
      ? [false, true]
      : [true, false],
    null, 
    template, 
    true
  )

/**
 * Matches array keys with target jeys
 * @param {Array} keys - array of keys to fufill
 * @param {Object} target - object to match keys with
 * @returns {boolean} _ - full match or not
 */
const matchArray = (keys, target) => 
  walkArray((_, key) => 
    !target.hasOwnProperty(key) 
      ? [false, true]
      : [true, false], 
    null, 
    keys, 
    true
  )

/**
 * Simple curryObject with template
 * @param {object|array} template - template that holds params to fufill
 * @param {Function} fn - fn to curry
 * @param {object} curryArgs - first args 
 * @returns {Function} _ - fn to take rest of the args
 * @param {object} args - rest or some of the args
 * @returns {any|Function} _ - eather result of curried fn or curryObject
 */
const curryObject = curry((template, fn, curryArgs = {}) => (args = {}) => {
  const concatedArgs = Object.assign({}, curryArgs, args)
  const _fn = curry(fn)
 
  if(isArray(template)) {
    return matchArray(template, concatedArgs) 
      ? _fn(concatedArgs)
      : curryObject(template, _fn, concatedArgs) 
  }

  return matchObject(template, concatedArgs) 
    ? _fn(concatedArgs)
    : curryObject(template, _fn, concatedArgs)
})

module.exports = curryObject