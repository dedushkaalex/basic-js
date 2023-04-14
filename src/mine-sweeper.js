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
  const WIDTH = matrix.length;
  const HEIGHT = matrix[0].length;
  let arrayCard = Array.from(Array(WIDTH), () => Array.from(Array(HEIGHT), () => 0))
  let isBomb = true; // наша бомба в клетке
  let count = 0;
  function getNeighbors(matrix, row, col) {
    //Создается пустой массив arr, который будет содержать соседние клетки
    let arr = [];
    //Запускаются два вложенных цикла for, которые проходят по всем клеткам, находящимся в квадрате 3x3 с центром в клетке (row, col). Таким образом, мы рассматриваем все клетки, которые находятся вокруг центральной клетки.
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        //Для каждой клетки, которую мы рассматриваем, проверяем, что она находится внутри границ массива matrix (т.е. ее индексы i и j должны быть больше или равны 0, меньше WIDTH и HEIGHT соответственно)
        //Также мы проверяем, что мы не рассматриваем центральную клетку (row, col) (т.е. i и j не равны row и col соответственно).
        if (i >= 0 && i < WIDTH && j >= 0 && j < HEIGHT && !(i === row && j === col)) {
          arr.push(matrix[i][j]);
        }
      }
    }
    return arr;
  }
// пробегаемся по внешнему массиву, в котором массивы,которые формируют наше поле
  for (let i = 0; i < WIDTH; i++) {
     // внутренний массив [[внутр],[внутр],[внутр]]
    for (let j = 0; j < HEIGHT; j++) {
       // если во внутреннем массиве нашли клетку с бомбой
      if (matrix[i][j] === isBomb) {
          //то пометим его крестиком
        arrayCard[i][j] = 1;
      } else {//иначе будем искать соседей, которые говорят, сколько мин рядом окружают эту клетку вокруг
        const neighbors = getNeighbors(matrix, i, j);
         //фильтрует массив arr, оставляя только те элементы, которые являются истинными значениями (т.е. не false, null, 0, NaN, undefined или пустая строка). Затем он возвращает количество элементов, которые остались после фильтрации.
        const count = neighbors.filter(cell => cell).length;
        console.log(count)
        arrayCard[i][j] = count;
      }
    }
  }
  return arrayCard;

}

module.exports = {
  minesweeper
};
