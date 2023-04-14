const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // console.debug(Object.getPrototypeOf(date))
  if (date) {
    const season = {
      'spring': ['March', 'April', 'May'],
      'summer': ['June', 'July', 'August'],
      'autumn': ['September', 'October', 'November'],
      'winter': ['December', 'January', 'February'],
    };
    const options = {
      month: "long",
      timeZoneName: 'short'
    }
    try {
      let month = date.toLocaleDateString('en-US', options).split(',')[0];
      for (let i in season) {
        if (season[i].includes(month)) return i;
      }
    }
    catch {
      throw new Error('Invalid date!');
    }

  }
  else return 'Unable to determine the time of year!';
}

module.exports = {
  getSeason
};
