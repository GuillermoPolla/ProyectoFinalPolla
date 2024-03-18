import React from 'react';
import { Link } from 'react-router-dom';
import productos from './productos.json'; // Importa tu array de productos

const ItemListContainer = () => {
  return (
    <div className="grid-container">
      {productos.productos.map(producto => (
        <div className="grid-item" key={producto.id}>
          <p>Pie de foto de {producto.Name}</p>
          <Link to={`/product/${producto.id}`}>
            <button>Ver más</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
