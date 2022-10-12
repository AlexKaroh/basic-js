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
  sampleActivity = +sampleActivity;
  if (typeof sampleActivity == Number) return false;
  if (sampleActivity < 0) return false;
  let i = 0.693 / HALF_LIFE_PERIOD;
  let j =  Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / i);
  if (j < 0) return false;
  if (j === Infinity) return false;
  if (isNaN(j)) return false;
  return j;
}

module.exports = {
  dateSample
};
