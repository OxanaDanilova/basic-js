const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = str;
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  let mySeparator = separator||'+';
  let myAddition = '';
  if (addition || addition ===false || addition === null || addition === 0) {myAddition = addition};
  let sumAddition = myAddition;
  let myAddSep = additionSeparator||'|';
  if (additionRepeatTimes) {
    for (i=1; i<additionRepeatTimes; i++) {
      sumAddition += myAddSep + myAddition;

    }
  }
  newStr += sumAddition;
  if (repeatTimes) {
    for (i=1; i<repeatTimes; i++) {
      newStr += mySeparator + str + sumAddition;

    }
  }
  return newStr;
};
  