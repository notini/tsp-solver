export default {
  two_opt: function(route, i, k) {
    let new_route = route.slice(0, i);
    new_route = new_route.concat(route.slice(i, k).reverse());
    new_route = new_route.concat(route.slice(k, route.length));
    return new_route;
  },
  assemble_dist_matrix: function(coords) {
    let dist_matrix = this.createEmptyMatrix(coords.length);
    for (let i = 0; i < coords.length; i++) {
      for (let j = 0; j < coords.length; j++) {
        dist_matrix[i][j] = this.euclidianDistance(coords, i, j);
        dist_matrix[j][i] = this.euclidianDistance(coords, i, j);
      }
    }
    return dist_matrix;
  },
  assembleNeighborhood: function(solution) {
    let neighbors = [];
    for (let i = 1; i <= solution.length; i++) {
      for (let j = i + 1; j <= solution.length; j++) {
        neighbors.push(this.two_opt(solution, i, j));
      }
    }
    return neighbors;
  },
  swap: function(route, i, k) {
    let new_route = route;
    let aux = new_route[i];
    new_route[i] = new_route[k];
    new_route[k] = aux;
    return new_route;
  },
  getSolutionCost: function(route, dist_matrix) {
    let cost = 0;
    for (let i = 0; i < route.length - 1; i++) {
      cost += dist_matrix[route[i]][route[i + 1]];
    }
    cost += dist_matrix[route[route.length - 1]][route[0]];
    return cost;
  },
  euclidianDistance: function(coords, i, j) {
    return Math.sqrt(
      Math.pow(coords[i][0] - coords[j][0], 2) +
        Math.pow(coords[i][1] - coords[j][1], 2)
    );
  },
  createEmptyMatrix: function(dimension) {
    let matrix = [];
    for (let i = 0; i < dimension; i++) {
      matrix[i] = new Array(dimension);
    }
    return matrix;
  },
  shuffleArray: function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
};
