import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
  const navigate = useNavigate(); // Mueve la declaración de navigate aquí

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes enviar los datos del formulario a tu backend o realizar otras acciones necesarias

    navigate('/'); // Redirige al usuario al inicio
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
