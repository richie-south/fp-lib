const { isArray } = require('./isType')
const { walkObject, walkArray } = require('./utils/walk')
const curry = require('./curry')

const doMatchObject = (template, target) => 
  walkObject((_, __, key) => 
    !target.hasOwnProperty(key) 
      ? [false, true]
      : [true, false],
    null, 
    template, 
    true
  )

const doMatchArray = (keys, target) => 
  walkArray((_, key) => 
    !target.hasOwnProperty(key) 
      ? [false, true]
      : [true, false], 
    null, 
    keys, 
    true
  )

const curryObject = curry((template, fn, curryArgs = {}) => (args) => {
  const concatedArgs = Object.assign({}, curryArgs, args)
  if(isArray(template)) {

    return doMatchArray(template, concatedArgs) 
      ? fn(concatedArgs)
      : curryObject(template, fn, concatedArgs) 
  }
  
  return doMatchObject(template, concatedArgs) 
    ? fn(concatedArgs)
    : curryObject(template, fn, concatedArgs)
})

module.exports = curryObject