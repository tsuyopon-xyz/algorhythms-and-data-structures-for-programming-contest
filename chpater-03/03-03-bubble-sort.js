/**
 *
 * @param {Array<number>} _numbers
 */
function bubbleSort1(_numbers) {
  let flag = true;
  while (flag) {
    flag = false;
    for (let j = _numbers.length - 1; j >= 1; j--) {
      if (_numbers[j] < _numbers[j - 1]) {
        const tmp = _numbers[j];
        _numbers[j] = _numbers[j - 1];
        _numbers[j - 1] = tmp;
        flag = true;
      }
    }
  }
}

/**
 *
 * @param {Array<number>} _numbers
 */
function bubbleSort2(_numbers) {
  for (let i = 0; i < _numbers.length - 1; i++) {
    for (let j = i + 1; j < _numbers.length; j++) {
      if (_numbers[i] > _numbers[j]) {
        const tmp = _numbers[i];
        _numbers[i] = _numbers[j];
        _numbers[j] = tmp;
      }
    }
  }
}

const array1 = [4, 6, 2, 3, 6, 10, 1];
const array2 = [4, 6, 2, 11, 3, 6, 10, 1];
console.time('id1');
bubbleSort1(array1);
console.timeEnd('id1');
console.time('id2');
bubbleSort2(array2);
console.timeEnd('id2');
console.log('array1 : ', array1);
console.log('array2 : ', array2);
