const { Vertex } = require('./Vertex');

class MinimumSpanningTree {
  /**
   *
   * @param {number[][]} matrixWeightTable n*nの隣接行列。行列の各値は隣接頂点への重み。-1は隣接しないことを意味する
   */
  constructor(matrixWeightTable) {
    this.matrixWeightTable = matrixWeightTable;

    this.vertices = matrixWeightTable.map((_, i) => {
      return new Vertex(i);
    });

    /**
     * @type {Vertex[]}
     */
    this.T = [];
  }

  prim() {
    const startVertex = this.vertices[0];
    this.T = [startVertex];
    startVertex.complete();

    let totalWeight = 0;

    while (this.T.length < this.vertices.length) {
      let minCost = Number.POSITIVE_INFINITY;
      let startId = -1;
      let destId = -1;

      for (let i = 0; i < this.T.length; i++) {
        const currentVertex = this.T[i];
        const weightRow = this.matrixWeightTable[currentVertex.id];

        for (let j = 0; j < weightRow.length; j++) {
          const weight = weightRow[j];
          const candidateVertex = this.vertices[j];

          // -1は隣接頂点がないことを意味する
          if (weight === -1) continue;
          if (candidateVertex.isCompleted()) continue;

          if (weight < minCost) {
            minCost = weight;
            startId = currentVertex.id;
            destId = j;
          }
        }
      }

      if (destId >= 0) {
        const vertexForNextT = this.vertices[destId];
        this.T.push(vertexForNextT);
        vertexForNextT.complete();
      }

      totalWeight += minCost;
      console.log({ startId, destId, minCost, totalWeight });
    }

    this.resetT();
    console.log({ totalWeight });
  }

  resetT() {
    // reser after calculate
    this.T.forEach((v) => {
      v.reset();
    });
    this.T = [];
  }
}

exports.MinimumSpanningTree = MinimumSpanningTree;
