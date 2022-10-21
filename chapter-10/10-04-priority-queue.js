const { Node } = require('./Node');
const { CompleteBinaryTree } = require('./CompleteBinaryTree');

const COMMAND_MAP = {
  INSERT: 'insert',
  EXTRACT: 'extract',
  END: 'end',
};
// 入力
const actions = [
  {
    command: COMMAND_MAP.INSERT,
    key: 8,
  },
  {
    command: COMMAND_MAP.INSERT,
    key: 2,
  },
  {
    command: COMMAND_MAP.EXTRACT,
  },
  {
    command: COMMAND_MAP.INSERT,
    key: 10,
  },
  {
    command: COMMAND_MAP.EXTRACT,
  },
  {
    command: COMMAND_MAP.INSERT,
    key: 11,
  },
  {
    command: COMMAND_MAP.INSERT,
    key: 1,
  },
  {
    command: COMMAND_MAP.EXTRACT,
  },
  {
    command: COMMAND_MAP.EXTRACT,
  },
  {
    command: COMMAND_MAP.EXTRACT,
  },
  {
    command: COMMAND_MAP.EXTRACT,
  },
  {
    command: COMMAND_MAP.END,
  },
];

// 出力
// Output: 8, 10, 11, 2

// 制約
// 命令数 <= 2,000,000
// 0 <= key <= 2,000,000,000

const tree = new CompleteBinaryTree();
actions.forEach((a) => {
  if (a.command === COMMAND_MAP.INSERT) {
    const node = new Node(a.key);
    tree.insertWithMaxHeap(node);
    console.log('=====insert=====');
    console.log(a.key);
  } else if (a.command === COMMAND_MAP.EXTRACT) {
    const node = tree.extract();
    console.log('=====extract=====');
    if (node) {
      console.log(node.key);
    } else {
      console.log('queue is empty');
    }
  } else if (a.command === COMMAND_MAP.END) {
    console.log('=====end=====');
  } else {
    throw new Error(`Unknown command is called : ${a.command}`);
  }
  tree.print();
});
// tree.buildMaxHeap();
// tree.buildMinHeap();
// tree.printKeys();
