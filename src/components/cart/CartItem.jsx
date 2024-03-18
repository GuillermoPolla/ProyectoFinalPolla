import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ product }) => {
  const { removeFromCart, setCartItems } = useCart();

  const handleRemoveClick = () => {
    removeFromCart(product.id);
    // No necesitas usar setCartItems aquí porque removeFromCart ya actualiza el estado del carrito
  };

  return (
    <div>
      <p>{product.name} - {product.price}</p>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};

export default CartItem;
