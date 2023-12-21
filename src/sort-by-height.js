const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Extract the non-negative values from the array
  const sortedValues = arr.filter(value => value !== -1).sort((a, b) => a - b);

  // Create a new array with the sorted values and keeping -1 at their original positions
  const result = [];
  let sortedIndex = 0;

  for (const value of arr) {
    result.push(value === -1 ? -1 : sortedValues[sortedIndex++]);
  }

  return result;
}

module.exports = {
  sortByHeight
};
