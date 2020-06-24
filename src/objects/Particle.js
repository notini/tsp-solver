export default class Particle {
  constructor(position, cost) {
    this.position = position;
    this.position_cost = cost;
    this.velocity = [];
    this.personal_best = position;
    this.personal_best_cost = cost;
  }
}
