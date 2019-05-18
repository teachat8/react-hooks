import React, { useEffect, useLayoutEffect, useState } from "react";

const colors = ["red", "green", "yellow"];

export default function EffectTimeDemo() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNum(c => (c === 2 ? 0 : c + 1));
    }, 1000);
  }, []);

  useLayoutEffect(() => {
    // alert(num);
    // console.log(num);
  });

  return <div style={{ background: colors[num] }}>Look At Me</div>;
}
