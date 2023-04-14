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
//let matrix = [[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2],['^^', 1, 2]];
function countCats(matrix) {
let res =matrix.flat().filter(item => item === '^^').length;
if (res > 0) {
return res;
}
return 0;
}

module.exports = {
  countCats
};
