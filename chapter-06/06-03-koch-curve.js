/**
 *
 * @param {Point} p1
 * @param {Point} p2
 * @returns {Array<Point>} p1, p2を3等分した点[s, t]を返す（要素数2個の配列）
 */
function calc2Points(p1, p2) {
  const s = new Point((2 * p1.x + 1 * p2.x) / 3, (2 * p1.y + 1 * p2.y) / 3);

  const t = new Point((1 * p1.x + 2 * p2.x) / 3, (1 * p1.y + 2 * p2.y) / 3);

  return [s, t];
}

/**
 *
 * @param {Point} s
 * @param {Point} t
 * @returns {Point}
 */
function calcPointForU(s, t) {
  return new Point(
    (t.x - s.x) * Math.cos(Math.PI / 3) -
      (t.y - s.y) * Math.sin(Math.PI / 3) +
      s.x,
    (t.x - s.x) * Math.sin(Math.PI / 3) +
      (t.y - s.y) * Math.cos(Math.PI / 3) +
      s.y
  );
}

class Point {
  /**
   *
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  value() {
    return {
      x: this.x,
      y: this.y,
    };
  }
}

/**
 *
 * @param {number} n 深さ
 * @param {Point} p1
 * @param {Point} p2
 * @param {Array<Point>}
 */
function koch(n, a, b, inputContainer) {
  if (n === 0) return;

  const [s, t] = calc2Points(a, b);
  const u = calcPointForU(s, t);
  koch(n - 1, a, s, inputContainer);
  koch(n - 1, s, u, inputContainer);
  koch(n - 1, u, t, inputContainer);
  koch(n - 1, t, b, inputContainer);

  inputContainer.push([a.value(), s.value(), u.value(), t.value(), b.value()]);
  // console.log([a.value(), s.value(), u.value(), t.value(), b.value()]);
}

// 入力
const N = 6; //深さ

// 出力
// - コッホ曲線の各頂点の座標（x, y）を出力する
// - 1行に1点の座標を出力する
// - 端点の1つ(0, 0)から開始し、一方の端点(100, 0)で終えるひとつづきの線分の列となる順番に出力する
// - 出力は0.0001以下の誤差を含んでいても良いものとする

// 制約
// 0 <= n <= 6

function solution(n = N) {
  const p1 = new Point(0.0, 10.0);
  const p2 = new Point(3000.0, 10.0);
  const inputContainer = [];

  koch(n, p1, p2, inputContainer);

  // console.log(inputContainer);
  return inputContainer;
}

// solution(4);
