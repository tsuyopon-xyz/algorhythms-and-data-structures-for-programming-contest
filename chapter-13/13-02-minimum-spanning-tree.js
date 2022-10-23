const { Vertex, MinimumSpanningTree } = require('./graph_classes');

// 最小全域木

// 入力
// const n = 5 // グラフGの頂点数

//  Gを表す「n*n」の隣接行列
// a[i][j]は頂点iと頂点jを結ぶ辺の重みを表す。
// ただし、変がなければ-1で示される
const a = [
  [-1, 2, 3, 1, -1],
  [2, -1, -1, 4, -1],
  [3, -1, -1, 1, 1],
  [1, 4, 1, -1, 3],
  [-1, -1, 1, 3, -1],
];

// 出力
// Gの最小全域木の辺の重みの総和を1行出力する
// Output: 5

// 制約
// 1 <= n <= 100
// 0 <= a[i][j] <= 2,000(ail !== -1のとき)
// a[i][j] = a[j][i]
// グラフGは連結である

const mst = new MinimumSpanningTree(a);
mst.prim();
