import React from "react";

export default class ClosureDemo extends React.Component {
  state = {
    count: 0
  };

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleAlert = () => {
    // 闭包陷阱
    // const count = this.state.count;
    setTimeout(() => {
      alert(this.state.count);

      // alert(count);
    }, 2000);
  };

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleAlert}>Alert</button>
      </>
    );
  }
}
