// 入力
// 1つの整数nが与えられる

// 出力
// フィボナッチ数列の第n項目を1行に出力する

// 制約
// 0 <= n <= 44

// フィボナッチ数列
// [1, 1, 2, 3, 5, 8, 13, 21, ...]

const memo = [];
let countOfFib1 = 0;
let countOfFib2 = 0;

function fibonacci1(n) {
  countOfFib1++;
  if (n === 0 || n === 1) {
    return 1;
  }

  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

function fibonacci2(n) {
  countOfFib2++;
  if (n === 0 || n === 1) {
    memo[n] = 1;
    return memo[n];
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacci2(n - 1) + fibonacci2(n - 2);

  return memo[n];
}

const n = 44;
console.time('fib1');
const result1 = fibonacci1(n);
console.timeEnd('fib1');
console.time('fib2');
const result2 = fibonacci2(n);
console.timeEnd('fib2');

console.log({ result1, result2, countOfFib1, countOfFib2 });
