/* Any fn that given an input returns true or false is a predicate fn */

/**
 * Negates the given function f
 * @param  {fn} f to be negated
 * @return {fn}      negated f
 */
const negate = f => (...args) => !f(...args);

/**
 * Returns if the given number is odd
 * @param  {number} a number to assert
 * @return {bool}
 */
const isOdd = a => a % 2 === 1;

/**
 * Returns if the given number is even
 * @param  {number} a number to assert
 * @return {bool}
 */
const isEven = a => !isOdd(a);

/**
 * PointFree version of isEven fn
 * @type {point free fn}
 */
const evenPointFree = negate(isOdd);

module.exports = {
  isOdd,
  isEven,
  evenPointFree,
  negate,
};
