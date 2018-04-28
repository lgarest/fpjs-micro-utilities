/**
 * Pipes two function in order of their parameter's index
 * @param  {fn} f  first function to be executed
 * @param  {fn} g second function to be executed
 * @return {any}
 */
const pipeTwoFns = (f, g) => (...args) => g(f(...args));

/**
 * Pipe operation using list.reduce functionallity
 * @param  {...fn} fns spreaded list of functions
 * @return {any}
 */
const pipeList = (...fns) => fns.reduce(pipeTwoFns);

/**
 * Pipe operation using for loop to apply the fn on every iteration
 * Only for unary fns
 * @param  {...fn} fns spreaded list of functions
 * @return {any}
 */
const pipeImp = (...fns) => (input) => {
  let result = input;
  for (let i = 0; i < fns.length; i += 1) {
    result = fns[i](result);
  }
  return result;
};

/**
 * Recursive fn applying the first fn of the given list of functions
 * to the given value
 * @param  {any}    value to be passed to the top of the functions list
 * @param  {...fn} ll    spreaded list of functions
 * @return {any}
 */
const piper = (value, ...ll) => (ll.length !== 0
  ? piper(ll.slice(0, 1)[0](value), ...ll.slice(1))
  : value
);

/**
 * Pipe operation solved by recursion
 * Only for unary fns
 * @param  {...fn} fns spreaded list of functions
 * @return {any}
 */
const pipeRec = (...fns) => input => piper(input, ...fns);

/**
 * Composition operation which is the reverse of the pipe operation
 * @param  {...fn} fns spreaded list of functions
 * @return {any}
 */
const compose = (...fns) => fns.reverse().reduce(pipeTwoFns);

module.exports = {
  pipe: pipeList,
  pipeImp,
  pipeRec,
  compose,
};
