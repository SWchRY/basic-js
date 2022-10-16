const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15; //n0
const HALF_LIFE_PERIOD = 5730; //t/12

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
 * dateSample('WOOT!') => false    *sampleactivity
 *
 */
function dateSample(sampleActivity) {
  if(typeof(sampleActivity) != "string" ) return false
  if(isNaN(Number(sampleActivity))) return false
  else if(!sampleActivity) return false
  else if(Number(sampleActivity)>MODERN_ACTIVITY) return false
  else if(!isFinite(Number(sampleActivity))) return false
  if(Number(sampleActivity)<= 0) return false
  let k = Math.log(2)/HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k;
  return Math.ceil(t)
}

module.exports = {
  dateSample
};
