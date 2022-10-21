const { Node } = require('./Node');
const { CompleteBinaryTree } = require('./CompleteBinaryTree');

// 入力
// const H = 10;
const keys = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

// 出力
// Output: 16, 14, 10, 8, 7, 9, 3, 2, 4, 1

// 制約
// 1 <= H <= 500,000
// -2,000,000,000 <= ノードの値（key） <= 2,000,000,000

const tree = new CompleteBinaryTree();
keys.forEach((k) => {
  const node = new Node(k);
  tree.insert(node);
});
// tree.createRelationsNodes();
tree.buildMaxHeap();
// tree.print();
tree.printKeys();
