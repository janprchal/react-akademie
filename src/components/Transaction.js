import React from "react";
import styled from "styled-components";

const Record = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem 2rem;

  border-bottom: 1px solid #e4e4e4;

  div {
    flex: 0 0 33.33%;
  }

  div:nth-child(2n) {
    text-align: center;
  }

  div:last-child {
    text-align: right;
  }

  &:last-child {
    border-bottom: 0 none;
  }
`;

const Type = styled.div`
  text-align: right;

  &.income {
    color: green;
  }

  &.expense {
    color: red;
  }
`;

const Transaction = (
  { name, value, type } // implicitni return  (TODO)
) => (
  <Record>
    <div>{name}</div>
    <div>{value}</div>
    <Type className={type}>{type}</Type>
  </Record>
);

export default Transaction;
