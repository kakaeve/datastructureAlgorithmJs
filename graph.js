class Graph {
  constructor() {
    this.adjacencyList = [];
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(from, to) {
    if (this.adjacencyList[from] && this.adjacencyList[to]) {
      if (!this.adjacencyList[from].includes(to)) {
        this.adjacencyList[from].push(to);
      }
      if (!this.adjacencyList[to].includes(from)) {
        this.adjacencyList[to].push(from);
      }
    }
  }
  removeEdge(from, to) {
    if (this.adjacencyList[from] && this.adjacencyList[to]) {
      if (this.adjacencyList[from].includes(to)) {
        this.adjacencyList[from] = this.adjacencyList[from].filter(
          (v) => v !== to
        );
      }
      if (this.adjacencyList[to].includes(from)) {
        this.adjacencyList[to] = this.adjacencyList[to].filter(
          (v) => v !== from
        );
      }
    }
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length > 0) {
      const adjVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFSR(startNode) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }
    dfs(startNode);
    return result;
  }
  DFSI(startNode) {
    const result = [];
    const visited = {};
    const stack = [];
    let v;
    stack.push(startNode);
    while (stack.length > 0) {
      //console.log("11");
      v = stack.pop();
      if (!visited[v]) {
        result.push(v);
        visited[v] = true;
        //console.log(this.adjacencyList);
        this.adjacencyList[v].forEach((adjV) => {
          if (!visited[adjV]) {
            stack.push(adjV);
          }
        });
      }
    }
    return result;
  }
  BFS(startNode) {
    const result = [];
    const visited = {};
    const queue = [];
    let v;
    queue.push(startNode);
    while (queue.length) {
      v = queue.shift();
      if (!visited[v]) {
        result.push(v);
        visited[v] = true;
        this.adjacencyList[v].forEach((adjV) => {
          queue.push(adjV);
        });
      }
    }
    return result;
  }
}

class WeightedGraph {
  constructor() {
    this.adjcecyList = {};
  }
  addVertex(vertex) {
    if (!this.adjcecyList[vertex]) this.adjcecyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjcecyList[v1].push({ node: v2, weight });
    this.adjcecyList[v2].push({ node: v1, weight });
  }
}

export { Graph, WeightedGraph };
