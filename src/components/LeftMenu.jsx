import React, { Component } from "react";
import "../css/LeftMenu.css";
import Loading from "./Loading";
import Header from "./Header";
import Contact from "./Contact";

class LeftMenu extends Component {
  state = {
    selectedMethod: 0 //local search default
  };

  componentDidMount() {}

  handleMethodChange() {
    this.setState({
      selectedMethod: document.getElementById("solutionMethodSelect")
        .selectedIndex
    });
  }

  render() {
    let params;
    let attemptsWithoutImprovement = (
      <div>
        <label htmlFor="inputAttemptsWithoutImprovement">
          Attempts Without Improvement:
        </label>
        <input
          type="text"
          className="mb-2 mr-sm-2"
          id="inputAttemptsWithoutImprovement"
          defaultValue="100"
          size="1"
        />
      </div>
    );
    if (this.state.selectedMethod === 1) {
      params = (
        <div id="params">
          <label htmlFor="inputTabuTenureSize">Tabu tenure size:</label>
          <input
            type="text"
            className="mb-2 mr-sm-2"
            id="inputTabuTenureSize"
            defaultValue="50"
            size="1"
          />
          {attemptsWithoutImprovement}
        </div>
      );
    } else if (this.state.selectedMethod === 2) {
      params = (
        <div id="params">
          <label htmlFor="inputParticlesCount">Particles:</label>
          <input
            type="text"
            className="mb-2 mr-sm-2"
            id="inputParticlesCount"
            defaultValue="25"
            size="1"
          />
          {attemptsWithoutImprovement}
        </div>
      );
    }

    return (
      <div id="leftMenu" className="leftContainer">
        <Header />
        <div id="content" className="d-flex flex-column">
          <h2> Generate Graph </h2>
          <div className="d-flex justify-content-center">
            <label htmlFor="inputVertices">Cities:</label>
            <input
              type="text"
              id="inputVertices"
              defaultValue="100"
              style={{
                lineHeight: "1.15",
                fontSize: "small",
                width: "30px",
                height: "20px",
                marginRight: "2px"
              }}
            />
            <button
              disabled={this.props.solving ? true : false}
              style={{  marginLeft: "0px", 
                        height: "20px",
                        width: '25px',
                        padding: 0 }}
              onClick={() =>
                this.props.onGenerateGraph(
                  document.getElementById("inputVertices").value
                )
              }
              className="btn btn-primary mb-2 btn-sm"
            >
              Go
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <label htmlFor="solutionMethodSelect">Solution method:</label>
            <select
              style={{
                fontSize: "small",
                width: "100px",
                height: "20px",
                marginRight: "2px",
                padding: 0
              }}
              className="form-control-sm"
              id="solutionMethodSelect"
              onChange={this.handleMethodChange.bind(this)}
            >
              <option>Local Search</option>
              <option>Tabu Search</option>
              <option>PSO</option>
            </select>
            <button
              style={{  marginLeft: "2px", 
                        height: "20px",
                        width: '50',
                        padding: 0 }}
              disabled={this.props.solving ? true : false}
              onClick={() => {
                this.props.onSolve(
                  this.state.selectedMethod,
                  this.props.onSolveCallback
                );
              }}
              className="btn btn-primary mb-2 btn-sm"
            >
              Solve{" "}
            </button>
          </div>
          {this.state.params === 0 ? "" : params}
          <div style={{
            height: '10px'
          }}>
            {this.props.solving ? <Loading /> : ""}
          </div>

          <Contact />
          
        </div>
      </div>
    );
  }
}

export default LeftMenu;
