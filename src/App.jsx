import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

const Header = () => {
  return (
    <header>
      <NavBar />
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
