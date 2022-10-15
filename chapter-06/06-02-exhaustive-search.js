// 入力
const n = 5; // Aの要素数
const A = [1, 5, 7, 10, 21];
const q = 4; // mの要素数
const m = [2, 4, 17, 8]; // Aの要素の組み合わせ実現できるかチェックする整数

// 出力
// mの各要素で、実現できれば 'yes', できなければ 'no' を出力する

// 制約
// n <= 20
// q <= 200
// 1 <= A.length <= 2000
// 1 <= m.length <= 2000

function solution() {
  for (let i = 0; i < m.length; i++) {
    const mi = m[i];
    const result = solve(0, mi) ? 'yes' : 'no';
    console.log({ i, mi, result });
    console.log('--------------');
  }
}

function solve(i, currentM, mark = '') {
  // console.log({ i, currentM, mark });
  if (currentM === 0) return true;
  if (i >= n) return false;

  return solve(i + 1, currentM, '@1') || solve(i + 1, currentM - A[i], '@2');
}

solution();
