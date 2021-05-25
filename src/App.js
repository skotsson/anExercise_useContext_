import Shop from './components/Shop';
import Cart from './components/Cart';
import { useState, createContext } from 'react';
import './App.css';

export const stateContext = createContext();

function App() {
  const [inventory, setInventory] = useState([
    { name: 'Socks', id: 0, quantity: 1 },
    { name: 'Hats', id: 1, quantity: 1 },
    { name: 'Shirts', id: 2, quantity: 1 },
  ]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <stateContext.Provider
      value={{
        inventory: inventory,
        setInventory: setInventory,
        cartItems: cartItems,
        setCartItems: setCartItems,
      }}
    >
      <div className='wrapper'>
        <div classname='frame'>
          <h3>Shop</h3>
          <Shop />
        </div>
        <div classname='frame'>
          <h3>Cart</h3>
          <Cart />
        </div>
      </div>
    </stateContext.Provider>
  );
}

export default App;
