import React, { Component } from "react";
import styled from "styled-components";

import data from "./../data.json";

import Button from "./../components/shared/Button";
import StyledFilter from "./../components/shared/StyledFilter";
import StyledInput from "./../components/shared/StyledInput";
import StyledForm from "./../components/shared/StyledForm";
import StyledLabel from "./../components/shared/StyledLabel";
import StyledSelect from "./../components/shared/StyledSelect";
import Transaction from "./../components/Transaction";

// styled.button je fce ktera bere jako param
// string v backtickach ``
const Records = styled.div`
  width: 90%;
  margin: 2rem auto;

  background-color: #ffffff;

  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

class TransactionsPage extends Component {
  // setState se ted dela takto
  // ne pres ten postut s construktorem a super

  state = {
    transactions: [],
    transactionsSrc: [],
    filteredTransactions: [],
    filters: {
      income: false,
      expense: false,
      all: true
    },
    filterCategory: 0,
    incomeChecked: false,
    expenseChecked: false,
    allChecked: false,
    // Hodnoty inputu bychom meli navazat na nas state
    // objekt pro tri inputy ktere jsou v html
    newTransaction: {
      name: "",
      value: null,
      type: "income"
    }
  };

  // vola se kdyz je komponenta ready
  // a uz je vykreslena
  componentDidMount() {
    this.setState({ transactions: data });
    this.setState({ transactionsSrc: data }); // kopie dat pro filtrovani
  }

  // setState prebira anonymni fci
  // prebira si predchozi stav
  addTransaction = event => {
    // prevstate => je tady fce a mue se menovat jak chci
    // ... zpet operator (es6) - rika, hod mi sem vsechny prvky pole
    // vlastnosti objektu
    event.preventDefault();

    // console.log("pred setState: " + this.state.transactions.length);
    this.setState(
      prevState => ({
        transactions:
          // tohle proste nehraje vsechny prvky pole
          prevState.transactions.concat(prevState.newTransaction)
        // tady jen pridava dalsi zaznam dop pole
        // zaznam je objekt

        // Callback fce
      }),
      () => {
        console.log("setState callback: " + this.state.transactions.length);
      }
    );
    console.log("Za setState: " + this.state.transactions.length);
  };

  // TODO obslehnout z gitu
  getFilteredTransactions = () => {
    // TODO filterCategory asi musi byt ve state
    const { filterCategory, transactions } = this.state;

    switch (filterCategory) {
      case 0:
      default:
        return transactions;

      case 1:
        return transactions.filter(
          transaction => transaction.type === "income"
        );

      case 2:
        return transactions.filter(
          transaction => transaction.type === "expanse"
        );
    }
  };

  // Registruje onChange, updatuje filters ve state
  toggleFilter = event => {
    const filtersCopy = { ...this.state.filters };

    // Reset
    for (let key in filtersCopy) {
      if (filtersCopy.hasOwnProperty(key)) {
        filtersCopy[key] = false;
      }
    }

    // nasetuje true prislusnemu filteru
    filtersCopy[event.target.id] = true;

    this.setState({ filters: filtersCopy }, () => {
      this.filterChanged();
    });
  };

  // projde filters (kopii) ze state a pokud najde ze nejaka hodnota
  // je true, tak vola metodu pro vyfiltrovani a zobrazeni
  // filtrovanych dat
  filterChanged = () => {
    const filters = { ...this.state.filters };

    for (let key in filters) {
      if (filters.hasOwnProperty(key)) {
        if (filters[key]) {
          this.showFilteredResults(key);
        }
      }
    }
  };

  // zobrazuje filtrovana data dle toho co se ma filtrovat
  // transactionsSrc je pri mountovani komponenty = data
  // tzn. ze beru data pro filtrovani vzdy z "cerstveho zdroje"
  // transactions po filtrovani slouzi je jako kontejner pro vysledky
  // a nikdy z nej neberu data pro dalsi filtrovani
  showFilteredResults = key => {
    if (key === "income") {
      this.setState({
        transactions: this.state.transactionsSrc.filter(item => {
          return item.type.includes("income");
        })
      });
    } else if (key === "expense") {
      this.setState({
        transactions: this.state.transactionsSrc.filter(item => {
          return item.type.includes("expense");
        })
      });
    } else {
      this.setState({ transactions: this.state.transactionsSrc });
    }
  };

  handleInputChange = event => {
    // Distribujeme obsah objektu do noveho objektu
    const newTransactionCopy = { ...this.state.newTransaction };

    // Chci zpristupnit ID (name, value, type)
    // event.target.value - vzdy nese hodnotu
    newTransactionCopy[event.target.id] = event.target.value;

    // Update puvodniho statu novym statem - TODO, takle udelat filtrovani
    this.setState({ newTransaction: newTransactionCopy });
  };

  // map prebira anonymni funkci
  // parametry -> descructuring
  // do onClick se dava jen reference na fci - bez ()
  // jinak bych predaval vysledek fce
  // Button je shared komponenta ve ktere jsou jen styly
  render() {
    // Desctucturing (TODO)
    // Mam pristup ke vsemu co je definovano
    // TODO immutable state objektu
    const {
      transactions,
      filters: { income, expense, all },
      newTransaction: { name, value }
    } = this.state;

    return (
      <div>
        {/* Pres ty styled components je to proste divny */}
        <StyledFilter>
          <div className="c-filters">
            <label className="c-filters__button">
              <input
                className="c-filters__input"
                type="radio"
                name="type"
                id="all"
                onChange={this.toggleFilter}
                checked={all}
              />

              <div className="c-filters__label">Vše</div>
              <div className="c-filters__indicator" />
            </label>

            <label className="c-filters__button">
              <input
                className="c-filters__input"
                type="radio"
                name="type"
                id="income"
                onChange={this.toggleFilter}
                checked={income}
              />

              <div className="c-filters__label">Příjmy</div>
              <div className="c-filters__indicator" />
            </label>

            <label className="c-filters__button">
              <input
                className="c-filters__input"
                type="radio"
                name="type"
                id="expense"
                onChange={this.toggleFilter}
                checked={expense}
              />

              <div className="c-filters__label">Výdaje</div>
              <div className="c-filters__indicator" />
            </label>
          </div>
        </StyledFilter>

        <Records>
          {transactions.map(({ name, value, type, id }) => (
            <Transaction
              key={id}
              name={name}
              value={value}
              type={type}
              className={type}
            />
          ))}
        </Records>

        <StyledForm>
          <div>
            {/* neni nutne psat onChange={ (event) => this.handleInputChange} */}
            {/* react da event sam */}
            <StyledLabel>
              Název transakce
              <StyledInput
                type="text"
                id="name"
                value={name}
                onChange={this.handleInputChange}
              />
            </StyledLabel>
          </div>

          <div>
            {/* ID inputu by melo kopirovat jak jsou ve statu */}
            <StyledLabel>
              Částka
              <StyledInput
                type="number"
                placeholder="Udeťe částku bez měny"
                id="value"
                value={value}
                onChange={this.handleInputChange}
              />
            </StyledLabel>
          </div>

          <div>
            {/* value v selektu bere to co je vybrano jako vychozi */}
            {/* TODO kdy v state definuju jako default hodnotu expanse, tak bude predvybrana v selectu */}
            <StyledLabel>
              {/* Typ */}
              <StyledFilter>
                <div className="c-filters c-filters--two c-filters--full-w">
                  <label className="c-filters__button">
                    <input
                      className="c-filters__input"
                      type="radio"
                      id="type"
                      name="aaa"
                      value="income"
                      onChange={this.handleInputChange}
                    />

                    <div className="c-filters__label">Příjmy</div>
                    <div className="c-filters__indicator" />
                  </label>

                  <label className="c-filters__button">
                    <input
                      className="c-filters__input"
                      type="radio"
                      id="type"
                      name="aaa"
                      value="expense"
                      onChange={this.handleInputChange}
                    />

                    <div className="c-filters__label">Vydaje</div>
                    <div className="c-filters__indicator" />
                  </label>
                </div>
              </StyledFilter>

              {/* <StyledSelect id="type" value={type}  >
                <option value="income">Income</option>
                <option value="expanse">Expanse</option>
              </StyledSelect> */}
            </StyledLabel>
          </div>
          <Button onClick={this.addTransaction}>Přidat</Button>
        </StyledForm>
      </div>
    );
  }
}

export default TransactionsPage;
