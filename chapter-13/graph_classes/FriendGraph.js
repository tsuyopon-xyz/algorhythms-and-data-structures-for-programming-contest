const { Vertex } = require('./Vertex');

class FriendGraph {
  /**
   *
   * @param {number[][]} frindPairs [[id1, id2], [id1, id3], [id4, id5], ...]
   */
  constructor(frindPairs) {
    /**
     * @type {Record<number, Vertex>}
     */
    const memo = {};

    /**
     * @type {Vertex[]}
     */
    this.vertices = [];

    frindPairs.forEach((pair) => {
      const [vertext1, vertext2] = pair.map((id) => {
        if (!memo[id]) {
          memo[id] = new Vertex(id);
          this.vertices.push(memo[id]);
        }
        const vertex = memo[id];

        return vertex;
      });

      vertext1.setAdjVertices([...vertext1.adjVertices, vertext2]);
      vertext2.setAdjVertices([...vertext2.adjVertices, vertext1]);
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

  /**
   *
   * @param {number} id1
   * @param {number} id2
   */
  hasConnectionInDepthFirstSearch(id1, id2) {
    const startVertex = this.vertices.find((v) => v.id === id1);

    this.stack.push(startVertex);
    let hasConnection = false;

    while (this.stack.length > 0) {
      const lastIndex = this.stack.length - 1;
      const currentVertex = this.stack[lastIndex];
      if (currentVertex.id === id2) {
        hasConnection = true;
        break;
      }

      if (!currentVertex.isVisited()) {
        currentVertex.visit();
      }

      const nextVertex = currentVertex.nextVertextToVisit();
      if (nextVertex) {
        this.stack.push(nextVertex);
      } else {
        currentVertex.complete();
        this.stack.pop();
      }
    }

    return hasConnection;
  }

  /**
   *
   * @param {number} id1
   * @param {number} id2
   */
  hasConnectionInBreadthFirstSearch(id1, id2) {
    const startVertex = this.vertices.find((v) => v.id === id1);

    this.queue.push(startVertex);
    let hasConnection = false;

    while (this.queue.length > 0) {
      const currentVertex = this.queue.shift();
      if (currentVertex.id === id2) {
        hasConnection = true;
        break;
      }

      if (!currentVertex.isVisited()) {
        currentVertex.visit();
      }

      currentVertex.adjVertices.forEach((adjV) => {
        if (!adjV.isVisited()) {
          this.queue.push(adjV);
          adjV.visit();
        }
      });
    }

    return hasConnection;
  }
}

exports.FriendGraph = FriendGraph;
