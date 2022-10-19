const { Node, BinarySearchTree } = require('./Node');

const actions = [
  {
    command: 'insert',
    key: 30,
  },
  {
    command: 'insert',
    key: 88,
  },
  {
    command: 'insert',
    key: 12,
  },
  {
    command: 'insert',
    key: 1,
  },
  {
    command: 'insert',
    key: 20,
  },
  {
    command: 'find',
    key: 12,
  },
  {
    command: 'insert',
    key: 17,
  },
  {
    command: 'insert',
    key: 25,
  },
  {
    command: 'find',
    key: 16,
  },
];

const bsTree = new BinarySearchTree();
actions.forEach((a) => {
  if (a.command === 'insert') {
    bsTree.insert(new Node(a.key));
  } else if (a.command === 'find') {
    const node = bsTree.find(a.key);
    node ? console.log('yes') : console.log('no');
  } else {
    throw new Error(`Unkonw action is called : ${a.actions}`);
  }
});
