const { Node } = require('./Node');

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

// 再帰的にrootからの深さを求めて、木の高さを取得する
function getHeightOfTree(node, d) {
  const left = node.left;
  const right = node.right;
  console.log({
    current: node.id,
    left: left ? left.id : null,
    right: right ? right.id : null,
    d,
  });

  const d1 = left ? getHeightOfTree(left, d + 1) : d;
  const d2 = right ? getHeightOfTree(right, d) : d;

  return Math.max(d1, d2);
}

const height = getHeightOfTree(nodes[0], 0);
console.log('Height of tree : ', height);
