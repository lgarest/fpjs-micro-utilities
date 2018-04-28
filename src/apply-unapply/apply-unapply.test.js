const { apply, unapply } = require('./');

const f = a => a;
const g = (x, y, z) => x + y + z;

test('apply fn', () => {
  expect(apply).toBeInstanceOf(Function);
  expect(apply(f)([1, 2, 3])).toEqual(1);
  expect(apply(g)([1, 2, 3])).toEqual(6);
});

test('unapply fn', () => {
  expect(unapply).toBeInstanceOf(Function);
  expect(unapply(f)(1, 2, 3)).toEqual([1, 2, 3]);
});
