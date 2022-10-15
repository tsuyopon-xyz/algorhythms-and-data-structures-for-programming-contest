/**
 *
 * @param {Array<number>} sortedNumbers
 * @returns {number} target index number in array, if the target does not exist, return -1;
 */
function binarySearch(sortedNumbers, target) {
  let left = 0;
  let right = sortedNumbers.length;

  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);
    const middleValue = sortedNumbers[middle];
    console.log({ middleValue, middle, left, right });
    if (target === middleValue) {
      return middle;
    } else if (target < middleValue) {
      right = middle;
    } else if (middleValue < target) {
      left = middle + 1;
    } else {
      console.log('何かおかしい...');
    }
  }

  return -1;
}

// const sortedNumbers = [1, 2, 5, 13, 23, 44, 45, 64, 100];
const sortedNumbers = Array.from({ length: 100 })
  .map((_) => Math.floor(Math.random() * 100) + 1)
  .sort((a, b) => a - b);
console.log(sortedNumbers);
const target = 70;
const result = binarySearch(sortedNumbers, target);

console.log('result : ', result);
