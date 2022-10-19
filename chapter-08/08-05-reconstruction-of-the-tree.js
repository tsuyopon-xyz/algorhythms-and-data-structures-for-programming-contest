// 入力
// const n = 5;
// const preArray = [1, 2, 3, 4, 5];
// const inArray = [3, 2, 4, 1, 5];

const preArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const inArray = [3, 2, 5, 4, 6, 1, 8, 7, 9];
const postArray = [];

// 出力
// outputOfPostParse [3,4,2,5,1]

// 制約
// 1 <= n <= 100

let prePosition = 0;
function current() {
  return preArray[prePosition];
}

function next() {
  prePosition++;
  return current();
}

function getIndexIn(v) {
  return inArray.findIndex((_v) => _v === v);
}

function reconstruction(l, r) {
  if (l >= r) return;

  const root = current();
  const indexIn = getIndexIn(root);
  next();
  reconstruction(l, indexIn); // left
  reconstruction(indexIn + 1, r); // right

  // console.log(root);
  postArray.push(root);
}

function solution() {
  const l = 0;
  const r = preArray.length;
  reconstruction(l, r);
  console.log('postArray : ', postArray);
}

solution();
