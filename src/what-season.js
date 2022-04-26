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
function seasonNum(num){
  if (num == 11 || num <=1){
    return 'winter';
  }else if (num <= 4){
    return 'spring';
  }else if (num <= 7){
    return 'summer';
  }else{
    return 'autumn'
  }
}


function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try {
    if (new Date(JSON.parse(JSON.stringify(date))) != 'Invalid Date') {
      return seasonNum(date.getMonth());
    } else {
      throw '';
    }
  } catch (e) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
