import React, { createRef, createContext } from "react";

const Context = createContext("");

class ClassApp extends React.Component {
  constructor() {
    super();
    this.ref = createRef();
  }

  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.ref.current.style.color = "red";
    }, 5000);
  }

  render() {
    return (
      <Context.Provider value="123">
        <input
          ref={this.ref}
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <Child />
      </Context.Provider>
    );
  }
}

class Child extends React.Component {
  static contextType = Context;

  render() {
    return <div>{this.context}</div>;
  }
}

export default ClassApp;
