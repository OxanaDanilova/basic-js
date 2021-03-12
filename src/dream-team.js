const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const newArr = [];
  members.map((item)=>{
    if (typeof item === 'string'){
      newArr.push(item.trim().toUpperCase()[0]);
    }
  });
  newArr.sort();
  return newArr.join('');

  } else {
    return false;
  }
  
};
