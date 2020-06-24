export default class Result {
  constructor(initialRoute, coords, dist_matrix) {
    this.initialRoute = initialRoute;
    this.coords = coords;
    this.dist_matrix = dist_matrix;
    this.local = {
      route: [],
      routeCost: undefined,
      elapsedTime: undefined
    };
    this.tabu = {
      route: [],
      routeCost: undefined,
      elapsedTime: undefined
    };
    this.pso = {
      route: [],
      routeCost: undefined,
      elapsedTime: undefined
    };
  }
}
