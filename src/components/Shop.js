import { stateContext } from '../App';
import { useContext } from 'react';

const Shop = () => {
  const value = useContext(stateContext);

  const handleClick = (item) => {
    const id = item.id;
    value.setCartItems([...value.cartItems, item]);
    value.setInventory([...value.inventory.filter((unit) => unit.id !== id)]);
  };

  return value.inventory.map((item, i) => (
    <div className='items' key={`id_${i}`}>
      <h4>{item.name}</h4>
      <button onClick={() => handleClick({ name: item.name, id: item.id })}>
        Add
      </button>
    </div>
  ));
};

export default Shop;
