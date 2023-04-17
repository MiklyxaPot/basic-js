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
   const arr = Array.from(String(n), Number);
   let result = 0;
    for(let i = 0; i < arr.length; i++){
      let arr2 = Array.from(String(n), Number)
   
    arr2.splice(i, 1);
    let b = arr2.join('');
    
  b > result ? result = b : result;
      }
      return +result;
 
}

module.exports = {
  deleteDigit
};
