import utils from "./utils";
import Particle from "../objects/Particle";

export default {
  assembleSwarm: (solution, dist_matrix, size) => {
    let swarm = [];
    let best_global_cost = Infinity;
    let best_position = [];
    while (swarm.length < size) {
      let new_route = utils.shuffleArray(solution.slice(1, solution.length));
      new_route.splice(0, 0, 0);
      const new_route_cost = utils.getSolutionCost(new_route, dist_matrix);
      if (!swarm.includes(new_route)) {
        swarm.push(new Particle(new_route, new_route_cost));
        if (new_route_cost < best_global_cost) {
          best_global_cost = new_route_cost;
          best_position = new_route;
        }
      }
    }
    return [swarm, best_position, best_global_cost];
  },
  updateVelocity: (particle, global_best_position, alpha, beta) => {
    //let temp_velocity = [];
    let personal_best_aux = particle.personal_best;
    let global_best_aux = global_best_position;
    for (let i = 1; i < particle.position.length; i++) {
      if (Math.random() <= alpha) {
        if (particle.position[i] !== personal_best_aux[i]) {
          let swap_operator = [
            i,
            personal_best_aux.indexOf(particle.position[i]),
            alpha
          ];
          particle.velocity.push(swap_operator);
          personal_best_aux = utils.swap(
            personal_best_aux,
            swap_operator[0],
            swap_operator[1]
          );
        }
      }
      //temp_velocity.clear(); // not needed. trying something different.
      if (Math.random() <= beta) {
        if (particle.position[i] !== global_best_aux[i]) {
          let swap_operator = [
            i,
            global_best_aux.indexOf(particle.position[i]),
            alpha
          ];
          particle.velocity.push(swap_operator);
          global_best_aux = utils.swap(
            global_best_aux,
            swap_operator[0],
            swap_operator[1]
          );
        }
      }
    }
  },
  resetVelocity: function(swarm) {
    swarm.forEach(particle => {
      particle.velocity = [];
    });
    return swarm;
  }
};
