import styled from "styled-components";

const StyledInput = styled.input`
  height: 42px;
  width: 100%;

  border: 1px solid #e4e4e4;
  border-radius: 3px;

  margin-top: 0.5rem;
  margin-bottom: 0.75rem;

  padding: 0 1rem;

  &:focus {
    outline: 0 none;
    border-color: #0839a2;
  }
`;

export default StyledInput;
