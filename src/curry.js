/**
 * Simple curry
 * @param {Function} fn - function to curry
 * @param {Array} curryArgs - pre defined param
 * @return {Function} _ - function to take rest of args
 * @param {Array} args - params for curried function
 * @return {Any||Function} _ - returns result of fn or function to take rest of args
 * @example 
 * 
 * const add = (a, b) => a + b
 * const addC = curry(add)
 * 
 * addC(1)(1)
 * addC(1, 1)
 */
const curry = (fn, curryArgs = []) => (...args) => {
  const concatArgs = [...curryArgs, ...args]

  return fn.length > concatArgs.length ?
    curry(fn, concatArgs) :
    fn(...concatArgs)
}

module.exports = curry