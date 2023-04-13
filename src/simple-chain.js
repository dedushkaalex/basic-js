const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(x) {
    this.chain.push(String(x));
    return this;
  },
  removeLink(x) {
    if (typeof x !== 'number' || x < 1 || x > this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(x - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let s = ``;
    for (let i of this.chain) {
      s += "(" + " " + i + " " + ")" + "~~";
    }
    console.debug(this.chain)
    this.chain = [];
    return s.slice(0, -2);
  }
};

module.exports = {
  chainMaker
};
