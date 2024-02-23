
import './NavBar.css';
import CartWidget from '../cartwidget/CartWidget';

const NavBar = ({ greeting }) => {
  return (
    <nav className="navbar">
      <header>
        <ul>
          <li className="Company-name"><a href="/">Flash Shop</a></li>
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li>{greeting}</li>
          <li><CartWidget /></li>
        </ul>
      </header>
    </nav>
  );
};

export default NavBar;


