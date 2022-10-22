// 入力
// const n = ? // 頂点数

// 形式: u（頂点の番号）, k（uの出次数）, v1, v2, ... vk（uに隣接する頂点の番号）
const vertextList = [
  [1, 2, 2, 4],
  [2, 1, 4],
  [3, 0],
  [4, 1, 3],
];

// 出力
// Output: Gの隣接行列を出力する
// 0 1 0 1
// 0 0 0 1
// 0 0 0 1
// 0 0 1 0

// 制約
// 1 <= n <= 100

// |V| * |V| の行列
// 今回の例だと頂点は4個あるため、4*4の行列になる
const vSize = vertextList.length;
const adjMatrixTable = Array.from({ length: vSize }).map((_) => {
  return new Array(vSize).fill(0);
});

vertextList.forEach((adjV) => {
  const [u, k, ...vList] = adjV;
  const uIndex = u - 1;
  for (let i = 0; i < vList.length; i++) {
    const vIndex = vList[i] - 1;
    adjMatrixTable[uIndex][vIndex] = 1;
  }
});

adjMatrixTable.forEach((row) => console.log(row));
