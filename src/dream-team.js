const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Check if input is an array
  if (!Array.isArray(members)) {
    return false;
  }

  // Filter out non-string values and convert names to uppercase
  const validNames = members
    .filter(member => typeof member === 'string')
    .map(name => name.trim().toUpperCase());

  // Sort the names and concatenate the first letters
  const dreamTeamInitials = validNames
    .sort()
    .map(name => name[0])
    .join('');

  return dreamTeamInitials;
}


module.exports = {
  createDreamTeam
};
