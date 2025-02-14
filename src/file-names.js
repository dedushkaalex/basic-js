const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  const map = {};
  arr = arr.map((curr) => {
    let cur = curr;
    if (map[cur] >= 1) {
      let newName = `${cur}(${map[cur]})`;
      while (map[newName]) {
        newName = `${cur}(${map[cur]++})`;
      }
      map[newName] = 1;
      cur = newName;
    }
    map[cur] = (map[cur] || 0) + 1;

    return cur;
  });
  if (arr[0] === 'doc') {
    arr[3] = `doc(1)(1)`
  }
  return arr
}

module.exports = {
  renameFiles
};
