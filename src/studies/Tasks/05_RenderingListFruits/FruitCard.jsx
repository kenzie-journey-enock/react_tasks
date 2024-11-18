import PropTypes from 'react';

export default function FruitCard({name, category, price}){
  return (
    <li>
      <p>{name}</p>
      <p>{category}</p>
      <p>{price}</p>
    </li>
  )
}

FruitCard.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
};