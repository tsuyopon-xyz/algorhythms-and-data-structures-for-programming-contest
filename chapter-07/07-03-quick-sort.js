class Card {
  /**
   *
   * @param {string} mark 'C' | 'D' | 'H' | 'S'
   * @param {number} number
   */
  constructor(mark, number) {
    this.mark = mark;
    this.number = number;
  }

  stringify() {
    return `${this.mark}${this.number}`;
  }
}

// 入力
// const n = 6; // 配列
// const A = ['D3', 'H2', 'D1', 'S3', 'D2', 'C1'];
// const A = [13, 19, 9, 5, 12, 8, 7, 4, 21, 25, 3, 14, 6, 11];
const A = [
  new Card('D', 3),
  new Card('H', 2),
  new Card('D', 1),
  new Card('S', 3),
  new Card('D', 2),
  new Card('C', 1),
];

// 出力
// 1行目 : "Stable" or "Not stable" を出力
// 2行目 : ['D1', 'C1', 'D2', 'H2', 'D3', 'S3']

// 制約
// 1 <= n <= 100,000
// 1 <= A.length <= 10^9
// 入力に絵柄と数の組みが同じカードは2枚以上含まれない

/**
 *
 * @param {Array<Card>} array
 * @param {number} p firstIndex of array
 * @param {number} r lastIndex of array
 * @returns {partionIndex}
 */
function partition(array, p, r) {
  const x = array[r];
  let i = p - 1;
  for (let j = p; j < r; j++) {
    const current = array[j];
    if (current.number <= x.number) {
      i++;
      [array[i], array[j]] = [current, array[i]];
    }
  }

  [array[i + 1], array[r]] = [array[r], array[i + 1]];

  return i + 1;
}

/**
 *
 * @param {Array<Card>} array
 * @param {number} p firstIndex of array
 * @param {number} r lastIndex of array
 */
function quickSort(array, p, r) {
  // console.log({ p, r, 'r - p': r - p });
  if (r - p <= 1) return;

  const partionIndex = partition(array, p, r);
  quickSort(array, p, partionIndex - 1); // left
  quickSort(array, partionIndex + 1, r); // right
}

/**
 *
 * @param {Array<Card>} array
 */
function solution(array) {
  console.log({ before: array.map((c) => c.stringify()) });
  quickSort(array, 0, array.length - 1);
  console.log({ after: array.map((c) => c.stringify()) });
}

solution([...A]);
