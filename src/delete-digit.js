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
  let mN = 0;
  let arr = n.toString().split("")
  for (let i = 0; i < arr.length; i++) {
    let tNA = arr.filter(function (item, index) {return index != i})
    if (mN < Number(tNA.join(""))) {
      mN = Number(tNA.join(""))
    }
  }
  return mN
}

module.exports = {
  deleteDigit
};
