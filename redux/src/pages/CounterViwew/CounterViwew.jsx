export const CounterView = ({ count, increment, decrement }) => {
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};