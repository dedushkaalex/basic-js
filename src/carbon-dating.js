const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  let HALF_LIFE_PERIOD = 5730;
  let MODERN_ACTIVITY = 15;
  k_t = 0.693 / HALF_LIFE_PERIOD;
  let result;
  parseFloat(sampleActivity) < 9000 && parseFloat(sampleActivity) > 0 ? result = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k_t) : false;

  return result > 0 ? result : false;
}

module.exports = {
  dateSample
};
