const convertToCelsius = function(fahrenheit) {
  let result1 = (fahrenheit - 32) * 5/9;
  return Number(result1.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let result2 = (celsius * (9/5) + 32);
  return Number(result2.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
