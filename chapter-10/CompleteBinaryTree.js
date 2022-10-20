const { Node } = require('./Node');

class CompleteBinaryTree {
  static START_INDEX = 1;

  constructor() {
    // 1オリジンでNodeの配列を保持するため、
    // インデックス番号0番目の領域をあらかじめ埋める
    this.nodes = [null];
  }

  size() {
    return this.nodes.length;
  }

  /**
   *
   * @param {Node} node
   */
  insert(node) {
    this.nodes.push(node);
  }

  createRelationsNodes() {
    if (this.nodes.length === 0) return;

    for (let i = CompleteBinaryTree.START_INDEX; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const parent = this.nodes[Math.floor(i / 2)] ?? null;
      const left = this.nodes[Math.floor(i * 2)] ?? null;
      const right = this.nodes[Math.floor(i * 2 + 1)] ?? null;

      node.parent = parent;
      node.left = left;
      node.right = right;
    }
  }

  print() {
    if (this.nodes.length === 0) return;

    for (let i = CompleteBinaryTree.START_INDEX; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const id = i;
      const key = node.key;
      const parentKey = node.parent ? node.parent.key : null;
      const leftKey = node.left ? node.left.key : null;
      const rightKey = node.right ? node.right.key : null;
      console.log(
        `node ${id}: key = ${key}, parent key = ${parentKey}, left key = ${leftKey}, right key = ${rightKey}`
      );
    }
  }
}

exports.CompleteBinaryTree = CompleteBinaryTree;
