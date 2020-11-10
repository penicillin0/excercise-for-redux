import React from "react";
import { increment, decrement } from "../../store/modules/counter/actions";

type Props = {
  count: number;
  increment: typeof increment;
  decrement: typeof decrement;
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
