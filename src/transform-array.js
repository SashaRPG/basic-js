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
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let resultingArr = [];
  for (let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (resultingArr.length - 1 >= 0 && arr[i - 1] == resultingArr[resultingArr.length - 1]){
          resultingArr.splice(resultingArr.length - 1, 1);
        }
        break;
      case '--double-next':
        if (i + 1 < arr.length){
          resultingArr.push(arr[i+1]);
        }
        break;
      case '--double-prev':
        if (resultingArr.length - 1 >= 0 && arr[i-1] == resultingArr[resultingArr.length-1]){
          resultingArr.push(resultingArr[resultingArr.length-1]);
        }
        break;
      default:
        resultingArr.push(arr[i]);
    }
  }
  return resultingArr;
}

module.exports = {
  transform
};
