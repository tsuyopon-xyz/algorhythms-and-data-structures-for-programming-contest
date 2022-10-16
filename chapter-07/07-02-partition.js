// 入力
// const n = 12; // 配列Aの要素数
// const A = [13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11];
const A = Array.from({ length: 10000000 }).map((_, i, array) =>
  Math.floor(Math.random() * array.length)
);

// 出力
// [9, 5, 8, 7, 4, 2, 6, [11], 21, 13, 19, 12]

// 制約
// 1 <= n <= 100,000
// 0 <= Ai <= 100,000

/**
 *
 * @param {Array<number>} array
 */
function solution1(array) {
  const lastIndex = array.length - 1;
  const x = array[lastIndex];
  let i = -1;
  for (let j = 0; j < lastIndex; j++) {
    const current = array[j];
    if (current <= x) {
      i++;
      [array[i], array[j]] = [current, array[i]];
    }
  }
  // console.log({
  //   'array[i + 1]': array[i + 1],
  //   'array[lastIndex]': array[lastIndex],
  //   'i+1': i + 1,
  //   lastIndex,
  // });
  if (i + 1 === lastIndex) {
    array[lastIndex] = [array[lastIndex]];
  } else {
    [array[i + 1], array[lastIndex]] = [[array[lastIndex]], array[i + 1]];
  }

  // console.log({ after: array });
}
console.time('solution1');
solution1([...A]);
console.timeEnd('solution1');

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
console.time('solution2');
solution2([...A]);
console.timeEnd('solution2');
