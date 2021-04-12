/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
// eslint-disable-next-line no-unused-vars
function findIndex(array, value) {
  let firstEl = 0;
  let lastEl = array.length - 1;

  while (firstEl <= lastEl) {
    const middleEl = Math.floor((firstEl + lastEl) / 2);
    if (array[middleEl] === value) {
      return middleEl;
    } if (array[middleEl] < value) {
      firstEl = middleEl + 1;
    } else {
      lastEl = middleEl - 1;
    }
  }
  return -1;
}

module.exports = findIndex;
