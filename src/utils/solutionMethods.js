import utils from "./utils";
import pso_utils from "./pso_utils";

export default {
  localSearch: function(globalBest, dist_matrix, callback) {
    let start = performance.now();
    let improvement = true;
    let bestCost = utils.getSolutionCost(globalBest, dist_matrix);
    while (improvement) {
      improvement = false;
      for (let i = 1; i <= globalBest.length; i++) {
        for (let j = i + 1; j <= globalBest.length; j++) {
          let new_route = utils.two_opt(globalBest, i, j);
          let new_cost = utils.getSolutionCost(new_route, dist_matrix);
          if (new_cost < bestCost) {
            globalBest = new_route;
            bestCost = new_cost;
            improvement = true;
          }
        }
      }
      if (improvement === false) {
        callback(
          globalBest,
          bestCost.toFixed(2),
          ((performance.now() - start) / 1000).toFixed(2)
        );
      }
    }
  },
  tabuSearch: function(
    globalBest,
    dist_matrix,
    tabuTenure,
    attemptsWithoutImprovement,
    callback
  ) {
    let start = performance.now();
    let attemptCounter = 1;
    let bestCandidate = globalBest;
    let tabu = [bestCandidate];
    let bestCandidateCost;
    let best_global_cost = utils.getSolutionCost(globalBest, dist_matrix);
    while (attemptCounter < attemptsWithoutImprovement) {
      let neighborhood = utils.assembleNeighborhood(bestCandidate);
      bestCandidate = neighborhood[0];
      bestCandidateCost = utils.getSolutionCost(bestCandidate, dist_matrix);
      neighborhood.forEach(neighbor => {
        let neighbor_cost = utils.getSolutionCost(neighbor, dist_matrix);
        if (!tabu.includes(neighbor) && neighbor_cost < bestCandidateCost) {
          bestCandidate = neighbor;
          bestCandidateCost = neighbor_cost;
        }
      });
      if (bestCandidateCost < best_global_cost) {
        globalBest = bestCandidate;
        best_global_cost = bestCandidateCost;
        attemptCounter = 1;
        //console.log("improved global best! " + best_global_cost);
      } else {
        attemptCounter += 1;
      }
      tabu.push(bestCandidate);
      if (tabu.length > tabuTenure) tabu.pop(0);
      attemptCounter += 1;
    }
    callback(
      globalBest,
      best_global_cost.toFixed(2),
      ((performance.now() - start) / 1000).toFixed(2)
    );
  },
  PSO: function(
    globalBest,
    dist_matrix,
    particles,
    attemptsWithoutImprovement,
    callback
  ) {
    let start = performance.now();
    let attemptCounter = 0,
      improvement = true;
    const alpha = 0.7,
      beta = 0.6;
    let [swarm, best_position, best_global_cost] = pso_utils.assembleSwarm(
      globalBest,
      dist_matrix,
      particles
    );
    let resetValue = (attemptsWithoutImprovement * 20) / 100;
    let multiplier = 1;
    while (attemptCounter < attemptsWithoutImprovement) {
      improvement = false;
      console.log(attemptCounter)
      if (attemptCounter === resetValue * multiplier) {
        multiplier += 1;
        swarm = pso_utils.resetVelocity(swarm);
      }
      swarm.forEach(particle => {
        pso_utils.updateVelocity(particle, globalBest, alpha, beta);
        particle.velocity.forEach(swap_operator => {
          let new_position = utils.two_opt(
            particle.position,
            swap_operator[0],
            swap_operator[1]
          );
          let new_position_cost = utils.getSolutionCost(
            new_position,
            dist_matrix
          );
          if (new_position_cost < particle.position_cost) {
            [particle.position, particle.position_cost] = [
              new_position,
              new_position_cost
            ];
          }
        });
        if (particle.position_cost < particle.personal_best_cost) {
          [particle.personal_best_cost, particle.personal_best] = [
            particle.position_cost,
            particle.position
          ];
        }
        if (particle.position_cost < best_global_cost) {
          //console.log("improved global best! " + best_global_cost);
          [best_global_cost, best_position, improvement, attemptCounter] = [
            particle.position_cost,
            particle.position,
            true,
            0
          ];
        }
      });
      if (!improvement) attemptCounter += 1;
    }
    callback(
      best_position,
      best_global_cost.toFixed(2),
      ((performance.now() - start) / 1000).toFixed(2)
    );
  }
};
