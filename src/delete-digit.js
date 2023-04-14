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
  n = String(n);
  const arr = n.split('').map((char, index) => {
    char = n.slice(0, index) + n.slice(index + 1)
    return char;
  });
  let res = arr.sort()
  return +res[res.length - 1]
}

module.exports = {
  deleteDigit
};
