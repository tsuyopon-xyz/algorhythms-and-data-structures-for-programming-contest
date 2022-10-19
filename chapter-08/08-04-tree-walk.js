const { BinaryTree } = require('./BinaryTree');

// 入力
// const n = 9;
const nodeInfoList = [
  // [id, left, right], `-1` means the node does not exist.
  [0, 1, 4],
  [1, 2, 3],
  [2, -1, -1],
  [3, -1, -1],
  [4, 5, 8],
  [5, 6, 7],
  [6, -1, -1],
  [7, -1, -1],
  [8, -1, -1],
];

// 出力
// Preorder : 0, 1, 2, 3, 4, 5, 6, 7, 8
// Inorder  : 2, 1, 3, 0, 6, 5, 7, 4, 8
// Preorder : 2, 3, 1, 6, 7, 5, 8, 4, 0

const bTree = new BinaryTree(nodeInfoList);
// bTree.print();
console.log('preParse');
bTree.preParse(0);
console.log('inParse');
bTree.inParse(0);
console.log('postParse');
bTree.postParse(0);
