import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
          //function update 不同于直接赋值 执行的function会被放置在一个queue中,待queue中所有函数执行完毕再re-render  所以这里打印的结果是每次点击+2
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
