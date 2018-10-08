import React, { Component } from "react";

const Props = data => {
  console.log(data);
  return <li> {data.name} </li>;
};
