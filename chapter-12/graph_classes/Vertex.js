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

  setFirstVisitCount(count) {
    this.firstVisitCount = count;
  }

  nextVertextToVisit() {
    return this.adjVertices.find((v) => {
      return v.color === Vertex.STATE_COLOR_MAP.NOT_VISIT;
    });
  }

  visit(count) {
    if (this.color === Vertex.STATE_COLOR_MAP.NOT_VISIT && count > 0) {
      this.firstVisitCount = count;
    }
    this.color = Vertex.STATE_COLOR_MAP.IN_STACK;
  }

  complete(count) {
    if (this.color !== Vertex.STATE_COLOR_MAP.COMPLETE && count > 0) {
      this.completeCount = count;
    }
    this.color = Vertex.STATE_COLOR_MAP.COMPLETE;
  }

  isVisited() {
    return this.color !== Vertex.STATE_COLOR_MAP.NOT_VISIT;
  }
}

exports.Vertex = Vertex;
