const { AdjVertextInfo, Graph, Vertex } = require('./graph_classes');

// 入力
// const n = ? // 頂点の数
const adjVertextInfoList = [
  [1, 2, 2, 4],
  [2, 1, 4],
  [3, 0],
  [4, 1, 3],
].map(([u, k, ...vList]) => {
  return new AdjVertextInfo(u, k, vList);
});

// 出力
// 頂点の番号, 頂点1からの最短距離
// 1,        0
// 2,        1
// 3,        2
// 4,        1

// 制約
// 1 <= n <= 100

const graph = new Graph(adjVertextInfoList);
graph.breadthFirstSearch();
graph.printForBreadthFirstSearch();
