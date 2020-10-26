import React, { Component } from "react";
import "../css/Header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        {" "}
        <h3> TSP Instance Generator</h3>
        <p>
          The Travelling Salesman Problem (TSP) is one of the more well-known
          combinatorial optimization problems in the field of operations research.
        </p>
        <p>
          This page allows you to generate a random complete graph G = (V,E) with a |V| amount of
          cities and solve the problem with three different common solution
          methods: Greedy Algorithm with improvement by Local Search, Tabu Search and Particle Swarm Optimization.
        </p>
        <p>
          Distance between cities is given by the Euclidean Distance (in pixels)
          between them.
        </p>
      </div>
    );
  }
}

export default Header;
