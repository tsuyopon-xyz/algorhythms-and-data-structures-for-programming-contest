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
 * @param {string[]} text
 * @param {number[][]} countTable
 * @param {number} indexM
 * @param {number} indexN
 */
function getCharInRecurcively(textForM, countTable, indexM, indexN) {
  const currentCount = countTable[indexM][indexN];
  if (currentCount === 0) {
    return '';
  }

  const leftCount = countTable[indexM - 1][indexN];
  const topCount = countTable[indexM][indexN - 1];
  if (currentCount !== leftCount && currentCount !== topCount) {
    const char = textForM[indexM];
    return (
      getCharInRecurcively(textForM, countTable, indexM - 1, indexN - 1) + char
    );
  } else if (currentCount !== leftCount && currentCount === topCount) {
    return getCharInRecurcively(textForM, countTable, indexM, indexN - 1);
  } else if (currentCount === leftCount && currentCount !== topCount) {
    return getCharInRecurcively(textForM, countTable, indexM - 1, indexN);
  } else {
    // TODO 上・左の2パターンに戻って行った時の処理を実装したい
    return getCharInRecurcively(textForM, countTable, indexM - 1, indexN);
    // return getCharInRecurcively(textForM, countTable, indexM, indexN - 1);
  }
}

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

  const word = getCharInRecurcively(
    xForLCS,
    c,
    xForLCS.length - 1,
    yForLCS.length - 1
  );

  return { maxLength, oneOfCombination: word };
}
const index = 0;
const result = lcs(dataset[index].X, dataset[index].Y);
console.log(result);
