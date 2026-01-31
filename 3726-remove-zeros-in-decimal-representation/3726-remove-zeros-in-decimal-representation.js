/**
 * @param {number} n
 * @return {number}
 */

var removeZeros = function(n) {
    return Number(n.toString().split(0).join(''))

};
