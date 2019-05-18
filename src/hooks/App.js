import React, {
  useState,
  useReducer,
  useEffect,
  useRef,
  useContext,
  createContext
} from "react";

const Context = createContext("");

function textReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return action.value;
    default:
      return state;
  }
}

// useState: [state, setState]，useState是useReducer的简单实现
function App() {
  // const [text, setText] = useState("");
  // const state = useState("");
  // const text = state[0];
  // const setText = state[1];

  const [text, dispatchText] = useReducer(textReducer, "");

  const [count, setCount] = useState(0);
  const ref = useRef();

  const handleChange = e => {
    // setText(e.target.value);

    dispatchText({
      type: "UPDATE",
      value: e.target.value
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => {
      console.log("unload");
      clearInterval(interval);
    };
  }, []);

  return (
    <Context.Provider value={{ name: "teachat", age: 22 }}>
      <input ref={ref} type="text" value={text} onChange={handleChange} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child />
    </Context.Provider>
  );
}

function Child() {
  const context = useContext(Context);

  return <div>{context.name}</div>;
}

// class Child extends React.Component {
//   static contextType = Context;

//   render() {
//     return <div>{this.context}</div>;
//   }
// }

export default App;
