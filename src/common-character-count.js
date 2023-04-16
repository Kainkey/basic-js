const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // s1 = "aabcc"
  // s2 = "adcaa"
  arr1 = Array.from(s1);
  arr2 = Array.from(s2);

//   let count = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++)

//       if (arr1[i] === arr2[j]) {
//         count += 1;
//         alert('count = ' + count);
//         break;

//       }
//   }
//   return count;
// }
let count = 0;
for (let i = 0; i < arr1.length; i++) {
  if (s2.includes(i))
count++, s2 = s2.remove(i);
  
 }
 return counter
}
module.exports = {
  getCommonCharacterCount
};
