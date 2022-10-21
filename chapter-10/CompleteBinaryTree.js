const { Node } = require('./Node');

class CompleteBinaryTree {
  static START_INDEX = 1;

  constructor() {
    // 1オリジンでNodeの配列を保持するため、
    // インデックス番号0番目の領域をあらかじめ埋める
    // this.nodes = [null];
    this.nodes = [null];
  }

  size() {
    return this.nodes.length - CompleteBinaryTree.START_INDEX;
  }

  getMaxIndexWithChild() {
    return this.size() / 2;
  }

  swapNode(node1, node2) {
    const indexForNode1 = this.nodes.findIndex((n) => n === node1);
    const indexForNode2 = this.nodes.findIndex((n) => n === node2);

    this.nodes[indexForNode1] = node2;
    this.nodes[indexForNode2] = node1;
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

  buildMaxHeap() {
    const maxIndexWithChild = this.getMaxIndexWithChild();
    for (let i = maxIndexWithChild; i >= CompleteBinaryTree.START_INDEX; i--) {
      this.maxHeapify(i);
    }
  }

  buildMinHeap() {
    const maxIndexWithChild = this.getMaxIndexWithChild();
    for (let i = maxIndexWithChild; i >= CompleteBinaryTree.START_INDEX; i--) {
      this.minHeapify(i);
    }
  }

  /**
   *
   * @param {number} index
   */
  maxHeapify(index) {
    if (
      index < CompleteBinaryTree.START_INDEX ||
      this.getMaxIndexWithChild() < index
    ) {
      return;
    }
    const l = index * 2;
    const r = index * 2 + 1;
    const targetNode = this.nodes[index];
    const leftNode = this.nodes[l];
    const rightNode = this.nodes[r];

    let largestNode;
    let largestIndex;
    if (targetNode.key > leftNode.key) {
      largestNode = targetNode;
      largestIndex = index;
    } else {
      largestNode = leftNode;
      largestIndex = l;
    }

    if (rightNode && rightNode.key > largestNode.key) {
      largestNode = rightNode;
      largestIndex = r;
    }

    if (largestNode !== targetNode) {
      [targetNode.key, largestNode.key] = [largestNode.key, targetNode.key];
      this.maxHeapify(largestIndex);
    }
  }

  /**
   *
   * @param {number} index
   */
  minHeapify(index) {
    if (
      index < CompleteBinaryTree.START_INDEX ||
      this.getMaxIndexWithChild() < index
    ) {
      return;
    }
    const l = index * 2;
    const r = index * 2 + 1;
    const targetNode = this.nodes[index];
    const leftNode = this.nodes[l];
    const rightNode = this.nodes[r];

    let smallestNode;
    let smallestIndex;
    if (targetNode.key < leftNode.key) {
      smallestNode = targetNode;
      smallestIndex = index;
    } else {
      smallestNode = leftNode;
      smallestIndex = l;
    }

    if (rightNode && rightNode.key < smallestNode.key) {
      smallestNode = rightNode;
      smallestIndex = r;
    }

    if (smallestNode !== targetNode) {
      [targetNode.key, smallestNode.key] = [smallestNode.key, targetNode.key];
      this.minHeapify(smallestIndex);
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

  printKeys() {
    const keys = this.nodes.filter((n) => n).map((n) => n.key);
    console.log(keys);
  }
}

exports.CompleteBinaryTree = CompleteBinaryTree;
