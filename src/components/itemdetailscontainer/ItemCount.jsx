import { useCounter } from "../hooks/useCounter";

export const ItemCount = ({ onAddToCart }) => {
    const { count, increment, decrement, reset } = useCounter(1, 10, 1);

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button onClick={() => onAddToCart(count)}>Agregar al carrito</button>
        </div>
    );
};

