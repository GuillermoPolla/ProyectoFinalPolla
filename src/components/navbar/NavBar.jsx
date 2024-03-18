
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../cartwidget/CartWidget';

const NavBar = ({ greeting }) => {
  return (
    <nav className="navbar">
      <header>
        <ul>
          <li className="Company-name"><Link to="/">Flash Shop</Link></li>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li>{greeting}</li>
          <li><CartWidget /></li>
        </ul>
      </header>
    </nav>
  );
};

export default NavBar;
