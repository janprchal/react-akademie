import styled from "styled-components";

// styled.button je fce ktera bere jako param
// string v backtickach ``
const Button = styled.button`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 46px;

  margin-top: 2rem;
  padding: 0.5rem 1rem;

  background-color: #17b6e4;

  color: #fff;
  border: 0 none;
  border-radius: 3px;

  text-align: center;
  font-weight: 400;
  font-size: 1rem;
`;

export default Button;
