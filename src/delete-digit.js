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
  let tempArr = String(n).split('');

  if (n >= 0){
    if (!(n % 10)){
      return n / 10;
    }
    if (tempArr.length == 2){
      if (+tempArr[tempArr[0]] > tempArr[1]){
        return 0
      }else{
        return 1;
      }
    } 

    for (let i = 0; i < tempArr.length - 1; i++){
      if (tempArr[i] < tempArr[i+1]){
        tempArr.splice(i, 1);
        break;
      }
    }
  }else{
    if (!(n % 10) && tempArr.length > 3){
      return n / 10;
    }else if (tempArr.length == 2){
      if (+('-' + tempArr[tempArr[0]] > tempArr[1])){
        return 0;
      }else{
        return 1;
      }
    }
    for (let i = 0; i < tempArr.length - 1; i++){
      if (tempArr[i] > tempArr[i+1]){
        tempArr.splice(i, 1);
        break;
      }
    }

  }
  return +tempArr.join('');
}

module.exports = {
  deleteDigit
};
