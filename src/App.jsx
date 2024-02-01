import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import CartWidget from './components/cartwidget/CartWidget';

const Header = () => {
  return (
    <header>
      <h1>Flash Shop</h1>
      <NavBar />
      <CartWidget />
    </header>
  );
};

function App() {
  const greetingMessage = '¡Bienvenido a la unica tienda mas rapida que el mismo Flash!';

  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting={greetingMessage} />
    </div>
  );
}

export default App;
 