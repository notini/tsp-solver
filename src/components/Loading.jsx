import React, { Component } from "react";
import "../css/Loading.css";
/*import loading from "./loading.gif";*/

class Loading extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          alt="Loading.."
          src={process.env.PUBLIC_URL + "/loading.gif"}
          height="50px"
          id='loading-icon'
        />{" "}
      </div>
    );
  }
}

export default Loading;
