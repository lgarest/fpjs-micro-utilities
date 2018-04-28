const original = global.console;
global.console.log = jest.fn(a => a);
const { pointFree, notPointFree, log } = require('./');

test('pointFree fn', () => {
  expect(pointFree(2)).toEqual(notPointFree(2));
});

test('log fn', () => {
  log(2);
  expect(global.console.log).toHaveBeenCalledWith(2);
  global.console = original;
});
