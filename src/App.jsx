// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'
import { CartProvider } from './components/cart/Cartcontext';
import CartPage from './components/cart/CartPage'; // Importa el componente CartPage
import ItemDetailContainer from './components/itemdetailscontainer/ItemDetailsContainer'

export const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartPage />} /> {/* Ruta para mostrar el carrito */}
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} /> {/* Ruta para mostrar detalles del producto */}
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};



export default App;
