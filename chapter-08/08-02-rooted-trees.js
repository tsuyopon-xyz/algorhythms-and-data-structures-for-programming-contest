class Node {
  static ROOT_ID = 0;
  /**
   *
   * @param {number} id
   * @param {Node} parent
   */
  constructor(id, parent) {
    this.id = id;
    this.parent = parent;

    /**
     * @type {Node|null}
     */
    this.left = null;
    /**
     * @type {Node|null}
     */
    this.right = null;
  }

  getDepth() {
    let parent = this.parent;
    if (!parent) return 0;

    let depth = 1;
    while (parent && parent.id !== Node.ROOT_ID) {
      parent = parent.parent;
      depth++;
    }

    return depth;
  }

  getChildren() {
    if (!this.left) return [];

    const children = [this.left, ...this.left.getSiblings()];

    return children;
  }

  getSiblings(includesMe = false) {
    const siblings = includesMe ? [this] : [];
    if (!this.right) return siblings;

    let nextSibling = this.right;
    while (nextSibling) {
      siblings.push(nextSibling);
      nextSibling = nextSibling.right;
    }

    return siblings;
  }

  getType() {
    if (!this.parent) return 'root';
    if (this.getChildren().length === 0) return 'leaf';

    return 'internal node';
  }

  print() {
    const id = this.id;
    const parentId = this.parent ? this.parent.id : -1;
    const depth = this.getDepth();
    const type = this.getType();
    const childrenIds = this.getChildren().map((node) => node.id);

    console.log(
      `node ${id}: parent = ${parentId}, depth = ${depth}, type = ${type}, children = [${childrenIds}]`
    );
  }
}

// 入力
const n = 13; // ノードの数
const nodeInfoList = [
  // [id, k, c1, c2, ..., ck]
  [0, 3, 1, 4, 10],
  [1, 2, 2, 3],
  [2, 0],
  [3, 0],
  [4, 3, 5, 6, 7],
  [5, 0],
  [6, 0],
  [7, 2, 8, 9],
  [8, 0],
  [9, 0],
  [10, 2, 11, 12],
  [11, 0],
  [12, 0],
];
const nodes = new Array(nodeInfoList.length);

nodeInfoList.forEach(([id, k, ...childNodeIds]) => {
  if (!nodes[id]) nodes[id] = new Node(id);
  if (k === 0) return;

  const parent = nodes[id];

  for (let i = 0; i < k; i++) {
    const currentChildId = childNodeIds[i];
    const prevChildId = childNodeIds[i - 1] ?? null;

    if (!nodes[currentChildId]) {
      nodes[currentChildId] = new Node(currentChildId, parent);
    }

    if (prevChildId === null) {
      nodes[id].left = nodes[currentChildId];
    } else {
      nodes[prevChildId].right = nodes[currentChildId];
    }
  }
});

nodes.forEach((n) => n.print());
