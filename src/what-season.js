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
  //const Pdate = new Date(2022,02,31)
  if(!date){
    return 'Unable to determine the time of year!'
  }
  if(!date) return 'Unable to determine the time of year!'
  if(date.getDate != Date.prototype.getDate) throw new Error('Invalid date!') 
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw Error('Invalid date!');
  }

  let month = date.getMonth() + 1
  let year = date.getYear() + 1900
  let day = date.getDate()
  if(isNaN(day) || isNaN(month) || isNaN(year)) throw Error('Invalid date!')
  const NowDate = new Date()
  let invalid = Object.keys(date)
  if(!(date instanceof Date) || (!date.getTime) || (invalid.length > 0)) throw Error('Invalid date!')
  if(date.getTime()===NowDate.getTime()) return 'Unable to determine the time of year!'
  const months = ['spring','summer','autumn','winter']
  if(month >= 3 && month <= 5) return months[0]
  else if(month >= 6 && month <= 8) return months[1]
  else if(month >= 9 && month <= 11) return months[2]
  else if(month == 12 || month == 1 || month == 2) return months[3]
  else return false
  
}

module.exports = {
  getSeason
};
