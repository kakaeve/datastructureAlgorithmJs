import { Graph, WeightedGraph } from "./graph.js";

// const g = new Graph();

// g.addVertex("a");
// g.addVertex("b");
// g.addVertex("c");
// g.addVertex("d");
// g.addVertex("e");
// g.addVertex("f");

// console.log(g);

// // g.removeEdge("a", "c");
// // console.log(g);

// // g.removeEdge("a", "b");
// // console.log(g);
// g.addEdge("a", "b");
// g.addEdge("a", "c");

// g.addEdge("b", "d");
// g.addEdge("c", "e");

// g.addEdge("d", "e");
// g.addEdge("d", "f");

// g.addEdge("e", "f");

// console.log(g.DFSR("a"));

// // g.addEdge("a", "b");
// // g.addEdge("a", "c");

// // g.addEdge("b", "d");
// // g.addEdge("c", "e");

// // g.addEdge("d", "e");
// // g.addEdge("d", "f");

// // g.addEdge("e", "f");

// console.log(g.DFSI("a"));
// console.log(g.BFS("a"));

const wg = new WeightedGraph();

wg.addVertex("a");
wg.addVertex("b");
wg.addVertex("c");

wg.addEdge("a", "b", 9);
wg.addEdge("a", "c", 5);
wg.addEdge("b", "c", 7);

console.log(wg.adjcecyList);
