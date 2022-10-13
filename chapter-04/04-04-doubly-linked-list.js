class DoublyLinkedList {}

class Node {
  /**
   *
   * @param {number | null} value Integer
   * @param {Node | null} prev
   * @param {Node | null} next
   */
  constructor() {
    this.key = null;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.bampei = new Node();
    this.bampei.prev = this.bampei;
    this.bampei.next = this.bampei;
  }

  /**
   *
   * @param {number} key
   */
  insert(key) {
    const newNode = new Node();
    newNode.key = key;

    newNode.next = this.bampei.next;
    this.bampei.next.prev = newNode;

    newNode.prev = this.bampei;
    this.bampei.next = newNode;
  }

  /**
   *
   * @param {number} key
   * @returns {Node | null}
   */
  search(key) {
    let current = this.bampei.next;
    while (current !== this.bampei && current.key !== key) {
      current = current.next;
    }

    if (current === this.bampei) return null;

    return current;
  }

  append(key) {
    let lastNode = this.bampei;
    while (lastNode.next !== this.bampei) {
      lastNode = lastNode.next;
    }

    const newNode = new Node();
    newNode.key = key;

    newNode.next = lastNode.next;
    lastNode.next.prev = newNode;

    newNode.prev = lastNode;
    lastNode.next = newNode;
  }

  /**
   *
   * @param {Node} node
   */
  delete(node) {
    if (node === this.bampei) {
      throw new Error('List is empty except for bampei.');
    }
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  deleteFirst() {
    const node = this.bampei.next;
    this.delete(node);
  }

  deleteLast() {
    const node = this.bampei.prev;
    this.delete(node);
  }

  deleteByKey(key) {
    const node = this.search(key);
    if (!node) {
      throw new Error(`Node with key:${key} is not found in linked list.`);
    }

    this.delete(node);
  }
}

const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);

// linkedList.deleteFirst();
// linkedList.deleteByKey(3);
// console.log(linkedList.bampei);
console.log(linkedList.search(3));
