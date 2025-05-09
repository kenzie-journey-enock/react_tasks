import PropTypes from "prop-types";
import { getNameImgFile } from "../../utils/getNameImgFile";
import { formatMoney } from '../../utils/formatMoney';
import { addToCart } from '../../utils/addToCart';
import { CardNockBurguerStyle, ImgCardProductNockBurguerStyle, InfoCardProductNockBurguerStyle } from "./StyleMolecules";
import BtnAddNockBurguer from "../atoms/BtnAddNockBurguer";

export default function CardNockBurguer({ id, name, category, price, img }) {
  const imgName = getNameImgFile(img);
  const priceMoney = formatMoney(price);

  const handleAddToCart = () => {
    const product = { id, name, category, price, img };
    addToCart(product);
    window.location.reload(); // *.*
  };

  return (
    <CardNockBurguerStyle>
      <ImgCardProductNockBurguerStyle>
        <img src={`/react_tasks/assets/project_nockburguer/${imgName}`} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      </ImgCardProductNockBurguerStyle>
      <InfoCardProductNockBurguerStyle>
        <h3>{name}</h3>
        <p>{category}</p>
        <span>{priceMoney}</span>
        <BtnAddNockBurguer onClick={handleAddToCart} />
      </InfoCardProductNockBurguerStyle>
    </CardNockBurguerStyle>
  );
}

CardNockBurguer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
