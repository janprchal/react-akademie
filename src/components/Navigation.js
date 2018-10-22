import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import HomeIcon from "./../assets/icons/home";
import TransactionIcon from "./../assets/icons/transaction";
import BudgetIcon from "./../assets/icons/budget";
import ChartIcon from "./../assets/icons/chart";

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 86px;
  background-color: #ffffff;

  display: flex;
`;

const NavItem = styled.li`
  flex: 0 0 25%;

  text-align: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

const LinkIcon = styled.i`
  display: block;
  width: 40px;
  height: 40px;
  background-image: ${props => props.iconName};
`;

const Navigation = () => {
  return (
    <header className="header">
      <NavList>
        <NavItem>
          <StyledLink to="/">
            <LinkIcon>
              <HomeIcon />
            </LinkIcon>
          </StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/transactions">
            <LinkIcon>
              <TransactionIcon />
            </LinkIcon>
          </StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/budgets">
            <LinkIcon>
              <BudgetIcon />
            </LinkIcon>
          </StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/charts">
            <LinkIcon>
              <ChartIcon />
            </LinkIcon>
          </StyledLink>
        </NavItem>
      </NavList>
    </header>
  );
};

export default Navigation;
