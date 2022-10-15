// 入力
// const n = 10; // 配列の要素数
const S = [8, 5, 9, 2, 6, 3, 7, 1, 10, 4]; // ソートされていない配列
let count = 0;

// 出力例
// ソート済みの配列と比較回数を出力する
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // ソート済み配列
// 34 // 何回比較したか

// 制約
// n <= 500,000
// 0 <= S.length <= 10^9

/**
 *
 * @param {Array<number>} array
 * @returns {Array<Array<number>>} [leftArray, rightArray]
 */
function devide(array) {
  const mid = Math.floor(array.length / 2);
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (i < mid) {
      leftArray.push(value);
    } else {
      rightArray.push(value);
    }
  }

  return [leftArray, rightArray];
}

/**
 *
 * @param {Array<number>} array
 * @param {number} left index number of left to array
 * @param {number} right index number of right to array
 */
function mergeSort(array, left, right) {
  if (left + 1 >= right) return array;

  const [leftArray, rightArray] = devide(array);
  const sortedLeftArray = mergeSort(leftArray, 0, leftArray.length);
  const sortedRightArray = mergeSort(rightArray, 0, rightArray.length);
  const sortedArray = merge(sortedLeftArray, sortedRightArray);

  return sortedArray;
}

/**
 *
 * @param {Array<number>} leftArray
 * @param {Array<number>} rightArray
 */
function merge(leftArray, rightArray) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (mergedArray.length < leftArray.length + rightArray.length) {
    // 比較回数を出力するためのカウントアップ
    //（solution関数の中で`console.log(count)`をして、全体で何回の比較が行われたかを確認する）
    count++;

    const leftValue = leftArray[leftIndex] ?? Number.POSITIVE_INFINITY;
    const rightValue = rightArray[rightIndex] ?? Number.POSITIVE_INFINITY;

    if (leftValue < rightValue) {
      mergedArray.push(leftValue);
      leftIndex++;
    } else {
      mergedArray.push(rightValue);
      rightIndex++;
    }
  }

  return mergedArray;
}

// 入力
// const n = 10; // 配列の要素数
// const S = [8, 5, 9, 2, 6, 3, 7, 1, 10, 4]; // ソートされていない配列
/**
 *
 * @param {Array<number>} array
 */
function solution(array = S) {
  const mergedArray = mergeSort(array, 0, array.length);
  console.log({ mergedArray, count });
}

solution();
