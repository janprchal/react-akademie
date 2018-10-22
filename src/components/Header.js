import React, { Component } from "react";
import styled from "styled-components";

const HeaderBlock = styled.header`
  background-color: #0839a2;
`;

class Header extends Component {
  render() {
    return <HeaderBlock />;
  }
}

export default Header;
