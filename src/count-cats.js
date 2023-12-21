const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  for (let index = 0; index < matrix.length; index++) {
    for (let j = 0; j < matrix[index].length; j++) {
      if (matrix[index][j] == "^^") count++;
    }
  }
  return count;
}

module.exports = {
  countCats,
};
