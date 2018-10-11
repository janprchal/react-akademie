import React from "react";
import styled from "styled-components";

const Record = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem 2rem;

  border-bottom: 1px solid #e6e6e6;

  div {
    flex: 0 0 33.33%;
  }

  div:nth-child(2n) {
    text-align: center;
  }

  div:last-child {
    text-align: right;
  }
`;

const Type = styled.div`
  text-align: right;
`;

const Transaction = (
  { name, value, type } // implicitni return  (TODO)
) => (
  <Record>
    <div>{name}</div>
    <div>{value}</div>
    <Type>{type}</Type>
  </Record>
);

export default Transaction;
