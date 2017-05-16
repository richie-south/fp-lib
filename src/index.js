const curry = require('./curry')
const compose = require('./compose')
const pipe = compose.pipe
const map = require('./map')
const filter = require('./filter')
const reduce = require('./reduce')
const chain = require('./chain')
const find = require('./find')
const always = require('./always')
const ap = require('./ap')
const { isArray, isObject, isString } = require('./isType')

module.exports = {
  always,
  ap,
  chain,
  compose,
  curry,
  filter,
  find,
  isArray,
  isObject,
  isString,
  map,
  pipe,
  reduce,
}