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

exports.Graph = Graph;
