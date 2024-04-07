import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar cualquier acción necesaria antes de redirigir
    navigate('/'); // Redirige al usuario al inicio
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input type="text" className="checkout-input" placeholder="Nombre" />
        <input type="text" className="checkout-input" placeholder="Apellido" />
        <input type="email" className="checkout-input" placeholder="Correo electrónico" />
        <input type="tel" className="checkout-input" placeholder="Teléfono" />
        <button type="submit" className="checkout-button">Finalizar compra</button>
      </form>
    </div>
  );
};

export default Checkout;
