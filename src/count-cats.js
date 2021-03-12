const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  let newArr = String(matrix).split(',');
  newArr.map((item)=> {
    if (item === '^^') {
      result += 1;
    }
  })
  return result;
};
