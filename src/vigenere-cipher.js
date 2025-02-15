const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (mode) {
    this.mode = mode;
  }
  encrypt(string, key) {
    const result = [];
    const newKey = [];
    if (!string || !key) {
      throw new Error();
    }
    
    const newString = string.replace(/\s+/g, '');
    newString.split('').map((item, index)=> {
      if (index<key.length) {
        newKey.push(key.toUpperCase().charAt(index));
      } else {
        let newIndex = index%key.length;
        newKey.push(key.toUpperCase().charAt(newIndex));
      }
    });
    string.split('').map((item,index)=> {
      if (item===' ') {
        newKey.splice(index,0,' ');

      }
    });
    
    for (let i=0; i<string.length; i++) {
      if (string.charAt(i)===' ' || string.toUpperCase().charCodeAt(i)<65 || string.toUpperCase().charCodeAt(i)>90){
        result[i] = string.charAt(i);
      } else {
       let code1 = string.toUpperCase().charCodeAt(i)-65;
       let code2 =  newKey[i].charCodeAt(0)-65;
        let primer = code1 + code2;
        result[i] = primer>=26?String.fromCharCode((primer%26)+65):String.fromCharCode(primer+65);
      }
    }
    if (this.mode === false && this.mode!==''){
      return result.reverse().join('');
    } else {
    return result.join('');
    }
     }    

  decrypt(string, key) {
    const result = [];
    const newKey = [];
    if (!string || !key) {
      throw new Error();
    }
    
    const newString = string.replace(/\s+/g, '');
    newString.split('').map((item, index)=> {
      if (index<key.length) {
        newKey.push(key.toUpperCase().charAt(index));
      } else {
        let newIndex = index%key.length;
        newKey.push(key.toUpperCase().charAt(newIndex));
      }
    });
    string.split('').map((item,index)=> {
      if (item===' ') {
        newKey.splice(index,0,' ');

      }
    });
    for (let i=0; i<string.length; i++) {
      if (string.charAt(i)===' ' || string.toUpperCase().charCodeAt(i)<65 || string.toUpperCase().charCodeAt(i)>90){
        result[i] = string.charAt(i);
      } else {
       let code1 = string.toUpperCase().charCodeAt(i)-65;
       let code2 =  newKey[i].charCodeAt(0)-65;
        let primer = code1 + 26 - code2;
        result[i] = primer>=26?String.fromCharCode((primer%26)+65):String.fromCharCode(primer+65);
      }
    }
    if (this.mode === false && this.mode!==''){
      return result.reverse().join('');
    } else {
    return result.join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
