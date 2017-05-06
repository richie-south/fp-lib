
/**
 * Simple always
 * @param {Any} a - any value
 * @return {Function} _ - function to get a  
 * @return {Any} - a
 * @example 
 * 
 * const getTen = always(10)
 * getTen()
 */
const always = a => () => a

module.exports = always