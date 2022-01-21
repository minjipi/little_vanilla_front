import React, { Component } from "react";

class Props_1 extends Component {
  render() {
    let props_val = this.props.props_val;
    props_val += " from Practice.js";
    return <div>{props_val}</div>;
  }
}

export default Props_1;
