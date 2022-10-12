/**
 *
 * @param {Array<number>} _numbers
 */
function insertionSort(_numbers) {
  const numbers = [..._numbers];
  for (let i = 1; i < numbers.length; i++) {
    const v = numbers[i];
    let j = i - 1;
    while (j >= 0 && numbers[j] > v) {
      numbers[j + 1] = numbers[j];
      j--;
    }

    numbers[j + 1] = v;
  }
  return numbers;
}

const a = insertionSort([4, 6, 2, 3, 6, 10, 1]);
console.log(a);
