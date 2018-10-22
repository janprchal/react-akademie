import React from "react";
import styled from "styled-components";

const StyledExpense = styled.div`
  color: #ffffff;
  font-size: 1.4rem;

  margin-left: 1rem;

  .actual {
    font-size: 1rem;
    color: ;
  }
`;

const Expense = props => {
  return (
    <StyledExpense>
      <div className="">
        {props.expense}
        &nbsp;Kč
      </div>
      <small className="actual">Výdaje</small>
    </StyledExpense>
  );
};

export default Expense;
