const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const domainRegex = /@([^@]+)$/;  // Updated regex to capture the domain part after the last '@'
  const match = email.match(domainRegex);

  if (match && match[1]) {
    return match[1];
  }

  return '';
}



module.exports = {
  getEmailDomain
};
