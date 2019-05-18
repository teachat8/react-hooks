import React, { createRef } from "react";

class ClassChild extends React.Component {
  alert() {
    alert("this is class child");
  }

  render() {
    return <span>This is class child</span>;
  }
}

class Parent extends React.Component {
  constructor() {
    super();
    this.ref = createRef();
  }

  componentDidMount() {
    this.ref.current.alert();
  }

  render() {
    return <ClassChild ref={this.ref} />;
  }
}

export default Parent;
