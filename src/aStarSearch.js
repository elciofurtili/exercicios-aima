function aStarSearch(start, goal) {
    let frontier = [{ city: start, path: [start], cost: 0 }];
    let explored = new Set();
  
    while (frontier.length > 0) {
      frontier.sort((a, b) => (a.cost + heuristics[a.city]) - (b.cost + heuristics[b.city]));
      let node = frontier.shift();
      let current = node.city;
  
      if (current === goal) return node.path;
  
      explored.add(current);
  
      for (let neighbor of romaniaMap[current] || []) {
        if (!explored.has(neighbor.city)) {
          frontier.push({
            city: neighbor.city,
            path: [...node.path, neighbor.city],
            cost: node.cost + neighbor.cost
          });
        }
      }
    }
    return null;
  }
  
  console.log("A* Path:", aStarSearch("Dobreta", "Bucharest"));  