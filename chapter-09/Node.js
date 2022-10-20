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

  // delete(key) {
  //   let y; // 削除する対象
  //   let x; // yの子

  //   const targetNode = this.find(key);
  //   if (!targetNode.left || !targetNode.right) {
  //     y = targetNode;
  //   } else {
  //     // Successor : 後継者
  //     y = this.getSuccessor(targetNode);
  //   }

  //   if (y.left) {
  //     x = y.left;
  //   } else {
  //     x = y.right;
  //   }

  //   if (x) {
  //     x.parent = y.parent;
  //   }
  //   if (!y.parent) {
  //     this.root = x;
  //   } else {
  //     if (y === y.parent.left) {
  //       y.parent.left = x;
  //     } else {
  //       y.parent.right = x;
  //     }
  //   }

  //   if (y !== targetNode) {
  //     targetNode.key = y.key;
  //   }

  //   y = null;
  // }

  // getSuccessor(node) {
  //   if (!node.right) {
  //     return this.treeMinimum(node);
  //   }

  //   let y = node.parent;
  //   while (y && node === y.right) {
  //     node = y;
  //     y = y.parent;
  //   }

  //   return y;
  // }

  treeMinimum(node) {
    while (node.left) {
      node = node.left;
    }

    return node;
  }

  delete(key) {
    const targetToDelete = this.find(key);
    if (!targetToDelete) return;

    const left = targetToDelete.left;
    const right = targetToDelete.right;

    if (!left && !right) {
      this._deleteNodeWithoutChild(targetToDelete);
      return;
    }

    if (!left || !right) {
      this._deleteNodeWithOneChild(targetToDelete, left, right);
      return;
    }

    this._deleteNodeWithTwoChild(targetToDelete, left, right);
  }

  _deleteNodeWithoutChild(node) {
    console.log('_deleteNodeWithOneChild', node);
    const parent = node.parent;
    if (!parent) {
      node = null;
      return;
    }

    if (parent.left === node) {
      parent.left = null;
    } else if (parent.right === node) {
      parent.right = null;
    }

    node = null;
  }

  _deleteNodeWithOneChild(node, left, right) {
    const parent = node.parent;
    if (!parent) {
      this.root = left || right;
      node = null;
      return;
    }

    if (parent.left === node) {
      parent.left = left || right;
    } else if (parent.right === node) {
      parent.right = left || right;
    }

    if (left) {
      left.parent = parent;
    } else if (right) {
      right.parent = parent;
    }

    node = null;
  }

  _deleteNodeWithTwoChild(node, _left, right) {
    let rightMinimumNode = this.treeMinimum(right);

    if (rightMinimumNode.right) {
      rightMinimumNode.right.parent = rightMinimumNode.parent;
    }

    if (rightMinimumNode.parent.left === rightMinimumNode) {
      rightMinimumNode.parent.left = rightMinimumNode.right;
    } else {
      rightMinimumNode.parent.right = rightMinimumNode.right;
    }

    node.key = rightMinimumNode.key;
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
