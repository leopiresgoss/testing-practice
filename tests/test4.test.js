const capitalize = require('../tasks/test4.js');

describe('Test capitalize function', () => {
  test('If not string, should throw error', () => {
    expect(() => capitalize(3)).toThrowError('You should only pass string');
  });

  test('Returns that string with the first character capitalized.', () => {
    expect(capitalize('hey')).toBe('Hey');
  });
});
