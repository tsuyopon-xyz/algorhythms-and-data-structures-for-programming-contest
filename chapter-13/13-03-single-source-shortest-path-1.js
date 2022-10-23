const { SingleSourceShortestPath1 } = require('./graph_classes');

// 入力
// const n = 5 // 重み付き有向グラフGの頂点数
const matrixForAdjVertexInfoWithWeight = [
  // u,k, v1, c1, v2, c2, ..., vk, ck
  // 頂点番号(u), 出次数(k), v1(隣接する頂点の番号), 有向辺の重み
  [0, 3, 2, 3, 3, 1, 1, 2],
  [1, 2, 0, 2, 3, 4],
  [2, 3, 0, 3, 3, 1, 4, 1],
  [3, 4, 2, 1, 0, 1, 1, 4, 4, 3],
  [4, 2, 2, 1, 3, 3],
];

// 出力
// 各頂点の番号vと距離d[v]を出力する
// 0, 0
// 1, 2
// 2, 2,
// 3, 1,
// 4, 3

// 制約
// 1 <= n <= 100
// 0 <= ci <= 100,000
// 0から各頂点へは必ず経路が存在する

const instance = new SingleSourceShortestPath1(
  matrixForAdjVertexInfoWithWeight
);
instance.dijkstra(0);
instance.displayRoutesForAllVertices();
