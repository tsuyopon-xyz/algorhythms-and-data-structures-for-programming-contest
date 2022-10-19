class Node {
  constructor(v) {
    this.key = v;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  print() {
    console.log({
      key: this.key,
      parent: this.parent ? this.parent.key : null,
      left: this.left ? this.left.key : null,
      right: this.right ? this.right.key : null,
      type: this.getType(),
    });
  }

  getType() {
    if (!this.parent) return 'root';
    if (this.left || this.right) return 'internal node';
    return 'leaf';
  }
}

class BinarySearchTree {
  /**
   *
   * @param {Node | null} rootNode
   */
  constructor(rootNode) {
    this.root = rootNode;
  }

  /**
   *
   * @param {Node} node
   */
  insert(node) {
    if (!this.root) {
      this.root = node;
      return;
    }

    let x = this.root;
    let y;
    while (x) {
      y = x;
      if (node.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    node.parent = y;

    if (node.key < y.key) {
      y.left = node;
    } else {
      y.right = node;
    }
  }

  find(key, node = this.root) {
    if (!node) return null;
    if (node.key === key) return node;

    if (key < node.key) {
      return this.find(key, node.left);
    } else {
      return this.find(key, node.right);
    }
  }

  preParse(node = this.root, array = []) {
    if (!node) return;

    const left = node.left;
    const right = node.right;

    // console.log(node.key);
    array.push(node.key);
    if (left) this.preParse(left, array);
    if (right) this.preParse(right, array);

    return array;
  }

  inParse(node = this.root, array = []) {
    if (!node) return;

    const left = node.left;
    const right = node.right;

    if (left) this.inParse(left, array);
    // console.log(node.key);
    array.push(node.key);
    if (right) this.inParse(right, array);

    return array;
  }
}

exports.Node = Node;
exports.BinarySearchTree = BinarySearchTree;
