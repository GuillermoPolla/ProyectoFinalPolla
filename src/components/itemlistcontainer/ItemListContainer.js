import React, { useState } from 'react';
import './ItemListContainer.css'; // Importa el archivo de estilos CSS
import { ItemCount } from '../itemdetailscontainer/ItemCount'; // Importa el componente ItemCount
import { useCart } from '../cart/Cartcontext'; // Importa el hook useCart
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

const ItemListContainer = () => {
  const [selectedSize, setSelectedSize] = useState('S'); // Estado para almacenar el tamaño seleccionado
  const { addToCart } = useCart(); // Obtiene la función addToCart del contexto

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value); // Actualiza el estado cuando se selecciona un tamaño
  };

  const handleAddToCart = () => {
    addToCart({
      name: 'Remera',
      size: selectedSize,
      price: 10,
      quantity: 1,
    });
  };

  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src="/images/Short.jpg" alt="Short" />
        <p>Pie de foto del short</p>
        <select value={selectedSize} onChange={handleSizeChange}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
        <Link to="/product/1">
          <button>Ver más</button> {/* Botón "Ver más" dentro del Link */}
        </Link>
      </div>
      <div className="grid-item">
        <img src="/images/remera.jpg" alt="Remera" />
        <p>Pie de foto de la remera</p>
        <select value={selectedSize} onChange={handleSizeChange}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
        <Link to="/product/2">
          <button>Ver más</button> {/* Botón "Ver más" dentro del Link */}
        </Link>
      </div>
      <div className="grid-item">
        <img src="/images/Gorras.jpg" alt="Gorras" />
        <p>Pie de foto de las Gorras</p>
        <select value={selectedSize} onChange={handleSizeChange}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
        <Link to="/product/3">
          <button>Ver más</button> {/* Botón "Ver más" dentro del Link */}
        </Link>
      </div>
      <div className="grid-item">
        <img src="/images/Zapatos.jpg" alt="Zapatos" />
        <p>Pie de foto de los zapatos</p>
        <select value={selectedSize} onChange={handleSizeChange}>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
        <Link to="/product/4">
          <button>Ver más</button> {/* Botón "Ver más" dentro del Link */}
        </Link>
      </div>
    </div>
  );
};

export default ItemListContainer;
