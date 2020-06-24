import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import p5 from "p5";
import utils from "./utils/utils.js";
import solutionMethods from "./utils/solutionMethods";
import GraphClass from "./components/Graph.js";
import LeftMenu from "./components/LeftMenu";
import MainCanvas from "./components/MainCanvas";
import ResultObj from "./objects/Result";

class App extends Component {
  state = {
    coords: [],
    dist_matrix: [],
    canvas: null,
    graph: null,
    initialRoute: [],
    route: [],
    cities: undefined,
    solving: false,
    test: undefined,
    results: [],
    graphId: -1,
    active: [false, false, false]
  };

  componentDidMount() {
    this.setState({
      graphWidth: document.getElementById("graph").clientWidth,
      graphHeight: document.getElementById("graph").clientHeight
    });
  }

  defineActive(method) {
    let active = [...this.state.active];
    active.forEach((item, index) => {
      active[index] = false;
    });
    if (method !== -1) active[method] = true;
    return active;
  }

  resetCanvasDiv(full) {
    if (full)
      document.getElementById("graph").innerHTML =
        "<p> Graph not initialized! </p>";
    else document.getElementById("graph").innerHTML = "";
  }

  handleDeleteResult(id) {
    let results = [...this.state.results];
    results.splice(id, 1);
    let graphId = -1;
    if (results.length > 0) {
      graphId = this.state.graphId - 1;
      if (id === this.state.graphId) {
        this.resetCanvasDiv();
        let g = new GraphClass(
          this.state.results[graphId].cities,
          this.state.results[graphId].coords,
          this.state.results[graphId].initialRoute,
          this.state.graphWidth,
          this.state.graphHeight
        );
        this.setState({
          graph: g,
          canvas: new p5(g.s, document.getElementById("graph")),
          cities: this.state.results[graphId].cities,
          coords: this.state.results[graphId].coords,
          initialRoute: this.state.results[graphId].initialRoute,
          dist_matrix: this.state.results[graphId].dist_matrix,
          results: results,
          graphId: graphId,
          active: [false, false, false]
        });
      } else {
        /* deleted result is not active result*/
        this.setState({ results: results, graphId: graphId });
      }
    } else {
      /* results became empty*/
      this.resetCanvasDiv(true);
      this.setState({
        graph: null,
        canvas: null,
        cities: [],
        coords: [],
        initialRoute: [],
        dist_matrix: [],
        results: results,
        graphId: graphId,
        active: [false, false, false]
      });
    }
  }

  handleShowResult(id, method) {
    let route;
    switch (method) {
      case 0:
        route = this.state.results[id].local.route;
        break;
      case 1:
        route = this.state.results[id].tabu.route;
        break;
      case 2:
        route = this.state.results[id].pso.route;
        break;
    }
    this.resetCanvasDiv();
    let g = new GraphClass(
      this.state.results[id].cities,
      this.state.results[id].coords,
      route,
      this.state.graphWidth,
      this.state.graphHeight
    );
    let active = this.defineActive(method);
    this.setState({
      graph: g,
      canvas: new p5(g.s, document.getElementById("graph")),
      cities: this.state.results[id].cities,
      coords: this.state.results[id].coords,
      initialRoute: this.state.results[id].initialRoute,
      dist_matrix: this.state.results[id].dist_matrix,
      graphId: id,
      active: active
    });
  }

  handleGenerateGraph(cities) {
    let route = [];
    let coords = [];
    // Generate cities (coords)
    for (let i = 0; i < cities; i++) {
      route.push(i);
      coords.push([
        Math.random() * this.state.graphWidth,
        Math.random() * this.state.graphHeight
      ]);
    }
    const g = new GraphClass(
      cities,
      coords,
      route, // change to [] if initial route should not be displayed
      this.state.graphWidth,
      this.state.graphHeight
    );
    this.resetCanvasDiv();
    let dist_matrix = utils.assemble_dist_matrix(coords);
    const id = this.state.results.length;
    let results = [...this.state.results];
    results.push(new ResultObj(route, coords, dist_matrix));
    this.setState({
      route: route,
      initialRoute: route,
      dist_matrix: dist_matrix,
      cities: cities,
      coords: coords,
      graph: g,
      canvas: new p5(g.s, document.getElementById("graph")),
      solving: false,
      graphId: id,
      results: results
    });
  }

  handleDisplayInitialRoute(id) {
    let g = new GraphClass(
      this.state.results[id].cities,
      this.state.results[id].coords,
      this.state.results[id].initialRoute,
      this.state.graphWidth,
      this.state.graphHeight
    );
    this.resetCanvasDiv();
    this.setState({
      graph: g,
      canvas: new p5(g.s, document.getElementById("graph")),
      cities: this.state.results[id].cities,
      coords: this.state.results[id].coords,
      initialRoute: this.state.results[id].initialRoute,
      dist_matrix: this.state.results[id].dist_matrix,
      graphId: id,
      active: [false, false, false]
    });
  }

  buildResult(method, route, routeCost, elapsedTime) {
    let result = [...this.state.results][this.state.graphId];
    let results = [...this.state.results];
    if (method === 0) {
      [result.local.route, result.local.routeCost, result.local.elapsedTime] = [
        route,
        routeCost,
        elapsedTime
      ];
    } else if (method === 1) {
      [result.tabu.route, result.tabu.routeCost, result.tabu.elapsedTime] = [
        route,
        routeCost,
        elapsedTime
      ];
    } else if (method === 2) {
      [result.pso.route, result.pso.routeCost, result.pso.elapsedTime] = [
        route,
        routeCost,
        elapsedTime
      ];
    }
    results[this.state.graphId] = result;
    return results;
  }

  handleSolveCallback(route, routeCost, elapsedTime) {
    if (this.state.coords.length > 0) {
      let g = new GraphClass(
        this.state.cities,
        this.state.coords,
        route,
        this.state.graphWidth,
        this.state.graphHeight
      );
      this.resetCanvasDiv();
      let results = this.buildResult(
        document.getElementById("solutionMethodSelect").selectedIndex,
        route,
        routeCost,
        elapsedTime
      );
      this.setState({
        graph: g,
        canvas: new p5(g.s, document.getElementById("graph")),
        solving: false,
        route: route,
        results: results
      });
    }
  }

  handleSolve(solutionMethod, callback) {
    if (this.state.solving) {
      console.log("Already solving!");
    } else if (this.state.initialRoute.length > 0) {
      this.setState(
        {
          solving: true
        },
        () => {
          switch (solutionMethod) {
            case 0: // local search
              setTimeout(() => {
                solutionMethods.localSearch(
                  this.state.initialRoute,
                  this.state.dist_matrix,
                  callback
                );
              }, 1000);
              break;
            case 1: // tabu search
              setTimeout(() => {
                solutionMethods.tabuSearch(
                  this.state.initialRoute,
                  this.state.dist_matrix,
                  document.getElementById("inputTabuTenureSize").value,
                  document.getElementById("inputAttemptsWithoutImprovement")
                    .value,
                  callback
                );
              }, 1000);
              break;
            case 2: // PSO
              setTimeout(() => {
                solutionMethods.PSO(
                  this.state.initialRoute,
                  this.state.dist_matrix,
                  document.getElementById("inputParticlesCount").value,
                  document.getElementById("inputAttemptsWithoutImprovement")
                    .value,
                  callback
                );
              }, 1000);
              break;
          }
        }
      );
    }
  }

  render() {
    return (
      <div className="App">
        <LeftMenu
          onGenerateGraph={this.handleGenerateGraph.bind(this)}
          onSolve={this.handleSolve.bind(this)}
          onSolveCallback={this.handleSolveCallback.bind(this)}
          solving={this.state.solving}
        />
        <MainCanvas
          id="mainCanvas"
          results={this.state.results}
          onDeleteResult={this.handleDeleteResult.bind(this)}
          onShowResult={this.handleShowResult.bind(this)}
          onDisplayInitialRoute={this.handleDisplayInitialRoute.bind(this)}
          activeId={this.state.graphId}
          active={this.state.active}
        />
      </div>
    );
  }
}

export default App;
