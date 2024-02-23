// CartPage.js
import React from 'react';
import { useCart } from '../cart/Cartcontext'; // Importa useCart desde tu contexto de carrito

const CartPage = () => {
    const { cartItems } = useCart(); // Obtiene el estado del carrito desde el contexto
  
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
  
    return (
      <div>
        <h2>Carrito de compras</h2>
        {groupedItems.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {groupedItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.size} - Cantidad: {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default CartPage;