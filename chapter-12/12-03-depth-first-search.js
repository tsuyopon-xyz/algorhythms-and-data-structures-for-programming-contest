const { AdjVertextInfo, Graph } = require('./graph_classes');

// 入力
// const n = ? // 頂点の数

// 隣接リスト表現形式
// u, k, v1, v2, ... vk（uに隣接する頂点の番号）
// （頂点の番号）, （uの出次数）, （uに隣接する頂点の番号）...
const adjVertextInfoList = [
  [1, 2, 2, 3],
  [2, 2, 3, 4],
  [3, 1, 5],
  [4, 1, 6],
  [5, 1, 6],
  [6, 0],
].map(([u, k, ...vList]) => {
  return new AdjVertextInfo(u, k, vList);
});

// 出力
// id, d, f
// （頂点番号）, （最初に訪問した発見時刻）,（vの隣接リストを調べ終えた完了時刻）
// 1 1 12
// 2 2 11
// 3 3 8
// 4 9 10
// 5 4 7
// 6 5 6

// 制約
// 1 <= n <= 100

const graphMap = new Graph(adjVertextInfoList);
graphMap.depthFirstSearch();
graphMap.printForDepthFirstSearch();
