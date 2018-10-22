import React, { Component } from "react";
import styled from "styled-components";

const BudgetsPage = props => {
  return (
    <div>
      <h1>Budgets</h1>
      <button onClick={() => props.history.push("/")}>Back</button>
    </div>
  );
};

export default BudgetsPage;
