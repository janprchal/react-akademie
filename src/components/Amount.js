import React from "react";
import styled from "styled-components";

const StyledAmount = styled.div`
  color: #ffffff;
  font-size: 1.9rem;

  .actual {
    font-size: 1rem;
    color: ;
  }
`;

const Amount = props => {
  return (
    <StyledAmount className="amount">
      <div className="">
        {props.balance}
        &nbsp;Kč
      </div>
      <small className="actual">Aktuální stav</small>
    </StyledAmount>
  );
};

export default Amount;
