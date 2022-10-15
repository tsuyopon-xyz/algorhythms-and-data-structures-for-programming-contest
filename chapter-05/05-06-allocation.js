const n = 5; // 荷物の数
const k = 3; // トラック台数
const w = [8, 1, 7, 3, 9]; // 各荷物の重さ
//その他条件
// 1 <= n <= 100,000
// 1 <= k <= 100,000
// 1 <= wi <= 100,00

// 計算量: O(Pn)
function solution1() {
  // P: 最大積載量
  // v: 荷物の数
  function calc(P) {
    let v = 0;
    let wIndex = 0;

    for (let i = 0; i < k; i++) {
      // 各トラックの現在積んでいる荷物のトータルの重さ
      let total = 0;

      // 最大積載量以下の場合は、次の荷物もチェックできないか確認する
      while (true) {
        const wi = w[wIndex];
        if (wi + total <= P) {
          total += wi;

          // 荷物を1つ乗せることができた
          v++;

          // 次の荷物のインデックス番号に移動
          wIndex++;
        } else {
          break;
        }
      }
    }

    return v;
  }

  let p = 0;
  let v = 0;
  while (v < n) {
    v = calc(p);
    console.log({ v, p });
    if (v < n) {
      p++;
    }
  }
  console.log(p);
}

// solution1();

// 計算量: O(nlogP)

// solution2実装時に、ファイル上部の定義を見やすくするためにおいただけのコード（要コメントアウト）
// const n = 5; // 荷物の数
// const k = 3; // トラック台数
// const w = [8, 1, 7, 3, 9]; // 各荷物の重さ
//その他条件
// 1 <= n <= 100,000
// 1 <= k <= 100,000
// 1 <= wi <= 100,00
function solution2() {
  /**
   * 最大積載量Pのk台のトラックで何個の荷物を積めるか？
   * @param {number} P 最大積載量
   * @returns {number} 詰める荷物の数
   */
  function check(P) {
    // 積める荷物の数
    let v = 0;
    let wIndex = 0;
    for (let i = 0; i < k; i++) {
      let total = 0;
      while (w[wIndex] !== undefined && total + w[wIndex] <= P) {
        total += w[wIndex];
        v++;
        wIndex++;
      }
    }

    return v;
  }

  function solve() {
    let left = 0;
    let right = 100000 * 10000; // 荷物の最大個数 × 1個当たりの最大重量

    while (right - left > 1) {
      const mid = Math.floor((left + right) / 2);
      const v = check(mid);
      console.log('before : ', { left, right, mid, v });
      if (v >= n) {
        right = mid;
      } else {
        left = mid;
      }
      console.log('after : ', { left, right, mid, v });
      console.log('--------------------------------');
    }

    return right;
  }

  const p = solve();
  console.log('solution 2 : ', p);
}

solution2();
