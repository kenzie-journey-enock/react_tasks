import PropTypes from "prop-types";
import { BtnAddNockBurguerStyle } from "./StyleAtoms";

export default function BtnAddNockBurguer({ onClick }) {
  return (
    <BtnAddNockBurguerStyle onClick={onClick}>
      Adicionar
    </BtnAddNockBurguerStyle>
  );
}

BtnAddNockBurguer.propTypes = {
  onClick: PropTypes.func.isRequired,
};
