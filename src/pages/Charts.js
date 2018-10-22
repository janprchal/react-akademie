import React, { Component } from "react";
import styled from "styled-components";

import { withRouter } from "react-router-dom";

const Charts = props => {
  return (
    <div>
      <h1>Charts</h1>
      <button onClick={() => props.history.push("/")}>Zpet</button>
    </div>
  );
};

export default withRouter(Charts);
