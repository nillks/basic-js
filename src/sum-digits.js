const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  function calculateDigitSum(number) {
    return number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  let currentNumber = num;

  // Continue summing digits until a single-digit number is obtained
  while (currentNumber >= 10) {
    currentNumber = calculateDigitSum(currentNumber);
  }

  return currentNumber;
}

module.exports = {
  getSumOfDigits
};
