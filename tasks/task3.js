class Calculator {
  static add(...num) {
    if(num.length < 2) {
      throw new Error('You should add at least two numbers');
    }

    return num.reduce((prev, cur) => prev + cur, 0);
  }

  static subtract(...num) {
    if(num.length < 2) {
      throw new Error('You should add at least two numbers');
    }

    return num.reduce((prev, cur) => cur - prev, 0) * -1
  }

  static divide(...num) {
    if(num.length !== 2) {
      throw new Error('You should divide only two numbers');
    }

    return num[0]/num[1];
  }

  static multiply(...num) {
    if(num.length !== 2) {
      throw new Error('You should multiply only two numbers');
    }

    return num[0] * num[1];    
  }
}

module.exports = Calculator;