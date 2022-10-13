/**
 *
 * @param {Array<number>} array
 * @param {Array<number>} gList
 */
function shellSort(array, gList) {
  let a = array;
  console.time('total');
  gList.forEach((g, i) => {
    console.time(i);
    a = insertionSort(a, g);
    console.timeEnd(i);
    // console.log('i : ', a);
  });
  console.timeEnd('total');

  return a;
}

/**
 *
 * @param {Array<number>} array
 * @param {number} g
 * @returns
 */
function insertionSort(array, g) {
  const copiedArray = [...array];

  for (let i = g; i < copiedArray.length; i++) {
    const v = copiedArray[i];
    let j = i - g;
    while (j >= 0 && copiedArray[j] > v) {
      copiedArray[j + g] = copiedArray[j];
      j -= g;
    }

    copiedArray[j + g] = v;
  }

  return copiedArray;
}

const LENGTH_OF_ARRAY = 100000;
const array = Array.from({ length: LENGTH_OF_ARRAY }).map((_) =>
  Math.ceil(Math.random() * LENGTH_OF_ARRAY)
);

let i = 2;
let count = 0;
while (LENGTH_OF_ARRAY > i) {
  i *= 2;
  count++;
}

const gList = Array.from({ length: count }).map((_, i) => 2 ** (count - i) - 1);
const result1 = shellSort(array, gList); // Shell Sort
const result2 = shellSort(array, [1]); // Insertion Sort

console.time('built-in sort');
array.sort((a, b) => a - b);
console.timeEnd('built-in sort');

console.log(
  'isSame : ',
  result1.every((_, i) => result1[i] === result2[i]),
  result1.every((_, i) => result1[i] === array[i])
);
