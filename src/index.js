const { apply, unapply } = require('./apply-unapply');
const { negate, isEven, isOdd } = require('./predicate');
const { compose, pipe } = require('./compose-pipe');
const { binary, unary } = require('./unary-binary');

export default {
  apply,
  binary,
  compose,
  isEven,
  isOdd,
  negate,
  pipe,
  unapply,
  unary,
};
