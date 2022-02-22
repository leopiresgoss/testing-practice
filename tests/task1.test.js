const stringLength = require('../tasks/task1');

// test('Check "test" char count ', () => {
//   expect(stringLength('test')).toBe(4);
// });

test('Check "test" char count is less than 10 and more than 1', () => {
  expect(stringLength('test')).toBe(true);
});

test('Check "testtesttest" char count is less than 10 and more than 1', () => {
  expect(stringLength('testtesttest')).toBe(false);
});