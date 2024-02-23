import { useState } from 'react';

export const useCounter = (initialValue, maxValue, step) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        if (count < maxValue) {
            setCount(prevCount => prevCount + step);
        }
    };

    const decrement = () => {
        if (count > initialValue) {
            setCount(prevCount => prevCount - step);
        }
    };

    const reset = () => {
        setCount(initialValue);
    };

    return { count, increment, decrement, reset };
};
