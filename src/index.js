import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
// import ClassApp from "./class/ClassApp";
// import App from "./hooks/useState";
// import App from "./hooks/useReducer";
// import App from "./hooks/App";
// import Parent from "./class/ref-demo";
// import Parent from "./hooks/ref-demo";
// import EffectTimeDemo from "./hooks/effect-time-demo";
// import Counter from "./hooks/optimization";
import ClosureDemo from "./hooks/closure";
// import ClosureDemo from "./class/closure";
// import App from "./hooks/cond";

const rootElement = document.getElementById("root");
ReactDOM.render(<ClosureDemo />, rootElement);
