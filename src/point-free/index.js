/*
 In FJ:
 A point is the mapping between the parameter and the argument passed through
*/

/**
 * Identity fn returning whatever is passed as a
 * @param  {any} a
 * @return {any}
 */
const identity = a => a;

/**
 * Not pointed free fn using the identity fn
 * @param  {any} a
 * @return {any}
 */
const notPointFree = a => identity(a);

/**
 * Pointed free fn using the identity fn
 * Physically pointFree shares the same reference as the identity fn
 * @type {any}
 */
const pointFree = identity;

/**
 * Wrapper around console.log hard binding the console context
 * @type {any}
 */
const log = console.log.bind(console);

module.exports = {
  notPointFree,
  pointFree,
  log,
};
