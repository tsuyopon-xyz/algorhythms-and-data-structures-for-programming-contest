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

exports.Node = Node;
