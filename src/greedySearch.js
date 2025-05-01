function greedySearch(start, goal) {
    let frontier = [{ city: start, path: [start] }];
    let explored = new Set();
  
    while (frontier.length > 0) {
      frontier.sort((a, b) => heuristics[a.city] - heuristics[b.city]);
      let node = frontier.shift();
      let current = node.city;
  
      if (current === goal) return node.path;
  
      explored.add(current);
  
      for (let neighbor of romaniaMap[current] || []) {
        if (!explored.has(neighbor.city)) {
          frontier.push({ city: neighbor.city, path: [...node.path, neighbor.city] });
        }
      }
    }
    return null;
  }
  
  console.log("Greedy Path:", greedySearch("Dobreta", "Bucharest"));  