const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];

  // Helper function to count mines in adjacent cells
  function countMines(row, col) {
    let count = 0;

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i >= 0 && i < rows && j >= 0 && j < cols && !(i === row && j === col)) {
          if (matrix[i][j]) {
            count++;
          }
        }
      }
    }

    return count;
  }

  // Iterate through each cell in the matrix
  for (let i = 0; i < rows; i++) {
    const rowResult = [];

    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        // If the cell contains a mine, set the corresponding result cell to -1
        rowResult.push(1);
      } else {
        // If the cell does not contain a mine, count adjacent mines and set the result cell
        const minesCount = countMines(i, j);
        rowResult.push(minesCount);
      }
    }

    result.push(rowResult);
  }

  return result;
}

module.exports = {
  minesweeper
};
