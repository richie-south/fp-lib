const curry = require('./curry')
const compose = require('./compose')
const map = require('./map')
const filter = require('./filter')
const { isArray, isObject, isString } = require('./isType')

module.exports = {
  curry,
  compose,
  map,
  filter,
  
  isArray, 
  isObject, 
  isString,
}