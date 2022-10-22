class AdjVertextInfo {
  /**
   *
   * @param {number} u
   * @param {number} k
   * @param {number[]} vList
   */
  constructor(u, k, vList) {
    this.u = u;
    this.k = k;
    this.vList = vList;
  }
}

class Vertex {
  static STATE_COLOR_MAP = {
    NOT_VISIT: 'WHITE',
    IN_STACK: 'GRAY',
    COMPLETE: 'BLACK',
  };

  /**
   *
   * @param {number} id
   * @param {Vertex[]} adjVertices
   */
  constructor(id, adjVertices) {
    this.id = id;
    this.adjVertices = adjVertices ?? [];
    this.color = Vertex.STATE_COLOR_MAP.NOT_VISIT;
    this.firstVisitCount = 0; // 何回目の訪問で初めてきたかを記録する（例: 3回目の探索で初めて訪れた場合は3が入る）
    this.completeCount = 0; // 未訪問の隣接する頂点がなくなった時点のカウントを記録する
  }

  /**
   *
   * @param {Vertex[]} adjVertices
   */
  setAdjVertices(adjVertices) {
    if (!Array.isArray(adjVertices) || adjVertices.length === 0) return;

    this.adjVertices = adjVertices;
  }

  nextVertextToVisit() {
    return this.adjVertices.find((v) => {
      return v.color === Vertex.STATE_COLOR_MAP.NOT_VISIT;
    });
  }

  visit(count) {
    if (this.color === Vertex.STATE_COLOR_MAP.NOT_VISIT) {
      this.firstVisitCount = count;
    }
    this.color = Vertex.STATE_COLOR_MAP.IN_STACK;
  }

  complete(count) {
    if (this.completeCount === 0) {
      this.completeCount = count;
    }
    this.color = Vertex.STATE_COLOR_MAP.COMPLETE;
  }

  isVisited() {
    return this.color !== Vertex.STATE_COLOR_MAP.NOT_VISIT;
  }
}

class GraphMap {
  /**
   *
   * @param {AdjVertextInfo[]} adjVertextInfoList
   */
  constructor(adjVertextInfoList) {
    /**
     * @type {Record<number, Vertex>}
     */
    const memo = {};

    this.vertices = adjVertextInfoList.map((adjVertextInfo) => {
      const id = adjVertextInfo.u;
      if (!memo[id]) {
        memo[id] = new Vertex(id);
      }
      const vertex = memo[id];

      const adjVertices = adjVertextInfo.vList.map((adjVId) => {
        if (!memo[adjVId]) {
          memo[adjVId] = new Vertex(adjVId);
        }

        return memo[adjVId];
      });

      vertex.setAdjVertices(adjVertices);

      return vertex;
    });

    /**
     * @type {Vertex[]}
     */
    this.stack = [];
  }

  depthFirstSearch() {
    const startVertex = this.vertices[0];
    this.stack.push(startVertex);
    let count = 0;

    while (this.stack.length > 0) {
      const lastIndex = this.stack.length - 1;
      const currentVertex = this.stack[lastIndex];
      if (!currentVertex.isVisited()) {
        count++;
        currentVertex.visit(count);
      }

      const nextVertex = currentVertex.nextVertextToVisit();
      if (nextVertex) {
        this.stack.push(nextVertex);
      } else {
        count++;
        currentVertex.complete(count);
        this.stack.pop();
      }
    }
  }

  print() {
    this.vertices.forEach((v) => {
      console.log(`${v.id} ${v.firstVisitCount} ${v.completeCount}`);
    });
  }
}

// 入力
// const n = ? // 頂点の数

// 隣接リスト表現形式
// u, k, v1, v2, ... vk（uに隣接する頂点の番号）
// （頂点の番号）, （uの出次数）, （uに隣接する頂点の番号）...
const adjVertextInfoList = [
  [1, 2, 2, 3],
  [2, 2, 3, 4],
  [3, 1, 5],
  [4, 1, 6],
  [5, 1, 6],
  [6, 0],
].map(([u, k, ...vList]) => {
  return new AdjVertextInfo(u, k, vList);
});

// 出力
// id, d, f
// （頂点番号）, （最初に訪問した発見時刻）,（vの隣接リストを調べ終えた完了時刻）
// 1 1 2
// 2 2 11
// 3 3 8
// 4 9 10
// 5 4 7
// 6 5 6

// 制約
// 1 <= n <= 100

const graphMap = new GraphMap(adjVertextInfoList);
graphMap.depthFirstSearch();
graphMap.print();
