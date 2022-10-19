const { Node, BinarySearchTree } = require('./Node');

const bsTree = new BinarySearchTree();
const keys = [30, 88, 12, 1, 20, 17, 25];
const nodes = keys.map((key) => new Node(key));

nodes.forEach((n) => bsTree.insert(n));
// nodes.forEach((n) => n.print());
const inpersedArray = bsTree.inParse();
const preParsedArray = bsTree.preParse();
console.log({ inpersedArray, preParsedArray });
