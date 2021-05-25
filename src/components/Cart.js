import { stateContext } from '../App';
import { useContext } from 'react';

const Cart = () => {
  const value = useContext(stateContext);

  const handleClick = (item) => {
    const id = item.id;
    value.setCartItems([
      ...value.cartItems.filter((cartItem) => cartItem.id !== id),
    ]);
    value.setInventory([...value.inventory, item]);
  };

  return value.cartItems.map((item, i) => (
    <div className='items' key={`id_${i}`}>
      <h4>{item.name}</h4>
      <button onClick={() => handleClick(item)}>Remove</button>
    </div>
  ));
};

export default Cart;
