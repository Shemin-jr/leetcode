/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    try{ 
        return !s.replace(RegExp(p), '')
   }catch{
        return true
   }
};