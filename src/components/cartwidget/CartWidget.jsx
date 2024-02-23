import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../cart/Cartcontext' // Importa useCart desde tu contexto de carrito
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

const CartWidget = () => {
  const { cartItems } = useCart(); // Obtiene el estado del carrito desde el contexto
  const cartItemsCount = cartItems.length; // Usa la longitud del array de elementos del carrito

  return (
    <Link to="/cart" className="cart-link"> {/* Envuelve el ícono del carrito con Link y configura la ruta al carrito */}
      <div className="cart-widget">
        <FaShoppingCart className="cart-icon" />
        <span className="notification">{cartItemsCount}</span>
      </div>
    </Link>
  );
};

export default CartWidget;