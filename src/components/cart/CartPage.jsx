import React from 'react';
import { useCart } from '../cart/Cartcontext'; // Importa useCart desde tu contexto de carrito
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, clearCart, removeItem } = useCart(); // Obtiene el estado del carrito y las funciones para limpiarlo y eliminar productos desde el contexto

  // Función para agrupar los productos por tipo y tamaño y contar la cantidad de cada uno
  const groupItemsByTypeAndSize = (items) => {
    const groupedItems = {};
    items.forEach((item) => {
      const key = `${item.id}-${item.size}`; // Crea una clave única para cada tipo y tamaño de producto
      if (groupedItems[key]) {
        groupedItems[key].quantity++; // Incrementa la cantidad si el producto ya está en el grupo
      } else {
        groupedItems[key] = { ...item, quantity: 1 }; // Agrega el producto al grupo con una cantidad inicial de 1
      }
    });
    return Object.values(groupedItems); // Devuelve un array con los productos agrupados
  };

  const groupedItems = groupItemsByTypeAndSize(cartItems); // Agrupa los productos del carrito

  const getTotalPrice = () => {
    return groupedItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const navigate = useNavigate();

  const handleFinishPurchase = () => {
    alert('Compra finalizada');
    clearCart();
    navigate('/checkout'); // Redirige al usuario al checkout
  };

  const handleRemoveItem = (id, size) => {
    removeItem(id, size);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {groupedItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {groupedItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.size} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}
                <button onClick={() => handleRemoveItem(item.id, item.size)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Monto total: ${getTotalPrice()}</p>
          <button onClick={handleFinishPurchase}>Finalizar compra</button>
          <button onClick={clearCart}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
