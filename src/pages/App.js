import React, { Component } from "react";
import styled from "styled-components";

import data from "./../data.json";

import Button from "./../components/shared/Button";

import Transaction from "./../components/Transaction";
import Filters from "./../components/Filters";

// TODO inject global

// styled.button je fce ktera bere jako param
// string v backtickach ``
const Records = styled.div`
  width: 90%;
  margin: 2rem auto;

  border: 1px solid #fafafa;
  border-radius: 4px;

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.24);
`;

class App extends Component {
  // setState se ted dela takto
  // ne pres ten postut s construktorem a super

  state = {
    transactions: [],
    incomeFilter: false,
    expenseFilter: false,
    all: false
  };

  // vola se kdyz je komponenta ready
  // a uz je vykreslena
  componentDidMount() {
    this.setState({ transactions: data });
  }

  // setState prebira anonymni fci
  // prebira si predchozi stav
  addTransaction = () => {
    // prevstate => je tady fce a mue se menovat jak chci
    // ... zpet operator (es6) - rika, hod mi sem vsechny prvky pole
    // vlastnosti objektu
    console.log("pred setState: " + this.state.transactions.length);
    this.setState(
      prevState => ({
        transactions: [
          // tohle proste nehraje vsechny prvky pole
          ...prevState.transactions,
          // tady jen pridava dalsi zaznam dop pole
          // zaznam je objekt
          {
            name: "Testik pico",
            value: 1500000,
            type: "income"
          }
          // Callback fce
        ]
      }),
      () => {
        console.log("setState callback: " + this.state.transactions.length);
      }
    );
    console.log("Za setState: " + this.state.transactions.length);
  };

  // prevState = () => console.log(this.state.incomeFilter)
  toggleTypeFilter = () => {
    this.setState(
      prevState => ({
        incomeFilter: !prevState.incomeFilter
      }),
      () => console.log(this.state.incomeFilter)
    );

    if (this.state.incomeFilter) {
      this.setState(prevState => ({
        transactions: [
          ...prevState.transactions.filter(function(item) {
            return item.type.includes("income");
          })
        ]
      }));
    }
  };

  // map prebira anonymni funkci
  // parametry -> descructuring
  // do onClick se dava jen reference na fci - bez ()
  // jinak bych predaval vysledek fce
  // Button je shared komponenta ve ktere jsou jen styly
  render() {
    return (
      <React.Fragment>
        <Filters />
        <label>
          Filtruj!
          <input type="checkbox" onClick={this.toggleTypeFilter} />
        </label>
        <Button onClick={this.addTransaction}>+</Button>
        <Records>
          {this.state.transactions.map(({ name, value, type, id }) => (
            <Transaction key={id} name={name} value={value} type={type} />
          ))}
        </Records>
      </React.Fragment>
    );
  }
}

export default App;
