const { isString } = require('@vue/shared');
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
function dateSample(data) {
//   throw new NotImplementedError('Not implemented');
   if(isString(data) &&  +data >0 && +data <= 15 && !isNaN(data)){
      let result = (Math.log( MODERN_ACTIVITY/data))/ (0.693/HALF_LIFE_PERIOD );
      return Math.ceil(result);
   }return false;

}

module.exports = {
  dateSample
};
