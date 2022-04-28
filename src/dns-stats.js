const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((dns, el) => {
    el.split('.').reverse().reduce((acc, value) => {
      acc += '.' + value;
      if (dns.hasOwnProperty(acc)){
        dns[acc]++;
      }else{
        dns[acc] = 1;
      }
    }, '');
    return dns;
  }, {});
}

module.exports = {
  getDNSStats
};
