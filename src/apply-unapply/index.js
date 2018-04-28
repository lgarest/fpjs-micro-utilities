/**
 * Applies the given fn to the list of parameters individually
 * @param  {fn} f
 * @return {any}   result of the execution of f over the arguments
 */
const apply = f => a => f(...a);

/**
 * Applies the given fn to the list of parameters
 * @param  {fn} f
 * @return {any}   result of the execution of f over the argument
 */
const unApply = f => (...a) => f(a);

module.exports = {
  apply,
  unApply,
};
