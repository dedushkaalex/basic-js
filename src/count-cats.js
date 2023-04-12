const { NotImplementedError } = require('../extensions/index.js');

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
function countCats(array) {
  array = array.flat(Infinity);
  let result = array.reduce((acc, item) => {
    if (item === '^^') {
      return acc + 1;
    }
    return acc;
  }, 0)
  return result;
}

module.exports = {
  countCats
};
