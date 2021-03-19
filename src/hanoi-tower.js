const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsSpeedSec = turnsSpeed/3600;
  let turns = 2**disksNumber-1;
  let seconds = Math.floor(turns/turnsSpeedSec);
  return {'turns': turns, 'seconds': seconds};

};
