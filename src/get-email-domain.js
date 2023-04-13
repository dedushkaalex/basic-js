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
  let regexp = /(?<=@)[A-Z0-9-]+.+.[A-Z]{2,4}$/i
  let res = email.match(regexp);
  if (res && res.length) {
    return res[res.length - 1]
  } else {
    return null;
  }
}

module.exports = {
  getEmailDomain
};
