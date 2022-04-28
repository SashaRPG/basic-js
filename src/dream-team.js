const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 * 
 *   return Array.isArray(members)
  ? members
      .map((el) =>
        typeof el === 'string' && /[A-Za-z]/.test(el.trim()[0])
          ? el.trim()[0].toUpperCase()
          : ''
      )
      .sort()
      .join('')
  : false;
}
 */
function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .map((name) =>
          typeof name === 'string' && /[A-Za-z]/.test(name.trim()[0])
            ? name.trim()[0].toUpperCase()
            : ''
        )
        .sort()
        .join('')
    : false;
}

module.exports = {
  createDreamTeam
};
