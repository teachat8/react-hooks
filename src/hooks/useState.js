import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  createContext
} from "react";

const Context = createContext("");

// useState: [state, setState]
function App() {
  const [text, setText] = useState("");
  // const state = useState("");
  // const text = state[0];
  // const setText = state[1];

  const [count, setCount] = useState(0);
  const ref = useRef();

  const handleChange = e => {
    setText(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      ref.current.style.color = "red";
    }, 8000);
  });

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
