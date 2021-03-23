const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  let season = '';

  if (date && date !== null && typeof date === 'object' && Object.keys(date).length===0) {
      let monthNum = date.getMonth();
      if (monthNum === 0 || monthNum === 1 || monthNum === 11) {
        season = 'winter';
      }
      if (monthNum === 2 || monthNum === 3 || monthNum === 4) {
        season = 'spring';
      }
      if (monthNum === 5 || monthNum === 6 || monthNum === 7) {
        season = 'summer';
      }
      if (monthNum === 8 || monthNum === 9 || monthNum === 10) {
        season = 'autumn (fall)';
      }
    
      return season;
  } else {
    if (date && typeof date === 'object' && Object.keys(date).length>0) {
      throw new Error();
    } else {
    return  'Unable to determine the time of year!';
    }
  }

};
