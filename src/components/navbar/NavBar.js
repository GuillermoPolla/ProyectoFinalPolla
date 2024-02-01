
import './NavBar.css';
import ItemListContainer from '../itemlistcontainer/ItemListContainer'; 
import CartWidget from '../cartwidget/CartWidget'; 
const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><ItemListContainer greeting="Flash Shop" /></li>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  );
};

export default NavBar;
