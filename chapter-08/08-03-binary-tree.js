const { BinaryTree } = require('./BinaryTree');
// class Node {
//   /**
//    *
//    * @param {number} id
//    */
//   constructor(id) {
//     this.id = id;
//     this._parent = null;
//     this._left = null;
//     this._right = null;
//   }

//   /**
//    *
//    * @param {Node | null} node
//    */
//   setParent(node) {
//     this._parent = node;
//   }

//   /**
//    *
//    * @param {Node | null} node
//    */
//   setLeft(node) {
//     this._left = node;
//   }

//   /**
//    *
//    * @param {Node | null} node
//    */
//   setRight(node) {
//     this._right = node;
//   }

//   getDegree() {
//     if (this._left && this._right) return 2;
//     if (this._left && !this._right) return 1;
//     if (!this._left && this._right) return 1;

//     return 0;
//   }

//   getType() {
//     if (!this._parent) return 'root';
//     if (this.getDegree() > 0) return 'internal node';

//     return 'leaf';
//   }

//   getSibling() {
//     if (!this._parent) return null;

//     if (this._parent._left === this) {
//       return this._parent._right;
//     }

//     return this._parent._left;
//   }

//   getDepth(depth = 0) {
//     if (!this._parent) return depth;

//     return this._parent.getDepth(depth + 1);
//   }

//   getHeight(depth = 0) {
//     const left = this._left;
//     const right = this._right;

//     const d1 = left ? left.getHeight(depth + 1) : depth;
//     const d2 = right ? right.getHeight(depth + 1) : depth;

//     return Math.max(d1, d2);
//   }

//   print() {
//     const id = this.id;
//     const parentId = this._parent ? this._parent.id : null;
//     const sibling = this.getSibling();
//     const siblingId = sibling ? sibling.id : null;
//     const deg = this.getDegree();
//     const dep = this.getDepth();
//     const height = this.getHeight();
//     const type = this.getType();

//     console.log(
//       `node ${id}: parent = ${parentId}, siblings = ${siblingId}, degree = ${deg}, depth = ${dep}, height = ${height}, type = ${type}`
//     );
//   }
// }

// 入力
// const n = 9; // ノードの数
// const nodeInfoList = [
//   // [id, left, right], `-1` means the node does not exist.
//   [0, 1, 4],
//   [1, 2, 3],
//   [2, -1, -1],
//   [3, -1, -1],
//   [4, 5, 8],
//   [5, 6, 7],
//   [6, -1, -1],
//   [7, -1, -1],
//   [8, -1, -1],
// ];

// 出力
// node {id}: parent = {p}, siblings = {s}, degree = {deg}, depth = {dep}, height = {h}, type = {type}
// ...

// 制約
// 1 <= n <= 25

// const nodes = new Array(nodeInfoList.length);

// function createNode(id) {
//   if (id === -1) return null;

//   nodes[id] = nodes[id] ? nodes[id] : new Node(id);

//   return nodes[id];
// }

// nodeInfoList.forEach(([id, left, right], i) => {
//   const parentNode = createNode(id);
//   const leftNode = createNode(left);
//   const rightNode = createNode(right);

//   parentNode.setLeft(leftNode);
//   parentNode.setRight(rightNode);
//   if (leftNode) leftNode.setParent(parentNode);
//   if (rightNode) rightNode.setParent(parentNode);
// });

// nodes.forEach((n) => n.print());

const bTree = new BinaryTree();
bTree.print();
