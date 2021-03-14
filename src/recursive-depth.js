const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, num) {
    let level = num||1;
    const newArr = [];
   let isArr=false;
    arr.map((item)=> {
      if (Array.isArray(item)) {
        isArr = true;
        item.map((i)=> {
          newArr.push(i);
        });
      }
    });
    if (isArr) {
      level += 1;
    return  this.calculateDepth(newArr,level);
    }
    return  level;
  }

};