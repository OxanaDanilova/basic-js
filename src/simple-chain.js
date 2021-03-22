const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr:[],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    console.log(this.arr);
  },
  removeLink(position) {
    if (typeof position !== 'number' || position>this.arr.length || position<0) {
      throw new Error();
    } else {
      this.arr.splice(position,1);
      console.log(this.arr);
    }
  },
  reverseChain() {
    this.arr.reverse();
  },
  finishChain() {
    let result;
    this.arr.map((item, index)=> {
      if (index  === 0 || index===this.arr.length) {
        result.push(`( ${item} )`);
      } else {
        result.push(`~~( ${item} )~~`);
      };
    });
    return result;
  }
};

module.exports = chainMaker;
