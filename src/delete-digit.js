const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // Преобразовываем число в строку
  let numStr = n.toString();

  // Инициализируем переменные для хранения максимального числа и его индекса
  let maxNum = 0;
  let maxIndex = 0;

  // Перебираем цифры числа
  for (let i = 0; i < numStr.length; i++) {
    // Создаем новое число, исключая текущую цифру
    let currentNum = parseInt(numStr.substring(0, i) + numStr.substring(i + 1));

    // Если новое число больше максимального, обновляем значения
    if (currentNum > maxNum) {
      maxNum = currentNum;
      maxIndex = i;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
