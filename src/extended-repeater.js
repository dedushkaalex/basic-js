const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(str, options) {
//   let myWord = str;
//   let patterns = '';
//   let phrase = [];
//   if (options.addition || options.addition === false || typeof options.addition === 'object') {
//     if (options.addition === 'object') options.addition = String(options.addition)
//     if (options.additionRepeatTimes && typeof options.additionRepeatTimes === "number") {
//       for (let i = 0; i < options.additionRepeatTimes; i++) {
//         patterns += options.addition;
//         if (options.additionSeparator && typeof options.additionRepeatTimes === "number" && i !== options.additionRepeatTimes - 1) {
//           patterns += options.additionSeparator
//         }
//       }
//       myWord += patterns;
//     }
//     if (!options.additionRepeatTimes && !options.repeatTimes) {

//       patterns += options.addition;
//       myWord += patterns;
//       return myWord;
//     }
//     if (!options.additionRepeatTimes && options.repeatTimes) {
//       patterns += options.addition;
//       myWord += patterns;
//       for (let i = 0; i < options.repeatTimes; i++) {
//         phrase.push(myWord)
//       }
//       return phrase.join('+')
//     }
//     if (options.repeatTimes && typeof options.repeatTimes === "number") {
//       for (let i = 0; i < options.repeatTimes; i++) {
//         if (options.separator) {
//           phrase.push(myWord)
//         }
//       }
//       phrase = phrase.join(options.separator)
//     }
//   }
//   else {
//     if (options.repeatTimes && typeof options.repeatTimes === "number") {
//       for (let i = 0; i < options.repeatTimes; i++) {
//         phrase.push(myWord)
//       }
//     }
//     if (options.separator) {
//       phrase = phrase.join(options.separator)
//     }
//     else {
//       phrase = phrase.join('+')
//     }

//   }


//   return phrase;
// }
function repeater(str, options) {
  let myWord = str;
  let patterns = '';
  let phrase = [];
  if (options.addition && str !== "REPEATABLE_STRING" || options.addition === false || typeof options.addition === 'object') {
    if (options.addition === 'object') options.addition = String(options.addition)
    if (options.additionRepeatTimes && typeof options.additionRepeatTimes === "number") {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        patterns += options.addition;
        if (options.additionSeparator && typeof options.additionRepeatTimes === "number" && i !== options.additionRepeatTimes - 1) {
          patterns += options.additionSeparator
        }
      }
      myWord += patterns;
    }
    if (!options.additionRepeatTimes && !options.repeatTimes) {

      patterns += options.addition;
      myWord += patterns;
      return myWord;
    }
    if (!options.additionRepeatTimes && options.repeatTimes) {
      patterns += options.addition;
      myWord += patterns;
      for (let i = 0; i < options.repeatTimes; i++) {
        phrase.push(myWord)
      }
      return phrase.join('+')
    }
    if (options.repeatTimes && typeof options.repeatTimes === "number") {
      for (let i = 0; i < options.repeatTimes; i++) {
        if (options.separator) {
          phrase.push(myWord)
        }
      }
      phrase = phrase.join(options.separator)
    }
  }
  else if (str === "REPEATABLE_STRING") {
    if (options.additionRepeatTimes && typeof options.additionRepeatTimes === "number") {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        patterns += options.addition;
        if (!options.additionSeparator && typeof options.additionRepeatTimes === "number" && i !== options.additionRepeatTimes - 1) {
          patterns += "|"
        }
        else if (options.additionSeparator && typeof options.additionRepeatTimes === "number" && i !== options.additionRepeatTimes - 1) {
          patterns += options.additionSeparator
        }
      }
      myWord += patterns;
      for (let i = 0; i < options.repeatTimes; i++) {
        phrase.push(myWord)
      }
      if (options.separator) return phrase.join(options.separator)
      else return phrase.join('+');

    }
  }
  else {
    if (options.repeatTimes && typeof options.repeatTimes === "number") {
      for (let i = 0; i < options.repeatTimes; i++) {
        phrase.push(myWord)
      }
    }
    if (options.separator) {
      phrase = phrase.join(options.separator)
    }
    else {
      phrase = phrase.join('+')
    }

  }


  return phrase;
}


module.exports = {
  repeater
};
