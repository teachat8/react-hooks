import React, { useState, memo, useCallback, useMemo } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("teachat");

  const config = useMemo(
    () => ({
      text: `count is ${count}`,
      color: count > 3 ? "red" : "green"
    }),
    [count]
  );

  const handleButtonClick = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <Child onButtonClick={handleButtonClick} config={config} />
    </div>
  );
}

// 优化Hook 目标：减少不必要的渲染

const Child = memo(function Child({ onButtonClick, config }) {
  console.log("child render");

  return (
    <button onClick={onButtonClick} style={{ color: config.color }}>
      {config.text}
    </button>
  );
});

export default Counter;
