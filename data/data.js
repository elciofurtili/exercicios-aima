const romaniaMap = {
    Arad: [{ city: 'Zerind', cost: 75 }, { city: 'Timisoara', cost: 118 }, { city: 'Sibiu', cost: 140 }],
    Zerind: [{ city: 'Arad', cost: 75 }, { city: 'Oradea', cost: 71 }],
    Oradea: [{ city: 'Zerind', cost: 71 }, { city: 'Sibiu', cost: 151 }],
    Sibiu: [{ city: 'Arad', cost: 140 }, { city: 'Oradea', cost: 151 }, { city: 'Fagaras', cost: 99 }, { city: 'Rimnicu Vilcea', cost: 80 }],
    Timisoara: [{ city: 'Arad', cost: 118 }, { city: 'Lugoj', cost: 111 }],
    Lugoj: [{ city: 'Timisoara', cost: 111 }, { city: 'Mehadia', cost: 70 }],
    Mehadia: [{ city: 'Lugoj', cost: 70 }, { city: 'Dobreta', cost: 75 }],
    Dobreta: [{ city: 'Mehadia', cost: 75 }, { city: 'Craiova', cost: 120 }],
    Craiova: [{ city: 'Dobreta', cost: 120 }, { city: 'Rimnicu Vilcea', cost: 146 }, { city: 'Pitesti', cost: 138 }],
    RimnicuVilcea: [{ city: 'Sibiu', cost: 80 }, { city: 'Craiova', cost: 146 }, { city: 'Pitesti', cost: 97 }],
    Fagaras: [{ city: 'Sibiu', cost: 99 }, { city: 'Bucharest', cost: 211 }],
    Pitesti: [{ city: 'Rimnicu Vilcea', cost: 97 }, { city: 'Craiova', cost: 138 }, { city: 'Bucharest', cost: 101 }],
    Bucharest: [{ city: 'Fagaras', cost: 211 }, { city: 'Pitesti', cost: 101 }]
  };
  
  const heuristics = {
    Arad: 366, Bucharest: 0, Craiova: 160, Dobreta: 242, Fagaras: 176,
    Lugoj: 244, Mehadia: 241, Oradea: 380, Pitesti: 100,
    RimnicuVilcea: 193, Sibiu: 253, Timisoara: 329, Zerind: 374
  };  