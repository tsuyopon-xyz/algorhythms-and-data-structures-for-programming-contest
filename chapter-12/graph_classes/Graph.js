const { Vertex } = require('./Vertex');

class Graph {
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
     * 深さ優先探索用
     * @type {Vertex[]}
     */
    this.stack = [];

    /**
     * 幅優先探索用
     * @type {Vertex[]}
     */
    this.queue = [];
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

  breadthFirstSearch() {
    const startVertex = this.vertices[0];
    this.queue.push(startVertex);

    while (this.queue.length > 0) {
      const currentVertex = this.queue.shift();
      if (!currentVertex.isVisited()) {
        const count = currentVertex.firstVisitCount
          ? currentVertex.firstVisitCount
          : 0;
        currentVertex.visit(count);
      }

      currentVertex.adjVertices.forEach((adjV) => {
        if (!adjV.isVisited()) {
          this.queue.push(adjV);
          adjV.visit(currentVertex.firstVisitCount + 1);
        }
      });
    }
  }

  printForDepthFirstSearch() {
    this.vertices.forEach((v) => {
      console.log(`${v.id} ${v.firstVisitCount} ${v.completeCount}`);
    });
  }

  printForBreadthFirstSearch() {
    this.vertices.forEach((v) => {
      console.log(`${v.id} ${v.firstVisitCount}`);
    });
  }
}

exports.Graph = Graph;
