const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const transformedArr = arr.slice();
   transformedArr.map((item, index) => {
    if (item === '--discard-next') {
      if ((transformedArr[index+1]!=='--double-next' && transformedArr[index+1]!=='--double-prev' && 
      transformedArr[index+1]!=='--discard-prev' &&
      transformedArr[index+1]!=='--discard-next') && 
      (transformedArr[index+1]===false || transformedArr[index+1]===null || transformedArr[index+1]===Infinity ||
        (isNaN(transformedArr[index+1]) && index+1<transformedArr.length)||
        transformedArr[index+1]===0 || transformedArr[index+1]==='' || transformedArr[index+1])) {
        transformedArr[index] = 'weg';
        transformedArr[index+1] = 'weg';
      }

    }
    if (item === '--discard-prev' ) {
      if ((transformedArr[index-1]!=='--double-next' && transformedArr[index-1]!=='--double-prev' &&
       transformedArr[index-1]!=='--discard-prev' &&
      transformedArr[index-1]!=='--discard-next') && (transformedArr[index-1]===false 
        || (isNaN(transformedArr[index-1]) && index-1>=0)
        || transformedArr[index-1]===null ||
        transformedArr[index-1]===0 || transformedArr[index-1]===''
         || transformedArr[index-1])) {
         
        transformedArr[index-1] = 'weg';
        transformedArr[index] = 'weg';
      }

    }

    if (item === '--double-prev' ) {
      if ((transformedArr[index-1]!=='--double-next' && transformedArr[index-1]!=='--double-prev' && transformedArr[index-1]!=='--discard-prev' &&
      transformedArr[index-1]!=='--discard-next') && (transformedArr[index-1]===false  || transformedArr[index-1]===null  ||
        (isNaN(transformedArr[index-1]) && index-1>=0)||
        transformedArr[index-1]===0 || transformedArr[index-1]==='' || transformedArr[index-1])) {
        transformedArr[index] = transformedArr[index-1];
      }

    }

    if (item === '--double-next' ) {
      if ((transformedArr[index+1]!=='--double-next' && transformedArr[index+1]!=='--double-prev' &&
       transformedArr[index+1]!=='--discard-prev' &&
      transformedArr[index+1]!=='--discard-next') && (transformedArr[index+1]===false ||
         transformedArr[index+1]===null ||  (isNaN(transformedArr[index+1]) && index+1<transformedArr.length)||
        transformedArr[index+1]===0 || transformedArr[index+1]==='' || transformedArr[index+1])) {
        transformedArr[index] = transformedArr[index+1];
      }

    }
  });

  const result = [];
  transformedArr.map((item) => {
    if (item !== '--double-prev' && item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !== 'weg') {
      result.push(item);
    }
  });
  return result;
};
