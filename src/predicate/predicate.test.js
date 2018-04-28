const {
  isEven,
  isOdd,
  evenPointFree,
  negate,
} = require('./');

test('isEven fn', () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
});

test('isOdd fn', () => {
  expect(isOdd(2)).toBe(false);
  expect(isOdd(3)).toBe(true);
});

test('evenPointFree fn', () => {
  expect(evenPointFree(2)).toBe(true);
  expect(evenPointFree(3)).toBe(false);
});

test('negate fn', () => {
  const falsyFn = () => false;
  const truthyFn = () => true;
  expect(negate(falsyFn)()).toBe(true);
  expect(negate(truthyFn)()).toBe(false);
});
