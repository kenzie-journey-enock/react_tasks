import { useState } from "react"

import styles from './style.module.scss'

export default function FruitsList() {
  const [items, setItems] = useState([
    { name: 'Strawberry', price: 15, category: 'Fruits' },
    { name: 'Grape', price: 23, category: 'Fruits' },
    { name: 'Banana', price: 23, category: 'Fruits' },
    { name: 'Beetroot', price: 5, category: 'Vegetables' },
  ]);

  const totalValue = items.reduce((acc, item) => acc + item.price, 0);

  const fruits = items.filter((item) => item.category === 'Fruits');
  const vegetables = items.filter((item) => item.category === 'Vegetables');

  const addItem = () => {
    const newItem = {
      name: prompt('Enter the item name:'),
      price: parseFloat(prompt('Enter the item price:')),
      category: prompt('Enter the item category (Fruits or Vegetables):'),
    };

    if (newItem.name && newItem.price && newItem.category) {
      setItems([...items, newItem]);
    } else {
      alert('All fields are required!');
    }
  };

  return (
    <section className={styles.fruitStyle}>
      <div>
        <h1>Fruits and Vegetables List</h1>
        <h2>Total Value: {totalValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h2>

        <h3>Fruits</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>
              {fruit.name} - {fruit.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </li>
          ))}
        </ul>

        <h3>Vegetables</h3>
        <ul>
          {vegetables.map((vegetable, index) => (
            <li key={index}>
              {vegetable.name} - {vegetable.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </li>
          ))}
        </ul>

        <button onClick={addItem}>Add New Item</button>
      </div>
    </section>
  );
}