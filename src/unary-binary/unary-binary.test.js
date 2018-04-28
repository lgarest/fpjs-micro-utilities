const { unary, binary } = require('./');

const f = (a, b, c) => [a, b, c];

test('unary fn', () =>
  expect(unary(f)(1, 2, 3)).toEqual([1, undefined, undefined]));

test('binary fn', () =>
  expect(binary(f)(1, 2, 3)).toEqual([1, 2, undefined]));
