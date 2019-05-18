import React, { useState, useRef } from "react";

export default function ClosureDemo() {
  const [count, setCount] = useState(0);

  const countRef = useRef();
  countRef.current = count;

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleAlert = () => {
    setTimeout(() => {
      alert(countRef.current);
    }, 2000);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleAlert}>Alert</button>
    </>
  );
}
