const { Node, BinarySearchTree } = require('./Node');

const actions = [
  {
    command: 'insert',
    key: 8,
  },
  {
    command: 'insert',
    key: 2,
  },
  {
    command: 'insert',
    key: 3,
  },
  {
    command: 'insert',
    key: 7,
  },
  {
    command: 'insert',
    key: 22,
  },
  {
    command: 'insert',
    key: 1,
  },
  {
    command: 'find',
    key: 1,
  },
  {
    command: 'find',
    key: 2,
  },
  {
    command: 'find',
    key: 3,
  },
  {
    command: 'find',
    key: 4,
  },
  {
    command: 'find',
    key: 5,
  },
  {
    command: 'find',
    key: 6,
  },
  {
    command: 'find',
    key: 7,
  },
  {
    command: 'find',
    key: 8,
  },
  {
    command: 'print',
    key: undefined,
  },
  {
    command: 'delete',
    key: 3,
  },
  {
    command: 'delete',
    key: 7,
  },
  {
    command: 'print',
    key: undefined,
  },
];

const bsTree = new BinarySearchTree();
actions.forEach((a) => {
  if (a.command === 'insert') {
    bsTree.insert(new Node(a.key));
  } else if (a.command === 'find') {
    const node = bsTree.find(a.key);
    node ? console.log('yes') : console.log('no');
  } else if (a.command === 'delete') {
    // bsTree.delete(a.key);
  } else if (a.command === 'print') {
    const prepersedArray = bsTree.preParse();
    const inParsedArray = bsTree.inParse();

    console.log({
      prepersedArray,
      inParsedArray,
    });
  }
});
