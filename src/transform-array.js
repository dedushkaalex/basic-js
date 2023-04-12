const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const params = ["--double-prev", "--discard-prev", "--discard-next", "--double-next"];
  let newArr = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else if (arr.length === 0) {
    return [];
  } else {
    newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
      switch (newArr[i]) {
        case params[2]:
          if (i < newArr.length - 1) {
            if (newArr[i + 2] === params[0] || newArr[i + 2] === params[1]) {
              newArr.splice(i, 3);
            } else {
              newArr.splice(i, 2);
            }
            i--;
          } else {
            newArr.splice(i, 1);
          }
          break;
        case params[1]:
          if (i > 0) {
            newArr.splice(i - 1, 2);
            i -= 2;
          } else {
            newArr.splice(i, 1);
          }
          break;
        case params[3]:
          if (i < newArr.length - 1) {
            newArr.splice(i, 1, newArr[i + 1]);
          } else {
            newArr.splice(i, 1);
          }
          break;
        case params[0]:
          if (i > 0) {
            newArr.splice(i, 1, newArr[i - 1]);
          } else {
            newArr.splice(i, 1);
          }
          break;
      }
    }
    return newArr;
  }
}

module.exports = {
  transform
};
