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
  let strNew = '';
  let count = 1;
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i+1]){
      count += 1;
    } else {
      strNew += count + str[i];
      count = 1;
    }
  }
  return strNew.replace(/1/g, ''); //находим 1 в новой строке и заменяем их ''
}

module.exports = {
  encodeLine
};
