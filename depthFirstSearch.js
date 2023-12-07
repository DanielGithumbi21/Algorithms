// Depth first search algorithm
// How it works
// 1. Pick a node
// 2. Visit all its neighbors
// 3. Pick another node and repeat
// 4. If there are no more nodes to visit, backtrack

var depthFirstSearch = function (graph, root) {
  let stack = [root];
  let visited = new Set();
  while (stack.length) {
    let node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    console.log(node);
    for (let neighbor of graph[node]) {
      stack.push(neighbor);
    }
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

console.log(depthFirstSearch(graph, "a"));
