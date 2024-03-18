import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../cart/Cartcontext';
import { getProductById } from '../firebase/firebasefunctions'; // Importa la función getProductById desde firebaseFunctions

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
    addToCart({
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
    </div>
  );
};

export default ItemDetailsContainer;
