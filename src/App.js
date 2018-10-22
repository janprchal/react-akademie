import React, { Component, Fragment } from "react";
import { injectGlobal } from "styled-components";

// import react-router-dom
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Charts from "./pages/Charts";
import BudgetsPage from "./pages/BudgetsPage";
import TransactionsPage from "./pages/TransactionsPage";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Balance from "./components/Balance";

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    padding: 0;
    margin: 0;
  }

  body {
    background: #EBF2F5;
    padding-bottom: calc(86px + 2rem);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navigation />
        <Balance income="80000" expense="58671" />

        <Switch>
          <Route path="/charts" component={Charts} />
          <Route path="/charts" component={Charts} />
          <Route path="/budgets" component={BudgetsPage} />
          <Route path="/transactions" component={TransactionsPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
