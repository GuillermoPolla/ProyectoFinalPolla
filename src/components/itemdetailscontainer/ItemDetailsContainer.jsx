import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../cart/Cartcontext';
import { getProductById } from '../firebase/firebasefunctions'; // Importa la función getProductById desde firebaseFunctions
import './ItemDetailsContainer.css';

const ItemDetailsContainer = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(productId); // Obtiene el producto por su id desde Firebase
      setProduct(fetchedProduct);
    };
    fetchProduct();
  }, [productId]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona un talle');
      return;
    }
  
    addToCart({
      id: productId,
      name: product.Name,
      size: selectedSize,
      price: product.Price,
      quantity: 1,
    });
  };
  
  
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.Name}</h2>
      <p>Descripción del producto: {product.Description}</p>
      <p>Talles disponibles:</p>
      <select value={selectedSize} onChange={handleSizeChange}>
        {product.Sizes && product.Sizes.map((size, index) => (
          <option key={index} value={size}>{size}</option>
        ))}
      </select>
      <p> El precio es : ${product.Price}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
      <p>Solo se permite agregar un item debido a problemas de stock</p>
      <p>Gracias y disculpen el incoveniente</p>
      <Link to="/" className="back-link">Volver a la lista</Link>
    </div>
  );
};

export default ItemDetailsContainer;
