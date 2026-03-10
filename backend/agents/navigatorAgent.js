// Simple graph representing mall layout
const mallGraph = {
  Entrance: { Zara: 5, "H&M": 7 },
  Zara: { Entrance: 5, "H&M": 3, Cafe: 6 },
  "H&M": { Entrance: 7, Zara: 3, Cafe: 4 },
  Cafe: { Zara: 6, "H&M": 4 },
};

// Dijkstra Algorithm
export function findShortestPath(start, end) {
  const distances = {};
  const visited = {};
  const previous = {};
  const nodes = Object.keys(mallGraph);

  nodes.forEach((node) => {
    distances[node] = Infinity;
    previous[node] = null;
  });

  distances[start] = 0;

  while (nodes.length) {
    nodes.sort((a, b) => distances[a] - distances[b]);
    const closest = nodes.shift();

    if (closest === end) break;
    if (!closest || distances[closest] === Infinity) break;

    for (let neighbor in mallGraph[closest]) {
      const newDistance =
        distances[closest] + mallGraph[closest][neighbor];

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = closest;
      }
    }
  }

  const path = [];
  let current = end;

  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    distance: distances[end],
    path,
  };
}