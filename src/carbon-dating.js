const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity==undefined ||
    sampleActivity == false ||
    isNaN(sampleActivity) || sampleActivity>15 || sampleActivity<=0 || 
     typeof sampleActivity !== 'string' || !sampleActivity)  {
    return false;
  } else {
    let k = 0.693/HALF_LIFE_PERIOD;
    let t = Math.ceil((Math.log(15/+sampleActivity))/k);
    return t;

  }

};
