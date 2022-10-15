const n = 5; // 荷物の数
const w = [8, 1, 7, 3, 9]; // 各荷物の重さ
const k = 3; // トラック台数

// O(Pn)の計算量
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
    if (v < n) {
      p++;
    }
  }
  console.log(p);
}

solution1();
