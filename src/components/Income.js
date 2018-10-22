import React from "react";
import styled from "styled-components";

const StyledIncome = styled.div`
  color: #ffffff;
  font-size: 1.4rem;

  margin-left: 1rem;

  .actual {
    font-size: 1rem;
    color: ;
  }
`;

const Income = ({ income }) => {
  return (
    <StyledIncome>
      <div className="">
        {income}
        &nbsp;Kč
      </div>
      <small className="actual">Příjmy</small>
    </StyledIncome>
  );
};

export default Income;
