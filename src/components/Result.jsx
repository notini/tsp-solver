import React, { Component } from "react";
import "../css/Result.css";

class Result extends Component {
  state = {};

  buildShowButton(method) {
    let text, routeCost, elapsedTime;
    let cName = this.props.active[method]
      ? "btn btn-success btn-sm"
      : "btn btn-primary btn-sm";
    switch (method) {
      case 0:
        [text, routeCost, elapsedTime] = [
          "Local Search",
          this.props.result.local.routeCost,
          this.props.result.local.elapsedTime
        ];
        break;
      case 1:
        [text, routeCost, elapsedTime] = [
          "Tabu Search",
          this.props.result.tabu.routeCost,
          this.props.result.tabu.elapsedTime
        ];
        break;
      case 2:
        [text, routeCost, elapsedTime] = [
          "PSO",
          this.props.result.pso.routeCost,
          this.props.result.pso.elapsedTime
        ];
        break;
    }
    return (
      <div className="d-sm-flex flex-row align-items-center">
        <div id="resultValues">
          <p style={{ fontWeight: "bold", padding: '0px', fontSize: '12px' }}>{text}</p>
          <a style={{fontSize: '12px'}}> {"Tour cost: " + routeCost}  </a>
          <a style={{fontSize: '12px'}}>Elapsed Time: {elapsedTime}s</a>
        </div>
        <button
          className={cName}
          style={{ marginRight: "0px" }}
          onClick={() => {
            this.props.onShowResult(this.props.id, method);
            /*this.props.onClick(this.props.id, method);*/
          }}
        >
          Show{" "}
        </button>{" "}
      </div>
    );
  }
  render() {
    const [local, tabu, pso] = [
      this.buildShowButton(0),
      this.buildShowButton(1),
      this.buildShowButton(2)
    ];
    const deleteBtn = (
      <button
        id="deleteButton"
        className="btn btn-danger input-block-level btn-sm"
        onClick={() => {
          this.props.onDeleteResult(this.props.id);
        }}
      >
        {" "}
        x{" "}
      </button>
    );
    return (
      <React.Fragment>
        <div className="singleResult">
          <div className="resultWrapper">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                this.props.onDisplayInitialRoute(this.props.id);
                /*this.props.onClick(this.props.id, -1);*/
              }}
            >
              Initial Route{" "}
            </button>{" "}
            <div className="methodResult">
              {this.props.result.local.routeCost !== undefined ? local : ""}
            </div>
            <div className="methodResult">
              {this.props.result.tabu.routeCost !== undefined ? tabu : ""}
            </div>
            <div className="methodResult">
              {this.props.result.pso.routeCost !== undefined ? pso : ""}
            </div>
          </div>
        </div>
        <div style={{ width: "3%", float: "right", height: "100%" }}>
          {deleteBtn}
        </div>
      </React.Fragment>
    );
  }
}

export default Result;
