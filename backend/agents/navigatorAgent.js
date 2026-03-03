const graph = {
  Entrance: { Zara: 10, CoffeeShop: 5 },
  Zara: { Entrance: 10, HnM: 8 },
  HnM: { Zara: 8, CoffeeShop: 7 },
  CoffeeShop: { Entrance: 5, HnM: 7 }
};

exports.calculateRoute = (start, end) => {
  let distance = graph[start][end] || 0;

  return {
    path: [start, end],
    distance
  };
};