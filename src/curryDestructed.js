const curryObject = require('./curryObject')
const compose = require('./compose')

/**
 * Match everything inside ( )
 */
const paramsReg = new RegExp(/\(([\s\S]*?)\)/)

/**
 * Match everything inside { }
 */
const objectReg = new RegExp(/{([\s\S]*?)}/)

/**
 * Removes all witespace 
 */
const removeWhitespace = new RegExp(/\s+/g)

/**
 * Get all params from function
 * @param {string} string - function in string form
 * @returns {string} _ - all params from function
 */
const getParams = string => 
  string
    .match(paramsReg)[0]

/**
 * Gets first destructed obejct
 * @param {string} string -  function params
 * @returns {string} _ - first destructed object param
 */
const getObjectParam = string => 
  string 
    .match(objectReg)[0]

/**
 * 
 * @param {Function} fn - function
 * @returns {string} _ - fn as string
 */
const fnToString = fn => 
  fn.toString()

/**
 * Formats params to object string
 * @param {string} destructedString - destructed object param as string
 * @returns {string} _ - string formated as real object
 */
const formatObject = destructedString => 
  destructedString
    .split(',')
    .join(': "","')
    .split('}')
    .join(': "" }')
    .split(':')
    .join('":')
    .split('{')
    .join('{ "')
    .replace(removeWhitespace, '')
    .trim()

/**
 * Get destructed params from fn
 * @param {Function} fn - function to extract params from
 */
const getFnObjectParam = 
  compose(
    JSON.parse,
    formatObject,
    getObjectParam,
    getParams,
    fnToString
  )

/**
 * Simpel curryDestructed
 * @param {Function} fn - function to curry
 * @example 
 * 
 * const add = ({a, b}) => a + b
 * const addC = curryDestructed(add)
 * 
 * addC({b: 1}})({a: 2}) // >> 3
 * addC({a: 1, b: 2}) // >> 3
 *
 */
const curryDestructed = fn => 
  compose(
    curryObject,
    getFnObjectParam
  )(fn)(fn)

module.exports = curryDestructed