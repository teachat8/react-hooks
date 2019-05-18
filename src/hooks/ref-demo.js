import React, { createRef, useImperativeHandle, forwardRef } from "react";

function FunctionChild(props, ref) {
  useImperativeHandle(ref, () => ({
    alert() {
      alert("This is function component");
    }
  }));

  console.log(ref);
  return <span>This is function child</span>;
}

const ForwardFunctionChild = forwardRef(FunctionChild);

class Parent extends React.Component {
  constructor() {
    super();
    this.ref = createRef();
  }

  componentDidMount() {
    this.ref.current.alert();
  }

  render() {
    return <ForwardFunctionChild ref={this.ref} />;
  }
}

export default Parent;
