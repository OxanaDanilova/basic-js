const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr:[],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position>this.arr.length || position<=0) {
      this.arr = [];
      throw new Error();
    } else {
      this.arr.splice(position-1,1);
      return this;
    }
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    this.arr.map((item, index)=> {
      if (index  === 0 && this.arr.length>1) {
        result += `( ${item} )~`;
      } else {
        if (index === 0 && this.arr.length===1) {
          result = `( ${item} )`
        } else {
          if (index=== this.arr.length-1) {
            result += `~( ${item} )`;
          } else {
            result += `~( ${item} )~`;
          };
        }      
      }      
    });
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
