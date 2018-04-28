const {
  compose, pipe, pipeImp, pipeRec,
} = require('./');

const add = a => a + 1;
const double = a => a * 2;
const sum = (a, b) => a + b;

const testPipeFn = (fn) => {
  expect(fn(add)(2)).toBe(3); // 2 + 1 = 3
  expect(fn(double)(2)).toBe(4); // 2 * 2 = 4
  expect(fn(add, double)(2)).toBe(6); // (2 + 1) * 2
  expect(fn(add, double, add, double)(2)).toBe(14); // (2 + 3) * 2
};

test('pipe fn', () => testPipeFn(pipe));

test('pipeImp fn', () => testPipeFn(pipeImp));

test('pipeRec fn', () => testPipeFn(pipeRec));

test('compose fn', () => {
  expect(compose(add)(2)).toBe(3);
  expect(compose(double)(2)).toBe(4);
  expect(compose(double, add)(2)).toBe(6);
  expect(compose(double, sum)(2, 3)).toBe(10);
  expect(compose(double, add, double, add)(2)).toBe(14);
});
