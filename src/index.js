const curry = require('./curry')
const compose = require('./compose')
const map = require('./map')
const filter = require('./filter')
const reduce = require('./reduce')
const chain = require('./chain')
const always = require('./always')
const { isArray, isObject, isString } = require('./isType')

module.exports = {
  curry,
  compose,
  map,
  filter,
  reduce,
  chain,
  always,
  
  isArray, 
  isObject, 
  isString,
}