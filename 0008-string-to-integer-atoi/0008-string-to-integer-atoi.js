/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
     let result = "";
  let readSignal = false;
  let readNum = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && !readSignal && !readNum) {
      continue;
    }

    if (!readNum && !readSignal) {
      if (s[i] === "+") {
        result += "+";
        readSignal = true;
        continue;
      } else if (s[i] === "-") {
        result += "-";
        readSignal = true;
        continue;
      }
    }

    if (!isNaN(parseInt(s[i]))) {
      result += s[i];
      readNum = true;
    } else {
      break;
    }
  }

  let num = parseInt(result);

  if (isNaN(num)) return 0;

  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  if (num > INT_MAX) return INT_MAX;
  if (num < INT_MIN) return INT_MIN;

  return num;
};