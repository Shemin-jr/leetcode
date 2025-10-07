/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (num) {
    let str = num.toString();
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(123)); 
