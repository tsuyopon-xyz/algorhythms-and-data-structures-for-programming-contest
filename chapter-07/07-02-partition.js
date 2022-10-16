// 入力
// const n = 12; // 配列Aの要素数
const A = [13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11];
// const A = Array.from({ length: 10000 }).map((_, i, array) =>
//   Math.floor(Math.random() * array.length)
// );

// 出力
// [9, 5, 8, 7, 4, 2, 6, [11], 21, 13, 19, 12]

// 制約
// 1 <= n <= 100,000
// 0 <= Ai <= 100,000

/**
 *
 * @param {Array<number>} array
 * @param {number} p firstIndex of array
 * @param {number} r lastIndex of array
 */
function partition(array, p, r) {
  const x = array[r];
  let i = p - 1;
  for (let j = p; j < r; j++) {
    const current = array[j];
    if (current <= x) {
      i++;
      [array[i], array[j]] = [current, array[i]];
    }
  }
  if (i + 1 === r) {
    array[r] = [array[r]];
  } else {
    [array[i + 1], array[r]] = [[array[r]], array[i + 1]];
  }
}

/**
 *
 * @param {Array<number>} array
 */
function solution1(array) {
  console.log({ before: array });

  partition(array, 0, array.length - 1);

  console.log({ after: array });
}
// console.time('solution1');
solution1([...A]);
// console.timeEnd('solution1');

/**
 *
 * @param {Array<number>} array
 */
function solution2(array) {
  const copiedArray = [...array];
  const lastValue = copiedArray.pop();
  const smallGroup = [];
  const bigGroup = [];

  // copiedArrayはpopしているため、オリジナルのarrayより要素数が1少なくなっている
  for (let i = 0; i < copiedArray.length; i++) {
    const current = copiedArray[i];
    current <= lastValue ? smallGroup.push(current) : bigGroup.push(current);
  }
  const partitionArray = [...smallGroup, [lastValue], ...bigGroup];

  // console.log({ partitionArray });
}
// console.time('solution2');
// solution2([...A]);
// console.timeEnd('solution2');
