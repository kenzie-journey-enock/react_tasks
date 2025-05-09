import PropTypes from "prop-types";
import { getNameImgFile } from "../../utils/getNameImgFile";
import { formatMoney } from '../../utils/formatMoney';
import { CardNockBurguerStyle, ImgCardProductNockBurguerStyle, InfoCardProductNockBurguerStyle } from "./StyleMolecules";
import BtnAddNockBurguer from "../atoms/BtnAddNockBurguer";

export default function CardNockBurguer({ name, category, price, img }) {
  const imgName = getNameImgFile(img);
  const priceMoney = formatMoney(price);

  return (
    <CardNockBurguerStyle>
      <ImgCardProductNockBurguerStyle>
        <img src={`/react_tasks/assets/project_nockburguer/${imgName}`} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      </ImgCardProductNockBurguerStyle>
      <InfoCardProductNockBurguerStyle>
        <h3>{name}</h3>
        <p>{category}</p>
        <span>{priceMoney}</span>
        <BtnAddNockBurguer />
      </InfoCardProductNockBurguerStyle>
    </CardNockBurguerStyle>
  );
}

CardNockBurguer.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
};
