const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === ""){return ""}
  let encStr = "";
  let predSymb = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === predSymb) {
      count++;
    }else {
      if (count === 1) {
        encStr += predSymb;
      } else {
        encStr += count.toString() + predSymb;
      }
      predSymb = str[i];
      count = 1;
    }
  }
  if  (count === 1) {
    encStr += predSymb;
  } else {
    encStr += count.toString() + predSymb;
  }
  return encStr
}

module.exports = {
  encodeLine
};
