const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Convert str and addition to strings
  str = String(str);
  let addition = options.addition !== undefined ? String(options.addition) : '';

  // Set default values for options
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let separator = options.separator !== undefined ? String(options.separator) : '+';
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  // Repeat the addition string
  let repeatedAddition = addition + additionSeparator;
  repeatedAddition = repeatedAddition.repeat(additionRepeatTimes - 1) + addition;

  // Repeat the main string
  let result = str + repeatedAddition + separator;
  result = result.repeat(repeatTimes - 1) + str + repeatedAddition;

  return result;
}


module.exports = {
  repeater
};
