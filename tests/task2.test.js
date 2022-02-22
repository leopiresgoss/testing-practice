const reverseString = require('../tasks/task2.js');

test('Check if "olleh" is returned after reversing "hello"', () => {
  expect(reverseString('hello')).toBe('olleh');
});