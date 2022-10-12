/**
 *
 * @param {Array<number>} _numbers
 */
function selectionSort(_numbers) {
  for (let i = 0; i < _numbers.length - 1; i++) {
    let minIndex = i;
    let minValue = _numbers[minIndex];
    for (let j = i + 1; j < _numbers.length; j++) {
      if (minValue > _numbers[j]) {
        minIndex = j;
        minValue = _numbers[j];
      }
    }

    if (minIndex === i) continue;

    const tmp = _numbers[i];
    _numbers[i] = _numbers[minIndex];
    _numbers[minIndex] = tmp;
  }
}

const array = [4, 6, 2, 3, 6, 10, 1];
console.time();
selectionSort(array);
console.timeEnd();
console.log('array : ', array);
