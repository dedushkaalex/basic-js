const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

// class VigenereCipheringMachine {
//   constructor(boolean = true) {
//     this.isDirect = boolean;
//     this.alphabet = {
//       A: 0,
//       B: 1,
//       C: 2,
//       D: 3,
//       E: 4,
//       F: 5,
//       G: 6,
//       H: 7,
//       I: 8,
//       J: 9,
//       K: 10,
//       L: 11,
//       M: 12,
//       N: 13,
//       O: 14,
//       P: 15,
//       Q: 16,
//       R: 17,
//       S: 18,
//       T: 19,
//       U: 20,
//       V: 21,
//       W: 22,
//       X: 23,
//       Y: 24,
//       Z: 25
//     };
//     this.modString;
//     this.modKey;
//   }
//   encrypt(string, key) {
//     let result;
//     console.log(string)
//     if (!string || !key) throw new NotImplementedError('Incorrect arguments!');
//     if (this.isDirect) {

//       if (string.split(' ').length > 1) {
//         this.modString = string.split(' ')
//         this.modString = this.modString
//           .map(item => item.split(''))
//           .map(item => {
//             return item.map(char => {
//               if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
//                 return char = this.alphabet[char.toUpperCase()];
//               } else {
//                 return char;
//               }
//             })
//           })
//       } else {
//         this.modString = string.split('')
//         this.modString = this.modString
//           .map(item => {
//             if (this.alphabet.hasOwnProperty(item.toUpperCase())) {
//               return item = this.alphabet[item.toUpperCase()];
//             } else {
//               return item;
//             }
//           })
//       }
//     }
//     //   console.log(this.modString)
//     if (key.length < this.modString.flat(Infinity).length) {
//       this.modKey = key.padEnd(this.modString.flat(Infinity).length, key.slice(0))
//     } else if (string.split(' ').length === 1) {
//       this.modKey = key.padEnd(this.modString.length, key.slice(0))
//     } else {
//       this.modKey = key.padEnd(this.modString.length, key.slice(0))
//     }
//     //   console.log(this.modKey)
//     let b = [];
//     let counter = 0;
//     if (string.split(' ').length > 1) {
//       this.modKey = this.modKey.split('');
//       for (let i = 0; i < this.modString.length; i++) {
//         let temp = [];
//         for (let j = 0; j < this.modString[i].length; j++) {
//           if (typeof this.modString[i][j] === 'number') {
//             temp.push(this.modKey[counter]);
//           } else {
//             temp.push(this.modString[i][j]);
//           }

//           counter++;
//         }
//         b.push(temp)
//       }
//     }
//     else {
//       this.modKey = this.modKey.split('');
//       for (let i = 0; i < this.modString.length; i++) {
//         if (typeof this.modString[i] === 'number') {
//           b.push(this.modKey[i]);
//         } else {
//           b.push(this.modString[i]);
//         }


//       }
//     }
//     console.log(b)
//     // массив ключей переправим в числа
//     if (string.split(' ').length > 1) {
//       b = b.map(item => {
//         return item.map(char => {
//           if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
//             return char = this.alphabet[char.toUpperCase()];
//           } else {
//             return char;
//           }
//         })
//       })
//     } else {
//       b = b.map(char => {
//         if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
//           return char = this.alphabet[char.toUpperCase()];
//         } else {
//           return char;
//         }
//       })
//     }
//     console.log(b)
//     this.modKey = b;
//     if (string.split(' ').length > 1) {
//       result = this.modString.map((item, i) => {
//         return item.map((char, j) => {
//           if (typeof char === 'string' && typeof this.modKey[i][j] === 'string') {
//             return item = this.modKey[i][j];
//           }
//           else if (char + this.modKey[i][j] < Object.keys(this.alphabet).length) {
//             return item = char + this.modKey[i][j];
//           }
//           else {
//             return item = char + this.modKey[i][j] - Object.keys(this.alphabet).length;
//           }
//         })

//         return item;
//       })
//     }
//     else {
//       result = this.modString.map((item, i) => {
//         if (typeof item === 'string' && typeof this.modKey[i] === 'string') {
//           return item = this.modKey[i];
//         }
//         else if (item + this.modKey[i] < Object.keys(this.alphabet).length) {
//           return item = item + this.modKey[i];
//         }
//         else {
//           return item = item + this.modKey[i] - Object.keys(this.alphabet).length;
//         }
//       })
//     }
//     //   console.log(this.modKey)
//     //   console.log(this.modString)
//     let s = [];
//     if (string.split(' ').length > 1) {
//       while (s < result.length) {
//         for (let i = 0; i < result.length; i++) {
//           let temp = [];
//           for (let j = 0; j < result[i].length; j++) {
//             for (let [key, value] of Object.entries(this.alphabet)) {
//               if (result[i][j] === value) {
//                 temp.push(key)
//               }
//             }
//             if (typeof result[i][j] != 'number') {
//               temp.push(result[i][j])
//             }

//           }
//           s.push(temp)
//         }
//       }
//     } else {
//       for (let i = 0; i < result.length; i++) {
//         for (let [key, value] of Object.entries(this.alphabet)) {
//           if (result[i] === value) {
//             s.push(key)
//           }
//         }
//         if (typeof result[i] != 'number') {
//           s.push(result[i])
//         }
//       }
//       return s.join('');
//     }


//     let c = []
//     for (let i = 0; i < s.length; i++) {
//       c.push(...s[i])
//       if (i !== s.length - 1) c.push(' ');
//     }
//     //   console.log(c.join(''))
//     return c.join('');
//   }


//   decrypt(string, key) {
//     let result;
//     this.modKey = undefined;
//     this.modString = undefined;
//     if (!string || !key) throw new NotImplementedError('Incorrect arguments!');
//     if (this.isDirect) {

//       if (string.split(' ').length > 1) {
//         this.modString = string.split(' ')
//         this.modString = this.modString
//           .map(item => item.split(''))
//           .map(item => {
//             return item.map(char => {
//               if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
//                 return char = this.alphabet[char.toUpperCase()];
//               } else {
//                 return char;
//               }
//             })
//           })
//       } else {
//         this.modString = string.split('')
//         this.modString = this.modString
//           .map(item => {
//             if (this.alphabet.hasOwnProperty(item.toUpperCase())) {
//               return item = this.alphabet[item.toUpperCase()];
//             } else {
//               return item;
//             }
//           })
//       }
//     }
//     //   console.log(this.modString)
//     if (key.length < this.modString.flat(Infinity).length) {
//       this.modKey = key.padEnd(this.modString.flat(Infinity).length, key.slice(0))
//     } else if (string.split(' ').length === 1) {
//       this.modKey = key.padEnd(this.modString.length, key.slice(0))
//     }
//     else {
//       this.modKey = key.padEnd(this.modString.length, key.slice(0))
//     }
//     //   console.log(this.modKey)
//     let b = [];
//     let counter = 0;
//     if (string.split(' ').length > 1) {
//       this.modKey = this.modKey.split('');
//       for (let i = 0; i < this.modString.length; i++) {
//         let temp = [];
//         for (let j = 0; j < this.modString[i].length; j++) {
//           if (typeof this.modString[i][j] === 'number') {
//             temp.push(this.modKey[counter]);
//           } else {
//             temp.push(this.modString[i][j]);
//           }

//           counter++;
//         }
//         b.push(temp)
//       }
//     }
//     else {
//       this.modKey = this.modKey.split('');
//       for (let i = 0; i < this.modString.length; i++) {
//         if (typeof this.modString[i] === 'number') {
//           b.push(this.modKey[i]);
//         } else {
//           b.push(this.modString[i]);
//         }


//       }
//     }
//     console.log(b)
//     // массив ключей переправим в числа
//     if (string.split(' ').length > 1) {
//       b = b.map(item => {
//         return item.map(char => {
//           if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
//             return char = this.alphabet[char.toUpperCase()];
//           } else {
//             return char;
//           }
//         })
//       })
//     } else {
//       b = b.map(char => {
//         if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
//           return char = this.alphabet[char.toUpperCase()];
//         } else {
//           return char;
//         }
//       })
//     }
//     //   console.log(b)
//     this.modKey = b;
//     if (string.split(' ').length > 1) {
//       result = this.modString.map((item, i) => {
//         return item.map((char, j) => {
//           if (typeof char === 'string' && typeof this.modKey[i][j] === 'string') {
//             return item = this.modKey[i][j];
//           }
//           else if (char - this.modKey[i][j] < 0) {
//             return item = char - this.modKey[i][j] + Object.keys(this.alphabet).length;
//           }
//           else {
//             return item = char - this.modKey[i][j];
//           }
//         })

//         return item;
//       })
//     }
//     else {
//       result = this.modString.map((item, i) => {
//         if (typeof item === 'string' && typeof this.modKey[i] === 'string') {
//           return item = this.modKey[i];
//         }
//         else if (item - this.modKey[i] < 0) {
//           return item = item - this.modKey[i] + Object.keys(this.alphabet).length;
//         }
//         else {
//           return item = item - this.modKey[i];
//         }
//       })
//     }
//     //   console.log(this.modKey)
//     //   console.log(this.modString)
//     let s = [];
//     if (string.split(' ').length > 1) {
//       while (s < result.length) {
//         for (let i = 0; i < result.length; i++) {
//           let temp = [];
//           for (let j = 0; j < result[i].length; j++) {
//             for (let [key, value] of Object.entries(this.alphabet)) {
//               if (result[i][j] === value) {
//                 temp.push(key)
//               }
//             }
//             if (typeof result[i][j] != 'number') {
//               temp.push(result[i][j])
//             }

//           }
//           s.push(temp)
//         }
//       }
//     } else {
//       for (let i = 0; i < result.length; i++) {
//         for (let [key, value] of Object.entries(this.alphabet)) {
//           if (result[i] === value) {
//             s.push(key)
//           }
//         }
//         if (typeof result[i] != 'number') {
//           s.push(result[i])
//         }
//       }
//       console.log(this.modKey)
//       this.cryptogramma = result;
//       return s.join('');
//     }


//     let c = []
//     for (let i = 0; i < s.length; i++) {
//       c.push(...s[i])
//       if (i !== s.length - 1) c.push(' ');
//     }
//     //   console.log(c.join(''))
//     // console.log(this.modKey)
//     return c.join('');

//   }


// }

class VigenereCipheringMachine {
  constructor(boolean = true) {
    this.isDirect = boolean;
    this.alphabet = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25
    };
    this.modString;
    this.modKey;
    this.cryptogramma;
  }
  encrypt(string, key) {
    let result;
    console.log(string)
    if (!string || !key) throw new NotImplementedError('Incorrect arguments!');
    if (this.isDirect === false) {
      string = string.split('').reverse().join('');
    }

    if (string.split(' ').length > 1) {
      this.modString = string.split(' ')
      this.modString = this.modString
        .map(item => item.split(''))
        .map(item => {
          return item.map(char => {
            if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
              return char = this.alphabet[char.toUpperCase()];
            } else {
              return char;
            }
          })
        })
    } else {
      this.modString = string.split('')
      this.modString = this.modString
        .map(item => {
          if (this.alphabet.hasOwnProperty(item.toUpperCase())) {
            return item = this.alphabet[item.toUpperCase()];
          } else {
            return item;
          }
        })
    }

    //   console.log(this.modString)
    if (key.length < this.modString.flat(Infinity).length) {
      this.modKey = key.padEnd(this.modString.flat(Infinity).length, key.slice(0))
    } else if (string.split(' ').length === 1) {
      this.modKey = key.padEnd(this.modString.length, key.slice(0))
    }
    else {
      this.modKey = key.padEnd(this.modString.length, key.slice(0))
    }
    //   console.log(this.modKey)
    let b = [];
    let counter = 0;
    if (string.split(' ').length > 1) {
      this.modKey = this.modKey.split('');
      for (let i = 0; i < this.modString.length; i++) {
        let temp = [];
        for (let j = 0; j < this.modString[i].length; j++) {
          if (typeof this.modString[i][j] === 'number') {
            temp.push(this.modKey[counter]);
          } else {
            temp.push(this.modString[i][j]);
          }

          counter++;
        }
        b.push(temp)
      }
    }
    else {
      this.modKey = this.modKey.split('');
      for (let i = 0; i < this.modString.length; i++) {
        if (typeof this.modString[i] === 'number') {
          b.push(this.modKey[i]);
        } else {
          b.push(this.modString[i]);
        }


      }
    }
    console.log(b)
    // массив ключей переправим в числа
    if (string.split(' ').length > 1) {
      b = b.map(item => {
        return item.map(char => {
          if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
            return char = this.alphabet[char.toUpperCase()];
          } else {
            return char;
          }
        })
      })
    } else {
      b = b.map(char => {
        if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
          return char = this.alphabet[char.toUpperCase()];
        } else {
          return char;
        }
      })
    }
    //   console.log(b)
    this.modKey = b;
    if (string.split(' ').length > 1) {
      result = this.modString.map((item, i) => {
        return item.map((char, j) => {
          if (typeof char === 'string' && typeof this.modKey[i][j] === 'string') {
            return item = this.modKey[i][j];
          }
          else if (char + this.modKey[i][j] < Object.keys(this.alphabet).length) {
            return item = char + this.modKey[i][j];
          }
          else {
            return item = char + this.modKey[i][j] - Object.keys(this.alphabet).length;
          }
        })

        return item;
      })
    }
    else {
      result = this.modString.map((item, i) => {
        if (typeof item === 'string' && typeof this.modKey[i] === 'string') {
          return item = this.modKey[i];
        }
        else if (item + this.modKey[i] < Object.keys(this.alphabet).length) {
          return item = item + this.modKey[i];
        }
        else {
          return item = item + this.modKey[i] - Object.keys(this.alphabet).length;
        }
      })
    }
    //   console.log(this.modKey)
    //   console.log(this.modString)
    let s = [];
    if (string.split(' ').length > 1) {
      while (s < result.length) {
        for (let i = 0; i < result.length; i++) {
          let temp = [];
          for (let j = 0; j < result[i].length; j++) {
            for (let [key, value] of Object.entries(this.alphabet)) {
              if (result[i][j] === value) {
                temp.push(key)
              }
            }
            if (typeof result[i][j] != 'number') {
              temp.push(result[i][j])
            }

          }
          s.push(temp)
        }
      }
    } else {
      for (let i = 0; i < result.length; i++) {
        for (let [key, value] of Object.entries(this.alphabet)) {
          if (result[i] === value) {
            s.push(key)
          }
        }
        if (typeof result[i] != 'number') {
          s.push(result[i])
        }
      }
      console.log(this.modKey)
      this.cryptogramma = result;
      return s.join('');
    }


    let c = []
    for (let i = 0; i < s.length; i++) {
      c.push(...s[i])
      if (i !== s.length - 1) c.push(' ');
    }
    //   console.log(c.join(''))
    // console.log(this.modKey)
    return c.join('');
  }


  // return result.toUpperCase()
  decrypt(string, key) {
    let result;
    this.modKey = undefined;
    this.modString = undefined;
    if (!string || !key) throw new NotImplementedError('Incorrect arguments!');
    if (this.isDirect === false) {
      string = string.split('').reverse().join('');
    }

    if (string.split(' ').length > 1) {
      this.modString = string.split(' ')
      this.modString = this.modString
        .map(item => item.split(''))
        .map(item => {
          return item.map(char => {
            if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
              return char = this.alphabet[char.toUpperCase()];
            } else {
              return char;
            }
          })
        })
    } else {
      this.modString = string.split('')
      this.modString = this.modString
        .map(item => {
          if (this.alphabet.hasOwnProperty(item.toUpperCase())) {
            return item = this.alphabet[item.toUpperCase()];
          } else {
            return item;
          }
        })
    }
    //   console.log(this.modString)
    if (key.length < this.modString.flat(Infinity).length) {
      this.modKey = key.padEnd(this.modString.flat(Infinity).length, key.slice(0))
    } else if (string.split(' ').length === 1) {
      this.modKey = key.padEnd(this.modString.length, key.slice(0))
    }
    else {
      this.modKey = key.padEnd(this.modString.length, key.slice(0))
    }
    //   console.log(this.modKey)
    let b = [];
    let counter = 0;
    if (string.split(' ').length > 1) {
      this.modKey = this.modKey.split('');
      for (let i = 0; i < this.modString.length; i++) {
        let temp = [];
        for (let j = 0; j < this.modString[i].length; j++) {
          if (typeof this.modString[i][j] === 'number') {
            temp.push(this.modKey[counter]);
          } else {
            temp.push(this.modString[i][j]);
          }

          counter++;
        }
        b.push(temp)
      }
    }
    else {
      this.modKey = this.modKey.split('');
      for (let i = 0; i < this.modString.length; i++) {
        if (typeof this.modString[i] === 'number') {
          b.push(this.modKey[i]);
        } else {
          b.push(this.modString[i]);
        }


      }
    }
    console.log(b)
    // массив ключей переправим в числа
    if (string.split(' ').length > 1) {
      b = b.map(item => {
        return item.map(char => {
          if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
            return char = this.alphabet[char.toUpperCase()];
          } else {
            return char;
          }
        })
      })
    } else {
      b = b.map(char => {
        if (this.alphabet.hasOwnProperty(char.toUpperCase())) {
          return char = this.alphabet[char.toUpperCase()];
        } else {
          return char;
        }
      })
    }
    //   console.log(b)
    this.modKey = b;
    if (string.split(' ').length > 1) {
      result = this.modString.map((item, i) => {
        return item.map((char, j) => {
          if (typeof char === 'string' && typeof this.modKey[i][j] === 'string') {
            return item = this.modKey[i][j];
          }
          else if (char - this.modKey[i][j] < 0) {
            return item = char - this.modKey[i][j] + Object.keys(this.alphabet).length;
          }
          else {
            return item = char - this.modKey[i][j];
          }
        })

        return item;
      })
    }
    else {
      result = this.modString.map((item, i) => {
        if (typeof item === 'string' && typeof this.modKey[i] === 'string') {
          return item = this.modKey[i];
        }
        else if (item - this.modKey[i] < 0) {
          return item = item - this.modKey[i] + Object.keys(this.alphabet).length;
        }
        else {
          return item = item - this.modKey[i];
        }
      })
    }
    //   console.log(this.modKey)
    //   console.log(this.modString)
    let s = [];
    if (string.split(' ').length > 1) {
      while (s < result.length) {
        for (let i = 0; i < result.length; i++) {
          let temp = [];
          for (let j = 0; j < result[i].length; j++) {
            for (let [key, value] of Object.entries(this.alphabet)) {
              if (result[i][j] === value) {
                temp.push(key)
              }
            }
            if (typeof result[i][j] != 'number') {
              temp.push(result[i][j])
            }

          }
          s.push(temp)
        }
      }
    } else {
      for (let i = 0; i < result.length; i++) {
        for (let [key, value] of Object.entries(this.alphabet)) {
          if (result[i] === value) {
            s.push(key)
          }
        }
        if (typeof result[i] != 'number') {
          s.push(result[i])
        }
      }
      console.log(this.modKey)
      this.cryptogramma = result;
      return s.join('');
    }


    let c = []
    for (let i = 0; i < s.length; i++) {
      c.push(...s[i])
      if (i !== s.length - 1) c.push(' ');
    }
    //   console.log(c.join(''))
    // console.log(this.modKey)
    return c.join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};
