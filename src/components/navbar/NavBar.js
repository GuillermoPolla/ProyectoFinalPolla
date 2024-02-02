
import './NavBar.css';
import CartWidget from '../cartwidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="Company-name"><a href="/">Flash Shop</a></li>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  );
};

export default NavBar;
