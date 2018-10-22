import React from "react";
import styled from "styled-components";

import Amount from "./Amount";
import Income from "./Income";
import Expense from "./Expense";

const StyledBalance = styled.div`
  display: flex;
  align-items: flex-end;

  padding: 1.4rem;

  background-color: #0839a2;

  text-align: center;

  color: #ffffff;
`;

const Balance = props => {
  return (
    <StyledBalance>
      <Amount balance={props.income - props.expense} />
      <Income income={props.income} />
      <Expense expense={props.expense} />
    </StyledBalance>
  );
};

export default Balance;
