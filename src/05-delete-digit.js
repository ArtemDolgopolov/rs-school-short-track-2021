/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxDig = 0;
  const array = String(n).split('').forEach((e, i) => e.splice(i, 1));
  const integer = Number(array).join('').forEach(() => {
    if (integer > maxDig) maxDig = integer;
  });
  return maxDig;
}
module.exports = deleteDigit;
