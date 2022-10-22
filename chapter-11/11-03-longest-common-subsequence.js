// const x = ['a', 'b', 'c', 'b', 'd', 'a', 'b'];
// const y = ['b', 'd', 'c', 'a', 'b', 'a'];

// 入力
// const q = 3;
const dataset = [
  {
    X: 'abcbdab'.split(''),
    Y: 'bdcaba'.split(''),
  },
  {
    X: 'abc'.split(''),
    Y: 'abc'.split(''),
  },
  {
    X: 'abc'.split(''),
    Y: 'bc'.split(''),
  },
];

// 出力

// 制約
// 1 <= q <= 150
// 1 <= X, Yの長さ <= 1000
// Xまたは、Yの長さが100を超えるデータセットが含まれる場合は, qは20以下である

/**
 *
 * @param {string[]} x
 * @param {string[]} y
 */
function lcs(x, y) {
  const xForLCS = ['', ...x];
  const yForLCS = ['', ...y];

  // c[xForLCS.length][yForLCS.length]
  const c = [...Array.from({ length: xForLCS.length }).map((_) => [])];
  for (let i = 0; i < xForLCS.length; i++) {
    for (let j = 0; j < yForLCS.length; j++) {
      c[i][j] = 0;
    }
  }

  // index 0 is empty string.
  // check "xForLCS" and "yForLCS" on first 2 lines in this function.
  const startIndex = 1;
  let maxLength = 0;
  for (let i = startIndex; i < xForLCS.length; i++) {
    for (let j = startIndex; j < yForLCS.length; j++) {
      if (xForLCS[i] === yForLCS[j]) {
        c[i][j] = c[i - 1][j - 1] + 1;
      } else {
        c[i][j] = Math.max(c[i - 1][j], c[i][j - 1]);
      }
      maxLength = Math.max(maxLength, c[i][j]);
    }
  }

  let indexMapForBackPropagation = {
    m: xForLCS.length - 1,
    n: yForLCS.length - 1,

    // 最長共通部分列の組み合わせの1つを保持
    word: '',
  };
  console.log(
    '@@@@@@@@',
    indexMapForBackPropagation.m,
    indexMapForBackPropagation.n,
    c[indexMapForBackPropagation.m][indexMapForBackPropagation.n]
  );
  while (c[indexMapForBackPropagation.m][indexMapForBackPropagation.n] > 0) {
    const currentLength =
      c[indexMapForBackPropagation.m][indexMapForBackPropagation.n];
    const leftLength =
      c[indexMapForBackPropagation.m - 1][indexMapForBackPropagation.n];
    const topLength =
      c[indexMapForBackPropagation.m][indexMapForBackPropagation.n - 1];
    console.log({ currentLength, leftLength, topLength });
    if (currentLength !== leftLength && currentLength !== topLength) {
      indexMapForBackPropagation.word =
        xForLCS[indexMapForBackPropagation.m] + indexMapForBackPropagation.word;
      indexMapForBackPropagation.m -= 1;
      indexMapForBackPropagation.n -= 1;
    } else if (currentLength === leftLength) {
      indexMapForBackPropagation.m -= 1;
    } else {
      indexMapForBackPropagation.n -= 1;
    }

    console.log(indexMapForBackPropagation);
  }

  // console.log(indexMapForBackPropagation);

  return maxLength;
}
const index = 0;
const result = lcs(dataset[index].X, dataset[index].Y);
console.log({ result });
