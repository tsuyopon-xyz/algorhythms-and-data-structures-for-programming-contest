const { FriendGraph } = require('./graph_classes');
// 入力
// const n = 10 // SNSのユーザー数
// const m = 9 // 友達関係の数
const frindPairs = [
  // 自分のID, 相手のID（友達のID）
  [0, 1],
  [0, 2],
  [3, 4],
  [5, 7],
  [5, 6],
  [6, 7],
  [6, 8],
  [7, 8],
  [8, 9],
];
// const q = 3 // 質問の数
const questions = [
  // 始点からスタートして、ターゲットIDまでグラフがつながっているかの質問
  // 始点ID, ターゲットID
  [0, 1],
  [5, 9],
  [1, 3],
];

// 出力
// sからtに辿り着ける場合はyes,そうでない場合はnoと出力

// 制約
// 2 <= n <= 100,000
// 0 <= m <= 100,000
// 1 <= q <= 10,000

// 幅優先探索を使って友人関係を確認
console.log('幅優先探索パターン==============');
questions.forEach(([id1, id2]) => {
  const friendGraph = new FriendGraph(frindPairs);
  const hasConnection = friendGraph.hasConnectionInBreadthFirstSearch(id1, id2);
  if (hasConnection) {
    console.log('yes');
  } else {
    console.log('no');
  }
});

// 深さ優先探索を使って友人関係を確認
console.log('深さ優先探索パターン==============');
questions.forEach(([id1, id2]) => {
  const friendGraph = new FriendGraph(frindPairs);
  const hasConnection = friendGraph.hasConnectionInDepthFirstSearch(id1, id2);
  if (hasConnection) {
    console.log('yes');
  } else {
    console.log('no');
  }
});

// friendGraph.vertices.forEach((v) => {
//   console.log({ id: v.id, adjVertices: v.adjVertices });
// });
