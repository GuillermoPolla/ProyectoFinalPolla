import React from 'react';
import { Link } from 'react-router-dom';
import productos from './productos.json';
import './ItemListContainer.css'; // Importa el archivo styles.css


const ItemListContainer = () => {
  return (
    <div className="grid-container">
      {productos.productos.map(producto => (
        <Link to={`/product/${producto.id}`} key={producto.id} className="grid-item">
          <img src={producto.image} alt={producto.nombre} />
          <p>{producto.nombre}</p>
          <button>Ver más</button>
        </Link>
      ))}
    </div>
  );
};

export default ItemListContainer;
