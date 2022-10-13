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

  if (date == undefined) {
    return 'Unable to determine the time of year!';
  } 
  
  let Month = date.getMonth();

  if (Month >= 2 && Month <= 4) {
    return 'spring'
  }
    else if (Month >= 5 && Month <= 7) {
      return 'summer'
    }
      else if (Month >= 8 && Month <= 10) {
        return 'autumn'
      }
        else if (Month >= 11 || Month <= 1) {
          return 'winter'
        }
}

 module.exports = {
   getSeason
 };
 