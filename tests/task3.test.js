const Calculator = require('../tasks/task3.js');

describe('add method', () => {
  test('Check if 1 + 10 equals to 11', () => {
    expect(Calculator.add(1, 10)).toBe(11);
  });
  
  test('Check if 1, 2, 3 sum equals to 6', () => {
    expect(Calculator.add(1, 2, 3)).toBe(6);
  });
  
  test('Check if when no value is passed it throws an error', () => {
    expect(() => Calculator.add()).toThrowError('You should add at least two numbers');
  });
})

describe('subtract method', () => {
  test('Check if 6 - 3 equals to 3', () => {
    expect(Calculator.subtract(6, 3)).toBe(3);
  });
  
  test('Check if 6 - 10 equals to -4', () => {
    expect(Calculator.subtract(6, 10)).toBe(-4);
  });
  
  test('Check if when no value is passed it throws an error', () => {
    expect(() => Calculator.subtract()).toThrowError('You should add at least two numbers');
  });
})


describe('divide method', () => {
  test('Check if 10/2 equals to 5', () => {
    expect(Calculator.divide(10, 2)).toBe(5);
  });
  
  test('Check if when no value is passed it throws an error', () => {
    expect(() => Calculator.divide()).toThrowError('You should divide only two numbers');
  });
  
  test('Check if 2/3 equals to 0.666...', () => {
    expect(Calculator.divide(2, 3)).toBe(0.6666666666666666);
  });
})

describe('multiply method', () => {
  test('Check if when no value is passed it throws an error', () => {
    expect(() => Calculator.multiply()).toThrowError('You should multiply only two numbers');
  });

  test('Check if 3 * 2 equals to 6', () => {
    expect(Calculator.multiply(3, 2)).toBe(6);
  });
  
  test('Check if when more than 2 values is passed it throws an error', () => {
    expect(() => Calculator.multiply(1, 2, 3)).toThrowError('You should multiply only two numbers');
  });
})
