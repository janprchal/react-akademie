import React, { Component } from "react";

import ListItem from "./ListItem";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      currentName: "Jebediah"
    };
  }

  changeName = newName => {
    this.setState({
      currentName: newName
    });
  };

  render() {
    return (
      <div class="names">
        <button onClick={() => this.changeName("Honza")}>Zkus vole</button>
        <ul className="testik">
          <ListItem name={this.state.currentName} />
        </ul>
      </div>
    );
  }
}

export default List;
