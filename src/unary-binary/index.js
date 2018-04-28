/**
 * Converts the given function into a unary one
 * @param  {fn} fn to be converted
 * @return {fn}      unary fn
 */
const unary = fn => a => fn(a);

/**
 * Converts the given function into a binary one
 * @param  {fn} fn to be converted
 * @return {fn}      binary fn
 */
const binary = fn => (a, b) => fn(a, b);

module.exports = {
  unary,
  binary,
};
