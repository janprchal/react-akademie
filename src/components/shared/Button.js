import styled from "styled-components";

// styled.button je fce ktera bere jako param
// string v backtickach ``
const Button = styled.button`
  position: fixed;
  bottom: 1.6rem;
  right: 3rem;

  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;

  background-color: #da4167;

  color: #fff;
  border: 0 none;
  border-radius: 50%;
  box-shadow: 0 0 3px 0 rgba(00, 00, 00, 0.42);

  text-align: center;
  font-weight: 900;
  font-size: 1.7rem;
`;

export default Button;
