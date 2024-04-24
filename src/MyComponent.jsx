import { useState } from 'react';

function MyComponent() {

    const [count, setCount] = useState(0);

    function increment() {

        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting line -> Data Structure)
        // During the render, it will call them in the same order.

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        setCount(0);
    }

    return(<div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>)
}

export default MyComponent;