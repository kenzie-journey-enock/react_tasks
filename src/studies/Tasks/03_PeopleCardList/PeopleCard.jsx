import PropTypes from 'react';

export default function PeopleCard({
  name,
  age,
  country
}) {
  return (
    <li>
      <p>{name} - {age}</p>
      <span>{country}</span>
    </li>
  )
}

PeopleCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  country: PropTypes.string
};