import React from "react";

type Props = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
export const CounterView: React.FC<Props> = ({
  count,
  increment,
  decrement,
}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
