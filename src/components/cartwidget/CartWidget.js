import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa';

    
const CartWidget = () => {
    const cartItemsCount = 2; //Numero fijo
  
    return (
      <div className="cart-widget">
        <FaShoppingCart className="cart-icon" />
        <span className="notification">{cartItemsCount}</span>
      </div>
    );
  };
  
  export default CartWidget;