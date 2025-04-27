import PropTypes from "prop-types";
import { getNameImgFile } from "../../utils/getNameImgFile";

export default function CardNockBurguer({ name, category, price, img }) {
  const imgName = getNameImgFile(img);

  return (
    <li style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", maxWidth: "300px" }}>
      <img src={`https://raw.githubusercontent.com/kenzie-journey-enock/react_tasks/refs/heads/main/src/studies/Projects/NockBurguer/assets/${imgName}`} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <h2>{name} 🍔</h2>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
    </li>
  );
}

CardNockBurguer.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
};
