const Counter = ({ counter, increment, decrement }) => {
    return (
        <div>
            <button onClick={increment}>PLUS</button>
            <button onClick={decrement}>MINUS</button>
            <h2>{counter}</h2>
        </div>
    )
}

export default Counter;