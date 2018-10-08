import React, { Component } from "react";

const ListItem = props => {
  console.log(props);
  return <li> {props.name} </li>;
};

export default ListItem;
