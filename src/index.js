const curry = require('./curry')
const compose = require('./compose')
const map = require('./map')
const filter = require('./filter')
const reduce = require('./reduce')
const chain = require('./chain')
const find = require('./find')
const always = require('./always')
const { isArray, isObject, isString } = require('./isType')

module.exports = {
  curry,
  compose,
  map,
  filter,
  reduce,
  chain,
  find,
  always,

  isArray,
  isObject,
  isString,
}