const add = function(num1, num2) {
	let addResult = num1 + num2;
  return addResult
};

const subtract = function(num1, num2) {
	let subResult = num1 - num2;
  return subResult;
};

const sum = function(arr) {
	let sumResult = arr.reduce(function (x,y) {
    return x + y;
  }, 0);
  return sumResult;
};

const multiply = function(arr) {
  let multiplyResult = 1;
  for (let i = 0; i < arr.length; i++) {
    multiplyResult *= arr[i];
  }
  return multiplyResult;
};

const power = function(num1, num2) {
	let powerResult = num1 ** num2;
  return powerResult;
};

const factorial = function(num) {
	let factorialResult = 1;
  while (num > 0) {
    factorialResult *= num;
    num--;
  }
  return factorialResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
