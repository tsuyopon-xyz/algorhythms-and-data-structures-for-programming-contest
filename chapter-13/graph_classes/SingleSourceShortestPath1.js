const { Vertex } = require('./Vertex');

class SingleSourceShortestPath1 {
  /**
   *
   * @param {number[][]} matrixForAdjVertexInfoWithWeight u,k, v1, c1, v2, c2, ..., vk, ck(頂点番号(u), 出次数(k), v1(隣接する頂点の番号), 有向辺の重み)
   */
  constructor(matrixForAdjVertexInfoWithWeight) {
    this.vertices = matrixForAdjVertexInfoWithWeight.map((_, i) => {
      const vertex = new Vertex(i);
      vertex.setWeight(Number.POSITIVE_INFINITY);
      return vertex;
    });
    this.matrixTableOfWeight = this.buildMatrixTable(
      matrixForAdjVertexInfoWithWeight
    );

    /**
     * @type {Vertex[]}
     */
    this.S = [];
  }

  /**
   *
   * @param {number[][]} matrixForAdjVertexInfoWithWeight u,k, v1, c1, v2, c2, ..., vk, ck(頂点番号(u), 出次数(k), v1(隣接する頂点の番号), 有向辺の重み)
   * @return {number[][]}
   */
  buildMatrixTable(matrixForAdjVertexInfoWithWeight) {
    const n = matrixForAdjVertexInfoWithWeight.length;
    const matrix = Array.from({ length: n }).map((_, i) => {
      // const array = [];
      const array = new Array(matrixForAdjVertexInfoWithWeight.length).fill(
        Number.POSITIVE_INFINITY
      );

      const [_u, _k, ...rest] = matrixForAdjVertexInfoWithWeight[i];
      const vcList = [];
      for (let j = 0; j < rest.length / 2; j++) {
        const index = j * 2;
        const v = rest[index];
        const c = rest[index + 1];
        vcList.push([v, c]);
      }

      for (let j = 0; j < vcList.length; j++) {
        const [v, c] = vcList[j];
        array[v] = c;
      }

      return array;
    });

    return matrix;
  }

  dijkstra(startId = 0) {
    this.resetS();

    const startVertex = this.vertices.find((v) => v.id === startId);
    if (!startVertex) {
      const validIds = this.vertices.map((v) => v.id);
      throw new Error(
        `Invalid id ${startId}. (You can set one of [${validIds}])`
      );
    }

    startVertex.setWeight(0);
    startVertex.complete();
    this.S.push(startVertex);

    while (this.S.length < this.vertices.length) {
      /**
       * @type {Vertex | undefined}
       */
      let candidateVertex;

      for (let i = 0; i < this.S.length; i++) {
        const currentVertex = this.S[i];
        const row = this.matrixTableOfWeight[currentVertex.id];

        for (let j = 0; j < row.length; j++) {
          const weight = row[j] + currentVertex.weight;
          if (weight === Number.POSITIVE_INFINITY) continue;

          const vertex = this.vertices.find((v) => v.id === j);
          if (vertex.isCompleted()) continue;

          // 低コストの行き方を見つけたら、最小値を更新する
          if (weight < vertex.weight) {
            vertex.setWeight(weight);
          }

          if (!candidateVertex || vertex.weight < candidateVertex.weight) {
            candidateVertex = vertex;
          }
        }
      }

      if (candidateVertex) {
        candidateVertex.complete();
        this.S.push(candidateVertex);
      }
    }
    // console.log(this.vertices);
    console.log(`----------start id : ${startId}----------`);
    this.vertices.forEach((v) => {
      console.log(`id ${v.id}, minWeight: ${v.weight}`);
    });
    console.log(
      'S : ',
      this.S.map((v) => v.id)
    );
  }

  resetS() {
    // reser after calculate
    this.S.forEach((v) => {
      v.reset();
      v.setWeight(Number.POSITIVE_INFINITY);
    });
    this.S = [];
  }
}

exports.SingleSourceShortestPath1 = SingleSourceShortestPath1;
