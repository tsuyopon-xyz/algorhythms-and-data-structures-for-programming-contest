const { Node } = require('./Node');
const { CompleteBinaryTree } = require('./CompleteBinaryTree');

// 入力
// const H = 5;
const keys = [7, 8, 1, 2, 3];

// 出力
// 以下の形式で先頭から末尾のノード情報を出力する
// node 1: key = ${7}, left key = ${8}, right key = ${1}
// node 2: ...
// ...

// 制約
// H <= 250
// -2,000,000,000 <= key <= 2,000,000,000

const tree = new CompleteBinaryTree();
keys.forEach((k) => {
  const node = new Node(k);
  tree.insert(node);
});
tree.createRelationsNodes();
tree.print();
