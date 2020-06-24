import React, { Component } from "react";
import Result from "./Result";
import "../css/MainCanvas.css";

class MainCanvas extends Component {
  state = {};

  render() {
    return (
      <div id="mainCanvas">
        {" "}
        <div id="graph">
          {" "}
          <p> Graph not initialized! </p>{" "}
        </div>
        <div id="results">
          {" "}
          <h5 style={{ marginTop: "10px" }}>Results</h5>
          <div className="d-flex flex-row">
            <ul className="list-group justify-content-between align-items-center">
              {this.props.results.map((result, i) => (
                <li
                  className="list-group-item"
                  key={i}
                  style={
                    this.props.activeId === i
                      ? { backgroundColor: "#ccf3ff" }
                      : {}
                  }
                >
                  <Result
                    result={result}
                    id={i}
                    active={
                      this.props.activeId === i
                        ? this.props.active
                        : [false, false, false]
                    }
                    /*onClick={this.props.onClick}*/
                    onDeleteResult={this.props.onDeleteResult}
                    onShowResult={this.props.onShowResult}
                    onDisplayInitialRoute={this.props.onDisplayInitialRoute}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainCanvas;
