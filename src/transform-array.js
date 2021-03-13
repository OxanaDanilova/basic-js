const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const transformedArr = arr.slice();
   transformedArr.map((item) => {
    if (item === '--discard-next' ) {
      let index = transformedArr.indexOf(item);
      if (transformedArr[index+1] || transformedArr[index+1]===false || 
        transformedArr[index+1]===0 || transformedArr[index+1]==='') {
        transformedArr.splice(index,2);
      } /* else {
        transformedArr.splice(index,1);
      }*/

    }
    if (item === '--discard-prev' ) {
      let index = transformedArr.indexOf(item);
      if (transformedArr[index-1] || transformedArr[index-1]===false || 
        transformedArr[index-1]===0 || transformedArr[index-1]==='') {
        transformedArr.splice(index-1,2);
      } /*else {
        transformedArr.splice(index,1);
      } */

    }

    if (item === '--double-prev' ) {
      let index = transformedArr.indexOf(item);
      if (transformedArr[index-1]  || transformedArr[index-1]===false || 
        transformedArr[index-1]===0 || transformedArr[index-1]==='') {
        transformedArr[index] = transformedArr[index-1];
      } /* else {
        transformedArr.splice(index,1);
      }*/

    }

    if (item === '--double-next' ) {
      let index = transformedArr.indexOf(item);
      if (transformedArr[index+1]  || transformedArr[index+1]===false || 
        transformedArr[index+1]===0 || transformedArr[index+1]==='') {
        transformedArr[index] = transformedArr[index+1];
      } /* else {
        transformedArr.splice(index,1);
      }*/

    }
  });
  transformedArr.map((item) => {
    if (item === '--double-prev' || item === '--discard-next' || item === '--discard-prev' || item === '--double-next') {
      let index = transformedArr.indexOf(item);
      transformedArr.splice(index, 1);
    }
  });
  return transformedArr;
};
