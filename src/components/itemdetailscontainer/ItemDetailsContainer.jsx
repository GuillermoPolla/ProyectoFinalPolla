// ItemDetailContainer.js
import React from 'react';
import { useParams } from 'react-router-dom'; 

const ItemDetailContainer = () => {
  const { productId } = useParams(); // Obtiene el parámetro productId de la URL


  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>Producto seleccionado: {productId}</p>
    </div>
  );
};

export default ItemDetailContainer;