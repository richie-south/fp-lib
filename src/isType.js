
const isArray = a => Array.isArray(a)

const isString = s => typeof s === 'string'

const isObject = o =>
  isArray(o) ? 
    false : 
    o instanceof Object

module.exports = {
  isArray,
  isString,
  isObject,
}