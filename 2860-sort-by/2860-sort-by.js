function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}

let arr = [5, 4, 1, 2, 3];
let fn = (x) => x;

console.log(sortBy(arr, fn));
